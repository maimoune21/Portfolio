import { Download } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedContent from "./flowBits/AnimatedContent";
import FadeContent from "./flowBits/FadeContent";

export const Resume = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-35 max-sm:pt-20 pb-20 max-sm:pb-10">
      <AnimatedContent
        distance={20}
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
        <h1 className="flexy font-bold text-2xl">{t("Resume")}</h1>
      </AnimatedContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        delay={250}
        initialOpacity={0}
      >
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
      </FadeContent>
    </div>
  );
};
