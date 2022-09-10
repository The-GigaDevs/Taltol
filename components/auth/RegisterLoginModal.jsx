import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import authService from '../../services/auth.service';
import {  signIn } from "next-auth/react"

const RegisterLoginModal = ({ providers }) => {
  const [emailBtnActive, setEmailBtnActive] = useState(false);
  const [registerBtnActive, setRegisterBtnActive] = useState(false);
  // const [modal, setModal] = useState(true);

  const handleEmailBtnClick = (e) => {

    e.preventDefault();

    authService.login('faysaljafry@gmail.com', '12345678').then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="register-login-modal">
      <div className="register-login-modal-content">

`      <span className="register-login-modal-close" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"
            fill="#333333"
          />
        </svg>
      </span>
      </div>
      
      <div className="register-login-modal-wrapper">
        <h1 className="register-login-modal-title">Login or Register</h1>
        <div className="register-login-modal-socials">
          <div className="register-login-modal-socials-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M0.554984 6.4135H4.84292V20H0.554984V6.4135ZM2.58964 4.71417H2.55853C1.00633 4.71417 0 3.67554 0 2.35898C0 1.01681 1.03606 0 2.61937 0C4.20131 0 5.17413 1.01423 5.20506 2.3552C5.20506 3.67158 4.20131 4.71417 2.58964 4.71417ZM22 20H17.1377V12.9691C17.1377 11.1289 16.3771 9.87247 14.7046 9.87247C13.4253 9.87247 12.7139 10.7203 12.3827 11.5372C12.2586 11.8305 12.2779 12.239 12.2779 12.6476V19.9998H7.46092C7.46092 19.9998 7.52297 7.54546 7.46092 6.41332H12.2779V8.5456C12.5625 7.61335 14.1017 6.2827 16.5581 6.2827C19.6056 6.2827 21.9998 8.23691 21.9998 12.4453V20H22Z"
                fill="#007EBB"
              />
            </svg>
            <span className="register-login-modal-socials-btn-text">
              Continue with LinkedIn
            </span>
          </div>
          <div className="register-login-modal-socials-btn" onClick={()=> signIn(providers.google.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M4.77268 11.0732C4.77268 10.3539 4.89206 9.6643 5.10539 9.01756L1.3734 6.16779C0.646034 7.64449 0.236328 9.30857 0.236328 11.0732C0.236328 12.8364 0.645688 14.4993 1.37184 15.9751L5.10176 13.1198C4.8905 12.476 4.77268 11.789 4.77268 11.0732Z"
                fill="#FBBC05"
              />
              <path
                d="M11.3253 4.52988C12.8879 4.52988 14.2992 5.08354 15.408 5.98946L18.6338 2.76822C16.6681 1.0569 14.1479 -6.10352e-05 11.3253 -6.10352e-05C6.94314 -6.10352e-05 3.1769 2.50593 1.37354 6.16767L5.10535 9.01744C5.96525 6.4073 8.41639 4.52988 11.3253 4.52988Z"
                fill="#EA4335"
              />
              <path
                d="M11.3253 17.6164C8.41656 17.6164 5.96542 15.739 5.10552 13.1288L1.37354 15.9781C3.1769 19.6404 6.94314 22.1463 11.3253 22.1463C14.0299 22.1463 16.6122 21.1859 18.5502 19.3865L15.0078 16.648C14.0083 17.2776 12.7496 17.6164 11.3253 17.6164Z"
                fill="#34A853"
              />
              <path
                d="M21.9099 11.0732C21.9099 10.4189 21.809 9.71418 21.6578 9.06H11.3252V13.3382H17.2728C16.9754 14.7969 16.1661 15.9182 15.0077 16.648L18.5501 19.3866C20.5858 17.4972 21.9099 14.6825 21.9099 11.0732Z"
                fill="#4285F4"
              />
            </svg>
            <span className="register-login-modal-socials-btn-text">
              Continue with Google
            </span>
          </div>
          <div className="register-login-modal-socials-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M22.1466 4.03046C21.3329 4.40106 20.4567 4.65159 19.5377 4.76353C20.4761 4.18773 21.1964 3.27454 21.5357 2.18695C20.6569 2.72019 19.6859 3.1081 18.6485 3.31607C17.8218 2.41101 16.6401 1.84576 15.3325 1.84576C12.8249 1.84576 10.7906 3.93184 10.7906 6.50461C10.7906 6.86985 10.8295 7.22436 10.9075 7.56572C7.13161 7.37091 3.78441 5.51806 1.54193 2.69615C1.15074 3.38666 0.927028 4.18773 0.927028 5.04088C0.927028 6.65652 1.72914 8.0827 2.94839 8.91855C2.20494 8.89588 1.50283 8.68394 0.88931 8.33738V8.39465C0.88931 10.6527 2.45564 12.5362 4.53548 12.9628C4.15467 13.0722 3.75292 13.1269 3.3382 13.1269C3.0458 13.1269 2.7598 13.0988 2.4828 13.0442C3.0612 14.8944 4.73809 16.242 6.72692 16.278C5.17219 17.5284 3.21207 18.2734 1.08413 18.2734C0.717504 18.2734 0.354859 18.2522 0 18.2094C2.01098 19.529 4.40018 20.3009 6.96482 20.3009C15.3231 20.3009 19.8922 13.2026 19.8922 7.04563C19.8922 6.84303 19.8882 6.64043 19.8804 6.4418C20.7687 5.78468 21.5395 4.96492 22.1466 4.03046Z"
                fill="#00AAEC"
              />
            </svg>
            <span className="register-login-modal-socials-btn-text">
              Continue with Twitter
            </span>
          </div>
          <div className="register-login-modal-socials-btn" onClick={()=> signIn(providers.facebook.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M11.829 22.1462H1.22237C0.547082 22.1462 0 21.5988 0 20.9239V1.22237C0 0.547082 0.547082 0 1.22237 0H20.9241C21.599 0 22.1462 0.547082 22.1462 1.22237V20.9239C22.1462 21.599 21.599 22.1462 20.9241 22.1462H15.2806V13.5699H18.1592L18.5902 10.2276H15.2806V8.09376C15.2806 7.12607 15.5493 6.4667 16.9369 6.4667L18.7067 6.46601V3.47661C18.4006 3.43596 17.35 3.34495 16.1277 3.34495C13.5758 3.34495 11.8289 4.90263 11.8289 7.76295V10.2278H8.94293V13.5701H11.829V22.1462Z"
                fill="#4460A0"
              />
            </svg>
            <span className="register-login-modal-socials-btn-text">
              Continue with Facebook
            </span>
          </div>
        </div>
        <div className="register-login-modal-or-line">
          <span className="register-login-modal-or-text"> OR </span>
        </div>
        <div
          className={
            emailBtnActive || registerBtnActive
              ? 'register-login-modal-socials-btn not-show'
              : 'register-login-modal-socials-btn'
          }
          onClick={() => {
            setEmailBtnActive(true);
          }}
        >
          <FaEnvelope className="register-login-modal-socials-btn-icon" />
          <span className="register-login-modal-socials-btn-text">
            Continue with Email
          </span>
        </div>

        <form
          className={
            emailBtnActive
              ? `register-login-modal-form`
              : `register-login-modal-form not-show`
          }
        >
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="register-login-modal-form-btn" onClick={handleEmailBtnClick}>
            Login
          </button>
        </form>

        <div
          className={
            emailBtnActive
              ? `register-login-modal-register-text`
              : `register-login-modal-register-text hide`
          }
          onClick={() => {
            setRegisterBtnActive(true);
            setEmailBtnActive(false);
          }}
        >
          Want to Register?
          <span className="register-login-modal-register-text-link">
            {' '}
            Click Here
          </span>
        </div>

        <form
          className={
            registerBtnActive
              ? `register-login-modal-form`
              : `register-login-modal-form hide`
          }
        >
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="text"
              placeholder="Enter first name"
            />
          </div>
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="text"
              placeholder="Enter last name"
            />
          </div>
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="text"
              placeholder="Enter email address"
            />
          </div>
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="text"
              placeholder="Enter password"
            />
          </div>
          <div className="register-login-modal-form-group">
            <input
              className="register-login-modal-form-group-input"
              type="text"
              placeholder="Confirm password"
            />
          </div>
          <button type="submit" className="register-login-modal-form-btn">
            Register
          </button>
        </form>

        <div
          className={
            registerBtnActive
              ? `register-login-modal-login-text`
              : `register-login-modal-login-text hide`
          }
          onClick={() => {
            setRegisterBtnActive(false);
            setEmailBtnActive(true);
          }}
        >
          Want to Login?
          <span className="register-login-modal-login-text-link">
            {' '}
            Click Here
          </span>
        </div>
      </div>
      <div className="register-login-modal-text">
        By continuing, you acknowledge that you have read and understood, and
        agree to Taltol’s
        <Link href="#">
          <a className="register-login-modal-text-link"> Terms & Conditions </a>
        </Link>
        and
        <Link href="#">
          <a className="register-login-modal-text-link"> Privacy Policy</a>
        </Link>
        .
      </div>
    </div>
  );
};

export default RegisterLoginModal;

