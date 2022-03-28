import * as React from "react";
import Layout from "../../components/Layout";

const SignupPage = () => {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div id="carousel-demo" className="carousel pb-6" style={{overflow: 'hidden'}}>
                        <div className="item-1">
                            <div className="columns">
                                <div className="column">
                                    <h2 className="title is-1">The Vegetable Shop</h2>
                                    <p className={"is-size-6 mb-4"}>
                                        Lorem ipsum dolor sit amet, alia elitr prodesset ei nam, vis mucius doming et,
                                        assum oportere eos eu. Eum ea quot consequat. Dicunt tibique cu vix. Ad his
                                        error alienum reprehendunt, cu cibo vivendum nam, sint habeo pericula pri te.
                                        Commodo quaeque indoctum pri cu, errem graecis appareat no mel, quem commodo ea
                                        qui.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default SignupPage;