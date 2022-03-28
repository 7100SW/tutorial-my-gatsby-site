import * as React from "react";
import Layout from "../../components/Layout";
import SlideImage from "../../assets/images/food-plate.png";

const ProvidersHome = () => {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div id="carousel-demo" className="carousel pb-6" style={{overflow: 'hidden'}}>
                        <div className="item-1">
                            <div className="columns">
                                <div className="column is-half">
                                    <h2 className="title is-1">Stop! Fruits Corner</h2>
                                    <div className="buttons is-left">
                                        <button className="button is-medium is-orange button is-link is-light">
                                            PROVIDER LOGIN
                                        </button>
                                        <button className="button is-medium is-black is-primary is-light">REGISTER WITH
                                            US
                                        </button>
                                    </div>
                                    <p className={"is-size-6 mb-4"}>
                                        Lorem ipsum dolor sit amet, alia elitr prodesset ei nam, vis mucius doming et,
                                        assum oportere eos eu. Eum ea quot consequat. Dicunt tibique cu vix. Ad his
                                        error alienum reprehendunt, cu cibo vivendum nam, sint habeo pericula pri te.
                                        Commodo quaeque indoctum pri cu, errem graecis appareat no mel, quem commodo ea
                                        qui.
                                    </p>
                                    <p className={"is-size-6 mb-4"}>
                                        Affert petentium qui ea. Vim et offendit menandri adipiscing, sit bonorum
                                        appareat id. Doming aperiam omnesque usu ad, alterum mediocritatem an mei, augue
                                        possim numquam mei.
                                    </p>
                                    <br/>
                                </div>
                                <div className="column is-half">
                                    <figure className="image is is-covered">
                                        <img src={SlideImage} alt=""/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ProvidersHome;