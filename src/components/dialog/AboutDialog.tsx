import React from "react";
import Dialog from "./Dialog";
import { version } from "../../../package.json";
import { FaGithub, FaInstagram } from "react-icons/fa6";

interface Props {
  setShowAbout: Function;
}

function AboutDialog({ setShowAbout }: Props) {
  return (
    <Dialog
      title="About"
      content={
        <>
          <div className="block text-center">
            <a
              href="https://github.com/danieldesira/TurtleEscape/blob/master/changelog.md"
              target="_blank"
              title="Changelog"
            >
              {version}
            </a>
            <a
              href="https://github.com/danieldesira/TurtleEscape/blob/master/contributors.md"
              target="_blank"
              title="Credits"
            >
              Credits
            </a>
          </div>
          <div className="flex">
            <a
              href="https://www.instagram.com/turtleescape.game/"
              target="_blank"
              title="Follow us on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/danieldesira/TurtleQuest"
              target="_blank"
              title="Fork us on Github"
            >
              <FaGithub />
            </a>
          </div>
        </>
      }
      handleOk={() => setShowAbout(false)}
    />
  );
}

export default AboutDialog;
