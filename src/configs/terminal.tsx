import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Manish. I am a BTech. student at the Computer and
              Engineering department of Silicon University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Vision-Language Learning"
      },
      // {
      //   id: "about-who-cares",
      //   title: "who-cares.txt",
      //   type: "file",
      //   content: ""
      // },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:renovamenzxh@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                officiallymanishh@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/darkvyper"
                target="_blank"
                rel="noreferrer"
              >
                @darkvyper
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/mxnish"
                target="_blank"
                rel="noreferrer"
              >
                Manish Kumar Jha
              </a>
            </li>
            {/* <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://xyz.io"
                target="_blank"
                rel="noreferrer"
              >
                https://xyz.io
              </a>
            </li> */}
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
