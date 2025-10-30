import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";
import SplitText from "./flowBits/SplitText";
import FadeContent from "./flowBits/FadeContent";

export const Experience = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("education");
  const { theme } = useTheme();

  const tabsRef = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({});

  useLayoutEffect(() => {
    const updateUnderline = () => {
      const activeIndex = activeTab === "education" ? 0 : 1;
      const currentTab = tabsRef.current[activeIndex];
      if (currentTab) {
        setUnderlineStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeTab, t]);

  const education = t("education.items", { returnObjects: true });
  const experience = t("experience.items", { returnObjects: true });

  const educationWithPosition = education.map((item, index) => ({
    ...item,
    id: index + 1,
    position: index % 2 === 0 ? "right" : "left",
  }));

  const experienceWithPosition = experience.map((item, index) => ({
    ...item,
    id: index + 1,
    position: index % 2 === 0 ? "right" : "left",
    type: item.title.toLowerCase().includes("hackathon") ? "award" : "work",
  }));

  const renderExperienceIcon = (type) => {
    switch (type) {
      case "award":
        return <Award className="stroke-gray-500 w-5 h-5" />;
      case "work":
      default:
        return <BriefcaseBusiness className="stroke-gray-500 w-5 h-5" />;
    }
  };

  const TimelineItem = ({ item }) => (
    <div
      className={`flex flex-col sm:flex-row w-full mb-8 relative ${
        item.position === "right"
          ? "sm:justify-end max-md:justify-start!"
          : "max-md:justify-start!"
      }`}
    >
      {/* Center Icon */}
      <div className="absolute sm:left-1/2 left-0 sm:-translate-x-1/2 max-md:left-0! max-sm:-left-[15px]! max-md:justify-start! top-0 sm:top-auto z-10 flex justify-center items-center w-full sm:w-auto mb-2 sm:mb-0">
        <span className="flex shrink-0 justify-center items-center w-8 h-8 border shadow-sm bg-[var(--soft-gray)] border-[var(--soft-gray)] text-sm font-semibold uppercase rounded-full">
          {activeTab === "education" ? (
            <GraduationCap className="stroke-[var(--icons-color-2)] w-5 h-5" />
          ) : (
            renderExperienceIcon(item.type)
          )}
        </span>
      </div>

      {/* Card */}
      <div
        className={`w-full sm:w-1/2 max-md:w-full! max-sm:hidden ${
          item.position === "right"
            ? "sm:pl-8 sm:pr-0 max-sm:pl-8"
            : "sm:pr-8 sm:pl-0 max-md:pl-8! max-md:pr-0!"
        } mt-6 sm:mt-0 text-start max-sm:mt-0 sm:text-${
          item.position === "right" ? "left" : "right"
        }`}
      >
        <FadeContent
          blur={true}
          duration={1100}
          easing="ease-out"
          delay={300}
          initialOpacity={0}
        >
          <div
            className={`p-4 rounded-lg shadow-sm flex flex-col gap-1 border-l-[5px] border-l-green-600 ${
              theme === "light" ? "bg-gray-100" : "bg-[#575555]"
            }`}
          >
            <h3
              className={`font-semibold ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
            >
              {item.institution}
            </p>
            {item.location && (
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-600" : "text-white"
                }`}
              >
                {item.location}
              </p>
            )}
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
            >
              {item.period}
            </p>
            {item.description && (
              <div
                className={`text-sm mt-1 text-wrap break-words text-justify leading-[1.35] ${
                  theme === "light" ? "text-gray-600" : "text-white"
                }`}
              >
                {item.description.split("\\n").map((line, index) => (
                  <p key={index} className={index > 0 ? "mt-1" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </FadeContent>
      </div>
      <div
        className={`w-full sm:w-1/2 max-md:w-full! min-sm:hidden ${
          item.position === "right"
            ? "sm:pl-8 sm:pr-0 max-sm:pl-8"
            : "sm:pr-8 sm:pl-0 max-md:pl-8! max-md:pr-0!"
        } mt-6 sm:mt-0 text-start max-sm:mt-0 sm:text-${
          item.position === "right" ? "left" : "right"
        }`}
      >
        <div
          className={`p-4 rounded-lg shadow-sm flex flex-col gap-1 border-l-[5px] border-l-green-600 ${
            theme === "light" ? "bg-gray-100" : "bg-[#575555]"
          }`}
        >
          <h3
            className={`font-semibold ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-white"
            }`}
          >
            {item.institution}
          </p>
          {item.location && (
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
            >
              {item.location}
            </p>
          )}
          <p
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-white"
            }`}
          >
            {item.period}
          </p>
          {item.description && (
            <div
              className={`text-sm mt-1 text-wrap break-words text-justify leading-[1.35] ${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
            >
              {item.description.split("\\n").map((line, index) => (
                <p key={index} className={index > 0 ? "mt-1" : ""}>
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="mt-20 px-4 sm:px-0">
      <SplitText
        key={i18n.language}
        text={t("Education & Experience")}
        tag="h1"
        className="flexy font-bold text-2xl gap-2"
        delay={20}
        duration={0.2}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
      />

      {/* Tabs */}
      <div className="mt-10 relative flex flex-col w-[80%] max-lg:w-[90%] max-md:w-[80%] max-sm:w-[90%] m-auto">
        <div className="flexy gap-16 relative overflow-x-auto scrollbar-hidden">
          {["education", "experience"].map((key, index) => {
            const isActive = activeTab === key;
            const label =
              key === "education" ? t("Education") : t("Experience");

            return (
              <button
                key={key}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 pb-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-[var(--icons-color)] hover:text-[var(--text-dark)]"
                }`}
              >
                {key === "education" ? (
                  <GraduationCap />
                ) : (
                  <BriefcaseBusiness />
                )}
                <p className="font-bold">{label}</p>
              </button>
            );
          })}

          {/* Dynamic underline */}
          <span
            className="absolute bottom-0 h-[3px] bg-green-600 rounded-full transition-all duration-500 ease-in-out"
            style={underlineStyle}
          />
        </div>

        {/* Timeline content */}
        <div className="mt-8 relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute sm:left-1/2 left-2 top-0 bottom-0 w-[2px] max-md:left-0! bg-gray-300"></div>

          {(activeTab === "education"
            ? educationWithPosition
            : experienceWithPosition
          ).map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
