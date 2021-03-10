import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Teams.css'

const Teams = () => {
    const [teams , setTeams] = useState([]);

    useEffect(() =>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20La%20Liga")
        .then((response) => response.json())
        .then( data => setTeams(data.teams))
    },[])
    return (
        <div className="teams">
            {
                teams.map(team => <Team teamInfo={team} key={team.idTeam}></Team>)
            }
        </div>
    );
};

export default Teams;