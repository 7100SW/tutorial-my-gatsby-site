import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type UserDetailsModel = {
  firstName: string;
  lastName: string;
};

export function UserDetails(props: {
  step: number;
  setStep: (step: number) => void;
  data: Record<string, any>;
  setData: (data: Record<string, any>) => void;
}) {
  const { step, setStep, data, setData } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserDetailsModel>();

  const onSubmit: SubmitHandler<UserDetailsModel> = (data) => {
    console.log(data);
    setStep(step + 1);
  };

  const Continue = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const Previous = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="container is-fluid">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your first name"
              {...register("firstName")}
            />
          </div>
          <p className="help">Some help text here</p>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your last name"
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link is-light">Previous</button>
          </div>
          <div className="control">
            <button type="submit" className="button is-link">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}