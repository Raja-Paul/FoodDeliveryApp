import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Container to center the content */}
      <div className="container">
        {/* Footer with Bootstrap styling */}
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          {/* Left section with company information */}
          <div className="col-md-4 d-flex align-items-center">
            {/* Company logo or other content */}
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              {/* You can add a logo or other content here */}
            </a>
            {/* Company copyright information */}
            <span className="text-muted">© 2024 <i>GoFood</i>, Inc</span>
          </div>
  
          {/* Right section with social media links */}
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            {/* Twitter icon */}
            <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-twitter"></i></a></li>
            {/* Instagram icon */}
            <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-instagram"></i></a></li>
            {/* Facebook icon */}
            <li className="ms-3"><a className="text-muted" href="/"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;