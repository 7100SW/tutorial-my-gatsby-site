import React from "react";

export function PersonalDetails(props: {
  prevStep: () => void;
  handleChange: (input: any) => (e: { target: { value: any } }) => void;
  nextStep: () => void;
  values: {};
}) {
  return (
    <div className="container">
      <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
        <div className="column">
          <form>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}