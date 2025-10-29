import React from "react";
import { useTheme } from "../theme-provider";
import { useTranslation } from "react-i18next";

export const Foody = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className='relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] font-["CabinetGrotesk"]'>
      <div className="text-center px-4 sm:px-6 md:px-12">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight select-none
                     bg-clip-text text-transparent
                     bg-gradient-to-r ${
                       theme === "light"
                         ? "from-gray-500 via-gray-600 to-gray-500"
                         : "from-gray-100 via-gray-400 to-gray-100"
                     }

                     inline-block`}
          style={{
            backgroundSize: "200% 100%",
            animation:
              "shimmer 3s linear infinite, floaty 4s ease-in-out infinite",
          }}
        >
          {t("Coming Soon")}
        </h1>
        <p
          className={`mt-0 sm:mt-2 text-xs sm:text-sm md:text-base ${
            theme === "light" ? "text-gray-600" : "text-gray-100"
          }`}
        >
          {t("Something new is coming — stay tuned.")}
        </p>
        <style>
          {`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes floaty {
              0% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/posts/maimoune_webdevelopment-frontenddevelopment-html5-activity-7341564208536289281-cUIo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENCWFMBhnwxzl902Gve7jd43kaDqY835Cs"
          className={`mt-10 sm:mt-20 py-2 px-4 sm:px-6 rounded-full shadow-[var(--custom-shadow)] 
    mx-auto flex items-center gap-2 sm:gap-3 w-fit text-base sm:text-xl 
    ${theme === "light" ? "bg-[#d9e2e9]" : "bg-[#3b3b3b]"}`}
        >
          <img
            src="/photos/LinkedIn.png"
            className="w-6 sm:w-10"
            alt="LinkedIn"
          />
          <p className="mt-0 sm:mt-1">{t("View On LinkedIn")}</p>
        </a>
      </div>
    </div>
  );
};
