import React from "react";
import { Button } from "../styles/Button";
import { ProjectInfoStyle } from "../styles/ProjectInfoStyle";

const ProjectInfo = ({toggle}) => {
  return (
    <ProjectInfoStyle>
        <div className="card">
            <p>
      The Art used in this project was created by <span style={{fontWeight:"bold"}}>Egor Klyuchnyk</span>. <br/><br/>Check out his
      awesome work at <a target="_blank" rel="noreferrer" href="https://www.artstation.com/chekavo">this page </a>. <br/>
       You can also support him {" "}
      <a target="_blank" rel="noreferrer" href="https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222">
        here
      </a>
      . <br/>
      The rest of this game was made as a little coding exercice by
      <a href="https://github.com/SajmonNowak" rel="noreferrer" target="_blank"> me</a>. <br/><br/>Enjoy =)
      </p>
      <Button onClick={toggle}>Ok, Got It!</Button>
      </div>
    </ProjectInfoStyle>
  );
};

export default ProjectInfo;
