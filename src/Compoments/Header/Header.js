import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from '../../photos/league-logo.png'

const Header = () => {
  return (
    <section>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-thumbnail">
                <div className="header-logo">
                  <img
                    className="img-fluid"
                    src={logo}
                    alt=""
                  />
                </div>
                <div className="header-title">
                  <span>Spanish La Liga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
