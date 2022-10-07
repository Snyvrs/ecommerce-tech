import React from "react";
import { Link } from "react-router-dom";
import LoGo from "../../assets/Logo.png";
const MainHeader = () => {
  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={LoGo} alt="logo" width="75px" height="55px" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Laptops
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Desktop Pcs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Networking Devices
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Printers & Scanners
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    PC Parts
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    All Other Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Repairs
                  </a>
                </li>
                <button className="btn rounded-pill btn-outline-primary">
                  Our Deals
                </button>
                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-search"></i>
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-cart-fill"></i>
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-person-circle"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default MainHeader;