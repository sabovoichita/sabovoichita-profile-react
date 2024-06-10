import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import youtube from "../images/youtube.svg";
import email from "../images/email-round.svg";

export function AppFooter() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/voichita-maria-truscai/"
        title="LinkedIn"
        target="_blank"
      >
        <img src={linkedin} width="40px" alt="Linkedin Logo" />
      </a>
      <a href="https://github.com/sabovoichita" title="GitHub" target="_blank">
        <img src={github} width="40px" alt="Github logo" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCUFk52XTij2scqh_E9jlPiw"
        title="Youtube"
        target="_blank"
      >
        <img src={youtube} width="40px" alt="Youtube logo" />
      </a>
      <a href="mailto:sabo_voichita4sacrifice@yahoo.com">
        <img src={email} width="40px" alt="email" />
      </a>
    </footer>
  );
}
