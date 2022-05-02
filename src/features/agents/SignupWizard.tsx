import React, { useReducer, useState } from "react";
import WizardSteps from "./WizardSteps";
import { DefaultFormData, FormDataReducer } from "./reducer";

const SignupWizard = () => {
  let [step, setStep] = useState<number>(0);
  const [user, setUser] = useReducer(FormDataReducer, DefaultFormData);
  const steps = WizardSteps(step, setStep, user, setUser);

  return <div>
    {
    steps[`${step}`].content
    }
  </div>;
};

export default SignupWizard;
