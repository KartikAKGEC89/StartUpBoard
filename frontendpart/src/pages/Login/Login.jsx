import React from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {
    const [state, setState] = React.useState(1);
    const Step = steps[state];

    const plus = () => {
        setState(state + 1);
    }
  return (
    <div>
      <Step onNext={plus} />
    </div>
  )
}

export default Login
