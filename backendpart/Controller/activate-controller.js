class ActivateController {
    async activate(req, res) {
        const { name, avatar } = req.body;
        if (!name || !avatar) {
            res.status(400).send({ "message": "All fields are required" });
        }

        const buffer = Buffer.from(avatar.replace('/^data:image/jpeg;base64,/', ''), 'base64')

        res.send(200).json({"message":"success"})
    }
}

module.exports = new ActivateController();