import React from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';

const steps = {
    1: StepOtp,
    2: StepAvatar
}

const Authenticate = () => {
    const [state, setState] = React.useState(1);

    const plus = () => {
        setState(state + 1);
    }

    const Step = steps[state];
  
  return (
    <div>
      <Step onNext={plus} />
    </div>
  )
}

export default Authenticate
