import { MoveDown } from "lucide-react";
import React from "react";
import { Contact } from "./Contact";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import { useTheme } from "./theme-provider";
import FadeContent from "./flowBits/FadeContent";
import SplitText from "./flowBits/SplitText";
import TextType from "./flowBits/TextType";
import AnimatedContent from "./flowBits/AnimatedContent";
import { Link } from "react-scroll";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      id="home"
      className="flexy max-[900px]:justify-start! max-[900px]:mt-10 flex-col h-[100vh] max-[900px]:h-auto"
    >
      <div className="w-[80%] max-lg:w-[85%] grid grid-cols-[1.5fr_1fr] max-[900px]:grid-cols-1 pb-15 max-sm:pb-8 gap-20 max-[900px]:gap-5">
        <div className="text-[var(--text-dark)] max-[900px]:order-2 max-[900px]:text-center">
          <SplitText
            text="Mohamed Maimoune"
            tag="h1"
            className="text-[40px] max-sm:text-3xl max-[370px]:text-2xl! max-lg:text-3xl font-bold leading-14 max-lg:leading-10 max-[900px]:leading-8 text-[var(--text-dark)]! max-[900px]:hidden"
            delay={50}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: -40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <br />
          <TextType
            text={t("Full Stack Developer")}
            className="text-2xl max-sm:text-xl max-[370px]:text-lg! max-lg:text-2xl font-semibold max-[900px]:hidden block"
            typingSpeed={90}
            deletingSpeed={60}
            pauseDuration={3000}
            showCursor={true}
            loop="true"
            cursorCharacter="|"
          />
          <FadeContent
            blur={true}
            duration={1100}
            easing="ease-out"
            initialOpacity={0}
          >
            <p className="mt-3 max-sm:text-sm">{t("bio")}</p>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1100}
            easing="ease-out"
            delay={300}
            initialOpacity={0}
          >
            <div className="flexy justify-start! max-[900px]:justify-center! gap-3 mt-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-5.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="style=fill">
                    {" "}
                    <g id="email">
                      {" "}
                      <path
                        id="Subtract"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                        fill="var(--icons-color)"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <a
                href="mailto:mohamedmaimouneh@gmail.com"
                className="max-sm:text-sm hover:underline"
              >
                mohamadmaimouneh@gmail.com
              </a>
            </div>
          </FadeContent>
          <div className="flexy justify-start! max-[900px]:justify-center! max-sm:flex-col gap-3 mt-4">
            <div className="flexy gap-4">
              <AnimatedContent
                distance={30}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="easeOut"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.2}
              >
                <Sheet>
                  <SheetTrigger
                    className={`flexy gap-2 cursor-pointer py-2 px-4 rounded-full shadow-md ButtonHover click-sound ${
                      theme === "light" ? "bg-[#d9e2e9]" : "bg-[#434141]"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="var(--text-dark)"
                      className="size-4.5 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="font-bold text-sm mt-0.5">{t("Contact")}</p>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="w-full h-[100vh]">
                    <SheetHeader>
                      <SheetTitle></SheetTitle>
                      <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <Contact />
                    <SheetFooter></SheetFooter>
                  </SheetContent>
                </Sheet>
              </AnimatedContent>
              <AnimatedContent
                distance={30}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="easeOut"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.6}
              >
                <a
                  href={`/docs/${i18n.language}_CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flexy font-bold text-sm gap-2 py-2 rounded-full px-4 shadow-md ButtonHover ${
                    theme === "light" ? "bg-[#d9e2e9]" : "bg-[#434141]"
                  }`}
                >
                  <svg
                    className="size-4.5"
                    fill="var(--text-dark)"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 43.916 43.916"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p className="mt-0.5 max-sm:text-xs">{t("View CV")}</p>
                </a>
              </AnimatedContent>
            </div>
            <div className="flexy gap-3 ml-2">
              <div className="ButtonHover">
                <FadeContent
                  blur={true}
                  className={`flexy p-2.5 shadow-[var(--custom-shadow)] rounded-full ${
                    theme === "light" ? "bg-[#d9e2e9]" : "bg-[#434141]"
                  }`}
                  duration={1000}
                  easing="ease-out"
                  delay={250}
                  initialOpacity={0}
                >
                  <a href="https://linkedin.com/in/maimoune">
                    <svg
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="size-4.5"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>linkedin [#919191161]</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-180.000000, -7479.000000)"
                            fill="var(--icons-color)"
                          >
                            {" "}
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              {" "}
                              <path
                                d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                                id="linkedin-[#919191161]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </FadeContent>
              </div>
              <div className="ButtonHover">
                <FadeContent
                  blur={true}
                  duration={1000}
                  className={`flexy p-2 shadow-[var(--custom-shadow)] rounded-full ${
                    theme === "light" ? "bg-[#d9e2e9]" : "bg-[#434141]"
                  }`}
                  easing="ease-out"
                  delay={250}
                  initialOpacity={0}
                >
                  <a href="https://github.com/maimoune21">
                    <svg
                      fill="var(--icons-color)"
                      viewBox="-2.5 0 19 19"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5.5"
                      stroke=""
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                      </g>
                    </svg>
                  </a>
                </FadeContent>
              </div>
            </div>
          </div>
        </div>
        <span className="min-[900px]:hidden! flexy flex-col">
          <SplitText
            text="Mohamed Maimoune"
            tag="h1"
            className="text-[40px] max-sm:text-3xl max-[370px]:text-2xl! max-lg:text-3xl font-bold leading-14 max-lg:leading-10 max-[900px]:leading-8 text-[var(--text-dark)]!"
            delay={50}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: -40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <TextType
            text={t("Full Stack Developer")}
            className="text-2xl max-sm:text-xl max-[370px]:text-lg! max-lg:text-2xl font-semibold"
            typingSpeed={90}
            deletingSpeed={60}
            pauseDuration={3000}
            showCursor={true}
            loop="true"
            cursorCharacter="|"
          />
        </span>
        <div className="relative hero-img h-72 max-[450px]:h-50! max-[900px]:h-55 max-lg:h-65 w-80 max-[900px]:w-60 max-[450px]:w-55! max-lg:w-70 max-[900px]:order-1"></div>
      </div>
      <div className="flexy">
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-120}
          className="cursor-pointer"
        >
          <span className="flexy flex-col gap-3 max-sm:gap-2 max-sm:text-sm">
            <AnimatedContent
              distance={30}
              direction="vertical"
              reverse={true}
              duration={0.8}
              ease="easeOut"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.2}
            >
              <h1>{t("Scroll Down")}</h1>
            </AnimatedContent>
            <MoveDown className="animate-[upDown_1.5s_ease-in-out_infinite] max-sm:size-5.5" />
          </span>
        </Link>
      </div>
    </div>
  );
};
