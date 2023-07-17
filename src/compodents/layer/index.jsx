import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout(props) {
    //const children = props.children;
    // const children = props.children; 
    // const title = props.title;
    // const content = props.content;
    // const { children, title, content } = props;
    // = const { children } = props;
    // const content = props.children;
    // const { children: content } = props;
    const { children,contentHeader, contentFooter } = props;
    console.log('adasds',children)
    return (
        <>
        <Header title={contentHeader} />
            {children}
 
        <Footer title={contentFooter}/>
        </>
    );
}

export default Layout;