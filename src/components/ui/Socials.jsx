import React from "react";
import styled from "styled-components";

const Socials = () => {
  return (
    <StyledWrapper>
      <div className="social-links">
        <a href="tel:+212693656626" target="_blank" id="phone" className="social-btn flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#757575"
            className="size-5.5 cursor-pointer ml-1"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-semibold">0693656626</span>
        </a>
        <a href="mailto:mohamedmaimouneh@email.com" target="_blank" id="email" className="social-btn flex-center">
          <img src="/photos/Email.png" className="w-5.5 ml-1" alt="Email" />
          <span className="text-sm font-semibold">mohamedmaimouneh@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/maimoune" target="_blank" id="linkedin" className="social-btn flex-center">
          <svg
            viewBox="0 0 24 24"
            className="size-5 ml-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          <span className="text-sm font-bold mt-1 text-nowrap">Mohamed Maimoune</span>
        </a>
        <a href="https://github.com/maimoune21" target="_blank" id="github" className="social-btn flex-center">
          <svg
            viewBox="0 0 24 24"
            className="size-6 ml-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="font-bold text-sm">maimoune21</span>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .social-links,
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-btn {
    cursor: pointer;
    height: 50px;
    width: 50px;
    color: #333;
    border-radius: 100%;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    background: white;
    margin: 5px;
    transition: 0.3s;
    justify-content: center;
  }

  .social-btn span {
    width: 0px;
    overflow: hidden;
    transition: 0.3s;
    text-align: center;
    margin-left: 3px;
  }

  .social-btn:hover {
    width: 165px;
    border-radius: 50px;
  }
  #email:hover {
    width: 290px;
  }
  #email:hover span {
    width: 225px;
  }
  #linkedin:hover {
    width: 220px;
  }
  #linkedin:hover span {
    width: 145px;
  }

  .social-btn:hover span {
    padding: 2px;
    width: 100px;
  }

  #phone svg {
    fill: green;
  }

  #linkedin svg {
    fill: #0e76a8;
  }
  #email svg {
    fill: #0e76a8;
  }

  #github {
    fill: #333;
  }
`;

export default Socials;
