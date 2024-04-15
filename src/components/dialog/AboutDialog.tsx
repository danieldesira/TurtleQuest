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
      title="About Turtle Quest"
      content={
        <>
          <div className="flex justify-center gap-2">
            <a
              href="https://github.com/danieldesira/TurtleQuest/blob/master/changelog.md"
              target="_blank"
              title="Changelog"
            >
              {version}
            </a>
            <a
              href="https://github.com/danieldesira/TurtleQuest/blob/master/contributors.md"
              target="_blank"
              title="Credits"
            >
              Credits
            </a>
            <a
              href="https://github.com/danieldesira/TurtleQuest/blob/master/license.md"
              target="_blank"
              title="License"
            >
              License
            </a>
            <a
              href="https://github.com/danieldesira/TurtleQuest/blob/master/dedications.md"
              target="_blank"
              title="License"
            >
              Dedications
            </a>
          </div>
          <div className="flex justify-center">
            <img src="./favicon.svg" alt="" width={30} />
          </div>
          <div className="flex gap-5 justify-center">
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
