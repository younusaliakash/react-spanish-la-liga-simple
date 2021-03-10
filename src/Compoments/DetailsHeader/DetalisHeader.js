import React from "react";

const DetalisHeader = (props) => {
  const { teamLogo } = props;
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header-thumbnail">
                <div className="header-logo">
                  <img className="img-fluid" src={teamLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalisHeader;
