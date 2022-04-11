



import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/Logo.png";
// import Logo from '../../Assets/Logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light  navbar-expand-md bg-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand navlogo" to="/">
            <APCLogo />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navul">
              <li className="   mx-1">
                <NavLink className="   navlinks " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className=" m font-bold">
                <NavLink className="navlinks text-gray font-bold " to="/a">
                  About
                </NavLink>
              </li>
              <li className=" m"></li>
              <li className=" m">
                <NavLink className="navlinks text-gray" to="/d">
                  Capabilities
                </NavLink>
              </li>
              <li className=" ">
                <NavLink className="navlinks text-gray" to="/f">
                  Reports{" "}
                </NavLink>
              </li>
              <li className=" m">
                <NavLink className="navlinks text-gray" to="/f">
                  Investors{" "}
                </NavLink>
              </li>{" "}
              <li className=" mx">
                <NavLink className="navlinks text-gray" to="/g">
                  Contact{" "}
                </NavLink>
              </li>
              <li className=" loginBtn ">
              <a href="#" class="navlinks buttons w-nav-link loginBtn">
              Login
            </a>
              </li>
              <li className="regBtn ">
              <a href="#" class="navlinks buttons _2 w-nav-link regBtn">
              Register
            </a>
              </li>
           
               <form action="/search" class="searchbar w-form ">
              <label for="search" class="field-label">
                Search
              </label>
              <input
                type="search"
                class="searchinput w-input"
                maxlength="256"
                name="query"
                placeholder=""
                id="search"
                required=""
              />
              <input
                type="submit"
                value="Search"
                class="searchbutton w-button font-bold"
              />
            </form>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        class="navigationbar w-nav"
      >
        <div class="navwrapper">
          <APCLogo />
          <nav role="navigation" class="navigationmenu w-nav-menu">
            <a href="#" class="navlinks active w-nav-link">
              Home
            </a>
            
            <a href="#" class="navlinks w-nav-link">
              About
            </a>
            <a href="#" class="navlinks w-nav-link">
              Capabilities
            </a>
            <a href="#" class="navlinks w-nav-link">
              Reports
            </a>
            <a href="#" class="navlinks w-nav-link">
              Investors
            </a>
            <a href="#" class="navlinks w-nav-link">
              Contact
            </a>
            <a href="#" class="navlinks buttons w-nav-link">
              Login
            </a>
            <a href="#" class="navlinks buttons _2 w-nav-link">
              Register
            </a>
            <form action="/search" class="searchbar w-form">
              <label for="search" class="field-label">
                Search
              </label>
              <input
                type="search"
                class="searchinput w-input"
                maxlength="256"
                name="query"
                placeholder=""
                id="search"
                required=""
              />
              <input
                type="submit"
                value="Search"
                class="searchbutton w-button font-bold"
              />
            </form>
          </nav>
        
        </div>
      </div> */}




    </>
  );
};

export default Navbar;

