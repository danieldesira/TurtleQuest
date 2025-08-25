import { Dispatch, SetStateAction } from "react";
import Dialog from "../dialog/Dialog";
import { version } from "../../../package.json";
import EditionSection from "../EditionSection";
import { socials } from "./config";

interface Props {
  setShowAbout: Dispatch<SetStateAction<boolean>>;
}

const AboutDialog = ({ setShowAbout }: Props) => (
  <Dialog title="About Turtle Quest" handleOk={() => setShowAbout(false)}>
    <div className="flex flex-col justify-center gap-2">
      <div className="flex justify-between">
        <a
          href="https://github.com/danieldesira/TurtleQuest/blob/master/changelog.md"
          target="_blank"
          title="Changelog"
        >
          {version}
        </a>
        <div className="flex gap-2">
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
            href="https://github.com/danieldesira/TurtleQuest/blob/master/DEDICATIONS.md"
            target="_blank"
            title="License"
          >
            Dedications
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href={socials.github.url}
            target="_blank"
            title={socials.github.tooltip}
          >
            <socials.github.Icon />
          </a>
          <a
            href={socials.instagram.url}
            target="_blank"
            title={socials.instagram.tooltip}
          >
            <socials.instagram.Icon />
          </a>
          <a
            href={socials.youtube.url}
            target="_blank"
            title={socials.youtube.tooltip}
          >
            <socials.youtube.Icon />
          </a>
        </div>
      </div>
      <EditionSection />
    </div>
  </Dialog>
);

export default AboutDialog;
