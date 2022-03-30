import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type UserDetailsModel = {
  firstName: string;
  lastName: string;
};

export function UserDetails(props: {
  handleSubmit: (input: any) => (e: { target: { value: any } }) => void;
  nextStep: () => void;
  prevStep: () => void;
  values: {};
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserDetailsModel>();
  const onSubmit: SubmitHandler<UserDetailsModel> = (data) => console.log(data);

  const Continue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    props.prevStep();
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

        <div className={"field"}>
          <button type="submit" onClick={Previous}>
            Previous
          </button>
          <button type="submit" onClick={Continue}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}