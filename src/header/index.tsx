import selfie from "../images/selfie.jpg";
import light from "../images/pic_bulbon.gif";

export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="header-picture">
          <img src={selfie} height={100} alt="selfie" />
        </div>
        <div id="header-info">
          <h1>Voichita Maria</h1>
          <p id="job-title">Transport Manager</p>
        </div>
        <div className="toggle-container" id="greyscale">
          <div>
            <img src={light} alt="lighton" width="30px" />
          </div>
        </div>
      </div>

      <ul id="top-menu-bar">
        <li>
          <a href="#" data-page="home">
            🏡Home
          </a>
        </li>
        <li>
          <a href="#" data-page="skills">
            Skills
          </a>
        </li>
        <li>
          <a href="#" data-page="projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#" data-page="languages">
            Languages
          </a>
        </li>
      </ul>
    </header>
  );
}
