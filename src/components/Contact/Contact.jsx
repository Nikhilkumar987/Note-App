import React from "react";

function Contact() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-2">
        Feel free to reach out through any of the platforms below:
      </p>
      <ul className="text-lg text-blue-600 space-y-2">
        <li>
          📧 Email:{" "}
          <a href="mailto:nkydv100@gmail.com" className="underline">
            nkydv100@gmail.com
          </a>
        </li>
        <li>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </li>
        <li>
          🐦 X (Twitter):{" "}
          <a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @yourhandle
          </a>
        </li>
      </ul>
    </>
  );
}

export default Contact;
