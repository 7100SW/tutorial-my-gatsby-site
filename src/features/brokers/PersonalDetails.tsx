import React from "react";

export function PersonalDetails(props: {
  step: number;
  setStep: (step: number) => void;
  data: Record<string, any>;
  setData: (data: Record<string, any>) => void;
}) {
  const { step, setStep, data, setData } = props;

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="container">
      <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
        <div className="column">
          <form onSubmit={handleNext}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  placeholder="e.g. hkakehas@cisco.com"
                >
                  {/*<span className="icon is-small is-left">*/}
                  {/*  <i className="fa fa-envelope"></i>*/}
                  {/*</span>*/}
                </input>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="*********"
                  required
                >
                  {/*<span className="icon is-small is-left">*/}
                  {/*  <i className="fa fa-lock"></i>*/}
                  {/*</span>*/}
                </input>
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
      </div>
    </div>
  );
}