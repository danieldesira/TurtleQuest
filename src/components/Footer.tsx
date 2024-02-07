import React from "react";
import { version } from "../../package.json";

function Footer() {
  return (
    <div className="fixed bottom-1 right-1 flex gap-5">
      <a
        href="https://github.com/danieldesira/TurtleEscape/blob/master/changelog.md"
        target="_blank"
      >
        {version}
      </a>
      <a
        href="https://github.com/danieldesira/TurtleEscape/blob/master/contributors.md"
        target="_blank"
      >
        Daniel & co
      </a>
    </div>
  );
}

export default Footer;
