import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa6";

type SocialIcon = {
  url: string;
  tooltip: string;
  Icon: IconType;
};

export const socials: Record<string, SocialIcon> = {
  github: {
    url: "https://github.com/danieldesira/TurtleQuest",
    tooltip: "Fork us on Github",
    Icon: FaGithub,
  },
  instagram: {
    url: "https://www.instagram.com/turtlequest.webgame/",
    tooltip: "Follow us on Instagram",
    Icon: FaInstagram,
  },
  youtube: {
    url: "https://www.youtube.com/@SeaTurtleQuestGame",
    tooltip: "Subscribe to our YouTube channel",
    Icon: FaYoutube,
  },
};
