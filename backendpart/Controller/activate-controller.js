const Jimp = require('jimp');
const userService = require('../Services/user-service');
const path = require('path');
const UserDto = require('../dtos/user-dto'); // Assuming you have a UserDto file

class ActivateController {
    async activate(req, res) {
        const { name, avatar } = req.body;
        if (!name || !avatar) {
            return res.status(400).json({ "message": "All fields are required" });
        }

        const buffer = Buffer.from(avatar.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''), 'base64');
        const pathname = `${Date.now()}-${Math.random()}.jpeg`;

        try {
            const jimp = await Jimp.read(buffer);
            await jimp.resize(150, Jimp.AUTO).writeAsync(path.resolve(__dirname, `../storage/${pathname}`)); // Use writeAsync for proper async handling
        } catch (error) {
            console.error("Error processing image:", error); // Log the error
            return res.status(500).json({ "message": "Image not processed" });
        }

        const userId = req.user._id;

        try {
            const user = await userService.findUser({ _id: userId });
            if (!user) {
                return res.status(404).json({ "message": "User not found" });
            }

            user.activated = true;
            user.name = name;
            user.avatar = `/storage/${pathname}`;
            await user.save();
            return res.json({ "message": new UserDto(user), auth: true });
        } catch (error) {
            console.error("Error updating user:", error); // Log the error
            return res.status(500).json({ "message": "Internal Server Error" });
        }
    }
}

module.exports = new ActivateController();
