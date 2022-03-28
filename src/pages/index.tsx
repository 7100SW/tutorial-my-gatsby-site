import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="carousel pb-6" style={{ overflow: "hidden" }}>
            <div className="item-1">
              <div className="columns">
                <div className="column">
                  <h2 className="title is-1">Welcome to Our Market</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <br />

                  <div className="buttons is-left">
                    <Link className="button is-large is-link" to="/providers">
                      PROVIDERS
                    </Link>
                    <Link className="button is-large is-link" to="/brokers">
                      BROKERS & AGENTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;