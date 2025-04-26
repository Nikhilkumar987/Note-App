import React from "react";

function Terms() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-lg text-gray-700 mb-4">
        By using our Note App, you agree to the following terms:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
        <li>Use the app responsibly and for personal purposes only.</li>
        <li>Do not store or share any illegal, harmful, or offensive content.</li>
        <li>We are not responsible for any data loss; please back up your important notes.</li>
        <li>We may update these terms at any time, and continued use means you accept the new terms.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">
        Thank you for choosing our Note App!
      </p>
    </>
  );
}

export default Terms;
