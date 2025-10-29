import { Download } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-35 max-sm:pt-20 pb-20 max-sm:pb-10">
      <h1 className="flexy font-bold text-2xl">{t("Resume")}</h1>
      <a
        href={`/docs/${i18n.language}_CV.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="flexy mt-4 h-20 w-[45%] max-sm:w-[80%] max-md:w-[80%] max-lg:w-[60%] m-auto relative"
      >
        <img
          src="/photos/elements/cv-image.png"
          className="h-full w-full object-cover absolute rounded-2xl shadow-[var(--custom-shadow)]"
          alt="CV"
        />
        <Download className="absolute size-7" />
      </a>
    </div>
  );
};
