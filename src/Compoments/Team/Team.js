import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import "./Team.css";
import { useHistory } from "react-router";

const Team = (props) => {
  const { idTeam, strTeam, strTeamBadge, strSport } = props.teamInfo;

  const history = useHistory();

  const handleClickBtn =(idTeam) =>{
      const teamId = `team/${idTeam}`
      history.push(teamId);
  }

  return (
    <div className="row team-info">
      <div className="col">
        <div className="card">
          <img src={strTeamBadge} className="card-img-top team-badge" alt="" />
          <div className="card-body">
            <h4 className="card-title team-name">{strTeam}</h4>
            <p className="card-text sport-type">Sports Type : {strSport}</p>
            <button onClick={() => handleClickBtn(idTeam)} className="btn btn-primary">Explore <FontAwesomeIcon className="arrow" icon={faLongArrowAltRight} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
