import * as React from "react";
import Layout from "../../components/Layout";
import SignupWizard from "../../features/brokers/SignupWizard";

const SignupPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div
            id="carousel-demo"
            className="carousel pb-6"
            style={{ overflow: "hidden" }}
          >
            <div className="item-1">
              <div className="columns">
                <div className="column">
                  <h2 className="title is-1">The Vegetable Shop</h2>
                  <SignupWizard></SignupWizard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupPage;