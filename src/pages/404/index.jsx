import React from 'react';
import { Link } from 'react-router-dom';

import './404.scss';

function NotFoundPage(props) {
  return (
    <div className="container-fluid overflow-hidden not-found-page">
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2" />
            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>
          <div className="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <Link to="/"><button>i dare!</button></Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;