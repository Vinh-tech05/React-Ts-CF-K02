import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray border-top mt-5 py-5">
        <div className="container-lg">
          <div className="row g-4 mb-4">
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-light mb-3 text-dark">Shop</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Collections
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-light mb-3 text-dark">Help</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-light mb-3 text-dark">About</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-light mb-3 text-dark">Connect</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted small">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-top pt-3 d-flex justify-content-between align-items-center">
            <p className="text-muted small mb-0">
              © 2025 Luxury Shop. All rights reserved.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none text-muted small">
                Privacy
              </a>
              <a href="#" className="text-decoration-none text-muted small">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
