import React, { useReducer, useState } from "react";
import useMergeState from "../../hooks/useMergeState";
import { UserDetails } from "./UserDetails";
import { PersonalDetails } from "./PersonalDetails";
import { Confirmation } from "./Confirmation";
import { Success } from "./Success";
import FormSteps from "./FormSteps";
import { DefaultFormData, FormDataReducer } from "./reducer";

const SignupWizard = () => {
  let [step, setStep] = useState(0);
  const [user, setUser] = useReducer(FormDataReducer, DefaultFormData);
  let steps = FormSteps(step, setStep, user, setUser);

  return <div>{steps[`${step}`].content}</div>;
};

export default SignupWizard;