const APCLogo = () => (
  <svg
    width="144"
    height="53"
    viewBox="0 0 133 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 5.47717H35.6016V41.0788L17.8008 22.8329L0 5.47717Z"
      fill="url(#paint0_linear_1451_94)"
    />
    <path
      d="M0 11.563H29.5159V41.0788L14.7579 25.952L0 11.563Z"
      fill="url(#paint1_linear_1451_94)"
    />
    <path
      d="M52.1709 5.46277H47.5874V21.6207H52.1709V13.624C52.1709 11.6824 52.2037 8.62197 54.9211 8.62197C57.5075 8.62197 57.4093 11.123 57.4093 13.0646V21.6207H61.9929V11.7483C61.9929 7.99671 60.7935 5.46277 56.4718 5.46277C54.8348 5.46277 52.9725 5.78146 52.2364 6.94365H52.1709V5.46277Z"
      fill="#230B59"
    />
    <path
      d="M78.1621 14.2822V13.7228C78.1621 8.85233 75.8049 5.46277 70.5338 5.46277C65.3282 5.46277 62.7417 8.78651 62.7417 13.6898C62.7417 18.5932 65.8193 21.6207 70.7957 21.6207C74.1679 21.6207 77.0112 20.0829 78.0639 16.4212H73.8405C73.2184 17.7047 72.3017 18.4094 70.7957 18.4094C68.4057 18.4094 67.5872 16.3225 67.5872 14.2822H78.1621ZM67.7182 11.4192C67.9473 9.74085 68.9623 8.52004 70.7957 8.52004C72.5637 8.52004 73.6113 9.77376 73.8405 11.4192H67.7182Z"
      fill="#230B59"
    />
    <path
      d="M83.652 12.8342L76.7767 21.6207H82.4734L86.173 15.9934L90.2982 21.6207H95.9294L89.1523 12.8342L86.6643 9.34595L83.6848 5.46277H78.119L83.652 12.8342Z"
      fill="#230B59"
    />
    <path
      d="M101.481 9.34595H104.296V5.46277H101.481V0H96.8971V21.6207H101.481V9.34595Z"
      fill="#230B59"
    />
    <path
      d="M61.1883 26.0165C59.2104 24.6473 57.1401 24.343 55.8633 24.343C51.0178 24.343 47.4954 27.534 47.4954 32.3386C47.4954 36.9787 50.8117 40.4702 55.559 40.4702C56.9668 40.4702 59.272 40.0138 60.884 38.6445C60.884 38.6445 60.6437 38.4682 60.1233 37.4273C59.6668 36.5145 59.5763 35.4649 59.5763 35.4649C58.7578 36.3863 57.5638 36.8187 56.3197 36.8187C53.7005 36.8187 52.1444 34.9055 52.1444 32.3715C52.1444 30.0021 53.2768 27.7644 55.8633 27.7644C57.2711 27.7644 58.6018 27.9944 59.5147 28.9073C59.5147 28.9073 59.8002 27.9944 60.2933 27.2337C60.7864 26.473 61.1883 26.0165 61.1883 26.0165Z"
      fill="#230B59"
    />
    <path
      d="M77.2211 24.241H72.703V25.6221C71.5899 24.3058 69.8388 24.1084 68.169 24.1084C63.5527 24.1084 60.884 27.827 60.884 32.1051C60.884 36.4819 63.5032 40.3683 68.2177 40.3683C69.8874 40.3683 71.6554 40.0689 72.6376 38.7855H72.703V40.3683H77.2211V24.241ZM69.3308 36.7122C66.9736 36.7122 65.533 34.3428 65.533 32.1709C65.533 29.9989 66.9736 27.6625 69.3308 27.6625C71.6881 27.6625 73.1614 29.9989 73.1614 32.1709C73.1614 34.3428 71.6881 36.7122 69.3308 36.7122Z"
      fill="#230B59"
    />
    <path
      d="M83.5525 24.343H78.969V48.9902H83.5525V38.8545H83.618C84.6184 39.7095 86.3286 40.4702 87.9655 40.4702C92.7128 40.4702 95.3388 36.6167 95.3388 32.207C95.3388 27.9618 92.6685 24.343 88.1177 24.343C86.4152 24.343 84.6184 24.7994 83.5525 25.6912V24.343ZM86.892 36.8142C84.5347 36.8142 83.0942 34.4448 83.0942 32.2728C83.0942 30.1009 84.5347 27.7644 86.892 27.7644C89.2493 27.7644 90.6898 30.1009 90.6898 32.2728C90.6898 34.4448 89.2493 36.8142 86.892 36.8142Z"
      fill="#230B59"
    />
    <path d="M101.481 24.343H96.8971V40.3683H101.481V24.343Z" fill="#230B59" />
    <path
      d="M107.603 28.0935V24.343V21.6207H103.02V40.3683H107.603V28.0935Z"
      fill="#230B59"
    />
    <path
      d="M126.991 24.2103H122.473V25.7241C121.36 24.4077 119.76 24.2103 118.09 24.2103C113.474 24.2103 110.654 27.9289 110.654 32.207C110.654 36.5838 113.375 40.3683 118.09 40.3683C119.76 40.3683 121.425 40.1708 122.407 38.8874H122.473V40.3683H126.991V24.2103ZM119.1 36.8142C116.743 36.8142 115.303 34.4448 115.303 32.2728C115.303 30.1009 116.743 27.7644 119.1 27.7644C121.458 27.7644 122.931 30.1009 122.931 32.2728C122.931 34.4448 121.458 36.8142 119.1 36.8142Z"
      fill="#230B59"
    />
    <path d="M133 12.462H128.416V40.3683H133V12.462Z" fill="#230B59" />
    <path
      d="M94.9641 5.47717H90.1549L87.6612 8.78086L89.9768 11.5629L94.9641 5.47717Z"
      fill="url(#paint2_linear_1451_94)"
    />
    <path
      d="M108.657 24.3429H113.526C113.526 24.3429 112.004 25.2558 111.243 26.3208C110.483 27.3858 110.331 27.9943 110.331 27.9943H108.657V24.3429Z"
      fill="url(#paint3_linear_1451_94)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1451_94"
        x1="17.1922"
        y1="5.47717"
        x2="17.9529"
        y2="41.0788"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#230B59" />
        <stop offset="1" stop-color="#E92A5E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1451_94"
        x1="19.6265"
        y1="41.0788"
        x2="19.6265"
        y2="11.563"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#82297D" />
        <stop offset="1" stop-color="#E12C61" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1451_94"
        x1="91.3127"
        y1="5.47717"
        x2="91.3127"
        y2="11.5629"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#82297D" />
        <stop offset="1" stop-color="#E12C61" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1451_94"
        x1="111.091"
        y1="24.3429"
        x2="111.091"
        y2="27.9943"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#82297D" />
        <stop offset="1" stop-color="#E12C61" />
      </linearGradient>
    </defs>
  </svg>
);
