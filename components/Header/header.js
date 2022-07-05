// Components
import Image from "next/image";
import Link from "next/link";

import LogoWhite from '../../static/images/logo-white.png'

const Header = () => {
  return (
    <header>
      <div
        id="header-sticky"
        className="header__area header__transparent header__padding-2"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="header__left d-flex">
                <div className="logo">
                  <Link href="/">
                    <img
                      src={LogoWhite.src}
                      width={60}
                      height={60}
                      alt="logo"
                      className="logo-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 d-none d-xl-block">
              <div className="main-menu main-menu-3">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="header__right d-flex justify-content-end align-items-center">
                <div className="header__btn header__btn-2 ml-30 d-none d-sm-block">
                  <a href="sign-up.html" className="e-btn">
                    Go
                  </a>
                </div>
                <div className="sidebar__menu d-xl-none">
                  <div
                    className="sidebar-toggle-btn sidebar-toggle-btn-white ml-30"
                    id="sidebar-toggle"
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
