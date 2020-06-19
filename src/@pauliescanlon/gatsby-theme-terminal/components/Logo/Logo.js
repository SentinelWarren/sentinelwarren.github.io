/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export const Logo = () => (
  <Link to="/">
    <div sx={{ height: "32px", overflow: "hidden" }}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.1 32" height="32">
        <g id="Layer_2_1_">
          <g id="Layer_1-2">
            <path transform="rotate(-45 16.03311716 16.00028287)" sx={{ fill: "background" }} d="M4.7 4.7h22.6v22.6H4.7z"/>
          </g>
        </g>
      </svg>
    </div>
  </Link>
);
