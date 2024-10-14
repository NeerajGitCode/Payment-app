import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-h-[70px] fixed bottom-0 bg-gray-900 text-white flex justify-between items-center p-4">
      <div className="text-sm">
        © 2024 Funding App, Inc. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
