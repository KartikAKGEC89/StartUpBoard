import React from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
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
