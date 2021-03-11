import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TeamDetalis.css";
import { Link } from "react-router-dom";
import {
  faFlag,
  faFutbol,
  faMapMarker,
  faMarsStroke,
} from "@fortawesome/free-solid-svg-icons";
import femaleTeam from "../../photos/female.png";
import maleTeam from "../../photos/male.png";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import DetalisHeader from "../DetailsHeader/DetalisHeader";

const TeamDetails = () => {
  const [team, setTeam] = useState({});
  const { idTeam } = useParams();

  const {
    strTeam,
    intFormedYear,
    strTeamBadge,
    strStadiumThumb,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strDescriptionES,
    strFacebook,
    strTwitter,
    strYoutube,
  } = team;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeam(data.teams[0]));
  }, [idTeam]);
  return (
    <div className="team-details">
      <div className="team-detalis-logo">
        <DetalisHeader teamLogo={strTeamBadge} strStadiumThumb={strStadiumThumb}></DetalisHeader>
      </div>
      <div className="container team-detalis-description">
        <div className="row team-card p-2">
          <div className="col-md-8 team-description">
            <h3 className="team-title">{strTeam}</h3>
            <h5>
              <FontAwesomeIcon className="icon" icon={faMapMarker} />
              Founded : {intFormedYear}
            </h5>
            <h5>
              <FontAwesomeIcon className="icon" icon={faFlag} />
              Country : {strCountry}
            </h5>
            <h5>
              <FontAwesomeIcon className="icon" icon={faFutbol} />
              Sport Type : {strSport}
            </h5>
            <h5>
              <FontAwesomeIcon className="icon" icon={faMarsStroke} />
              Gender : {strGender}
            </h5>
          </div>
          <div className="col-md-4 team-picture">
            {strGender === "Male" ? 
              <img className="img-fluid" src={maleTeam} alt="" />
             : 
              <img className="img-fluid" src={femaleTeam} alt="" />
            }
          </div>
        </div>
      </div>
      <div className="container description-text">
        <p className="description first-part">
          <small>{strDescriptionEN}</small>
        </p>
        <p className="description last-part">
          <small>{strDescriptionES}</small>
        </p>
        <div className="social-link">
          <div className="facebook">
            <Link to={{ pathname: `https://${strFacebook} ` }} target="_blank">
              <FontAwesomeIcon
                className="icon facebookIcon"
                icon={faFacebook}
              />
            </Link>
          </div>
          <div className="twitter">
            <Link to={{ pathname: `https://${strTwitter} ` }} target="_blank">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </Link>
          </div>
          <div className="youtube">
            <Link to={{ pathname: `https://${strYoutube} ` }} target="_blank">
              <FontAwesomeIcon className="icon youtubeIcon" icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
