import './style.scss';
import React from 'react';
import Helmet from './Helmet';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div>
        <Helmet />
        <Header siteTitle={undefined} />
        <section className={"hero is-fullheight"}>
            <div className={"title"}>
                {children}
            </div>
        </section>
        <Footer />
    </div>
);

export default Layout;