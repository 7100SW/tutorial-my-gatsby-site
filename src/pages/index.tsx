import * as React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle={'My Gatsby App'}>
      <p>I am making this by following Gatsby Tutorial</p>
      <StaticImage
          src={"../images/rack-servers.jpg"}
          alt={"For Test Only"}/>
    </Layout>
  );
}

export default IndexPage