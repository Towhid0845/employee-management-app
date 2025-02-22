import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_area text-center">
      <p>
        Copyright © 2025{" "}
        <Link
          to="https://iamtowhid.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Towhiduzzaman.
        </Link>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer


