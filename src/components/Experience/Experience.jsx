import React from "react";
import "./Experience.css";
import { FaExternalLinkAlt } from "react-icons/fa";
const Experience = () => {
  return (
    <div className="exp" id="exp">
      <div className="exp-title">
        <p>MY EXPERIENCE</p>
        <h1>My professional journey</h1>
      </div>
      <div className="cards">
        <div className="card1">
          <div className="card-title">
            Youe <FaExternalLinkAlt className="arr" />
          </div>
          <p className="date">Nov 2024-Present</p>
          <ul>
            <li>
              Revamped the React Native app, driving Youe's first revenue, and
              migrated its backaend to reduce load times by 50% using React
              Native and Next js.
            </li>
          </ul>
        </div>
        <div className="card2">
          <div className="card-title">
            Patent Ninja <FaExternalLinkAlt className="arr" />
          </div>
          <p className="date">Mar 2024-Present</p>
          <ul>
            <li>
              Patent Ninja is a tool I built from scratch to make the patent
              filing process fast and simple.
            </li>
            <li>
              It guides users through the entire process,enabling them to create
              a fully detailed patent in just around 10 minutes.
            </li>
            <li>
              I also integrated features like Patent Search and Patent Response,
              which help users quickly look up and validate patents on the go.
            </li>
            <li>
              For security and convenience.I added Google and email link
              authentication using Firebase.
            </li>
          </ul>
        </div>
        <div className="card3">
          <div className="card-title">
            Ventura Secutities <FaExternalLinkAlt className="arr" />
          </div>
          <p className="date">Aug 2024-Sept 2024</p>
          <ul>
            <li>
              I developed server-side mutual fund sections using React Server
              Components, utilixing Next.js as the primary tech stack.
            </li>
            <li>
              This implementation optimized the rendering process, enabling
              efficient data fetching and improving performance for complex
              financial data displays.
            </li>
          </ul>
        </div>
        <div className="card4">
          <div className="card-title">
            Hiretal <FaExternalLinkAlt className="arr" />
          </div>
          <p className="date">Aug 2023-May 2024</p>
          <ul>
            <li>
              Developed a robust TypeScript and Express backend architecture,
              significantly optimizing Elasticsearch queries to achieve a
              100-fold increase in speed.
            </li>
            <li>
              Additionally, I streamlined the deployment process on Digital
              Ocean by utilizing Docker,complemented wtih efficient build
              scripts.
            </li>
            <li>
              To further enhance system performance, i implemented caching
              mechanisma on both the frontend and backend, resulting in a
              remarkable 10times faster response time.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
