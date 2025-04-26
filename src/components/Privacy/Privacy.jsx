import React from "react";

function Privacy() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-4">
        We value your privacy and are committed to protecting your personal information.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
        <li>We do not collect any personal data without your consent.</li>
        <li>Your notes are private and only accessible to you.</li>
        <li>We do not share your data with third parties.</li>
        <li>We may collect minimal usage data to improve app performance, but it will always remain anonymous.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">
        By using our app, you agree to this privacy policy. We may update it occasionally, so please check back for any changes.
      </p>
    </>
  );
}

export default Privacy;
