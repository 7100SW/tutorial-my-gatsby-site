import React from "react";
import { PersonalDetails } from "./PersonalDetails";
import { UserDetails } from "./UserDetails";

const WizardSteps = (
  step: number,
  setStep: (set: number) => void,
  data: Record<string, any>,
  setData: (data: Record<string, any>) => void
) => [
  {
    title: "Personal Details",
    content: (
      <PersonalDetails
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
      />
    ),
  },
  {
    title: "User Details",
    content: (
      <UserDetails
        step={step}
        setStep={setStep}
        data={data}
        setData={setData}
      />
    ),
  },
];
export default WizardSteps;
