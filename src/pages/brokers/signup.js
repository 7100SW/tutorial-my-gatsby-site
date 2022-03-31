import * as React from "react";
import Layout from "../../components/Layout";
import SignupWizard from "../../features/brokers/SignupWizard";
import SlideImage from "../../assets/images/food-plate.png";

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
                <div className="column is-half">
                  <h2 className="title is-1">Stop! Survey Surprise</h2>
                  <SignupWizard></SignupWizard>
                </div>
                <div className="column is-half">
                  <figure className="image is is-covered">
                    <img src={SlideImage} alt="" />
                  </figure>
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