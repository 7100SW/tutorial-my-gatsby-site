import * as React from "react";
import Layout from "../../components/Layout";
import VegetableImage from "../../assets/images/vegetables.jpg";
import {Link} from "gatsby";

const BrokersAndAgentsHome = () => {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div id="carousel-demo" className="carousel pb-6" style={{overflow: 'hidden'}}>
                        <div className="item-1">
                            <div className="columns">
                                <div className="column is-half">
                                    <h2 className="title is-1">The Vegetable Shop</h2>
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
                                    <p className={"is-size-6 mb-4"}>
                                        Et voluptatem autem sed nostrum dolorem et quae unde qui soluta magni est
                                        molestias nulla. Qui quia laudantium aut repellendus consequuntur 33 corrupti
                                        illum ut corrupti distinctio et itaque commodi est iusto odio.
                                    </p>

                                    <div className="buttons is-left">
                                        <Link className="button is-medium is-orange button is-link is-light"
                                              to="/brokers">BROKER LOGIN</Link>
                                        <Link className="button is-medium is-black is-primary is-light"
                                              to="/brokers/signup">SIGNUP</Link>
                                    </div>

                                </div>
                                <div className="column is-half">
                                    <figure className="image is is-covered">
                                        <img src={VegetableImage} alt=""/>
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

export default BrokersAndAgentsHome;