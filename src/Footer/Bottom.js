import React from 'react'
import bottom from "../images/Bubl.svg"
import "./styles.css"
function Bottom() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__body">
          <nav className="footer__nav">
            <ul className="footer_nav__menu">
              <li className="footer_nav__item">
                <h4 className="footer_nav__menu__title">COMPANY</h4>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link">About Us</a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link">Team</a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link"></a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link"></a>
              </li>
            </ul>
            <ul className="footer_nav__menu">
              <li className="footer_nav__item">
                <h4 className="footer_nav__menu__title">INVEST</h4>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link">Features</a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link">FAQ's</a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link"></a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link"></a>
              </li>
            </ul>
            <ul className="footer_nav__menu">
              <li className="footer_nav__item">
                <h4 className="footer_nav__menu__title">LEGAL</h4>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link">Privacy</a>
              </li>
              <li className="footer_nav__item">
                <a href="#" className="footer_nav__link">Terms</a>
              </li>
            </ul>
          </nav>
          <div className="footer__contact">
            <h3 className="footer__contact__title">Blog Bubl</h3>
            <span>Write email to us</span>
            <br />
            <a href="mailto:info@zoufarm.com" className="email">info@Bubl.com</a>
            <a href="https://tally.so/r/nGkq2n" className="btn btn__signin">
              <i className="far fa-user"></i> Register now
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__content">
            <div className="footer__logo">
              <img src={bottom} alt="Logo" />
            </div>
            <p className="footer_copyright">
              © Copyright 2022. Bubl Capital Pty Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Bottom