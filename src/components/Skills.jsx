import { Database, Laptop, LayoutDashboard, Settings } from "lucide-react";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SplitText from "./flowBits/SplitText";
import FadeContent from "./flowBits/FadeContent";

export const Skills = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("Frontend");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  const tabs = [
    { key: "Frontend", icon: <Laptop />, label: t("Frontend") },
    { key: "Backend", icon: <Settings />, label: t("Backend") },
    { key: "Databases", icon: <Database />, label: t("Databases") },
    {
      key: "Technologies",
      icon: <LayoutDashboard />,
      label: t("Technologies"),
    },
  ];

  const frontendStacks = [
    { logo: "Html.png", title: "HTML" },
    { logo: "Css.png", title: "CSS" },
    { logo: "Javascript.png", title: "JavaScript" },
    { logo: "TailwindCss.png", title: "TailwindCSS" },
    { logo: "Bootstrap.png", title: "Bootstrap" },
    { logo: "React.png", title: "React Js" },
    { logo: "Redux.png", title: "Redux" },
    { logo: "ShadCn.png", title: "ShadCn UI" },
    { logo: "MaterialUI.png", title: "Material UI" },
  ];

  const backendStacks = [
    { logo: "Php.png", title: "PHP" },
    { logo: "Laravel.png", title: "Laravel" },
    { logo: "NodeJs.png", title: "Node Js" },
    { logo: "Python.png", title: "Python" },
  ];

  const databaseStacks = [
    { logo: "MySQL.png", title: "MySQL" },
    { logo: "MongoDB.png", title: "MongoDB" },
  ];

  const technologyStacks = [
    { logo: "Git.png", title: "Git" },
    { logo: "Github.png", title: "GitHub" },
    { logo: "Gitlab.png", title: "Gitlab" },
    { logo: "Word.png", title: "Word" },
    { logo: "Excel.png", title: "Excel" },
    { logo: "PowerPoint.png", title: "PowerPoint" },
    { logo: "Figma.png", title: "Figma" },
    { logo: "Canva.png", title: "Canva" },
    { logo: "StarUml.png", title: "Star UML" },
    { logo: "PostMan.png", title: "Postman" },
  ];

  const getCurrentStacks = () => {
    switch (activeTab) {
      case "Frontend":
        return frontendStacks;
      case "Backend":
        return backendStacks;
      case "Databases":
        return databaseStacks;
      case "Technologies":
        return technologyStacks;
      default:
        return [];
    }
  };

  const filteredStacks = getCurrentStacks();

  useLayoutEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.key === activeTab);
    const currentTab = tabsRef.current[activeIndex];
    if (currentTab) {
      setUnderlineStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab, t]);

  useEffect(() => {
    const container = document.getElementById("tabs-container");
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("grabbing");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("grabbing");
    });

    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("grabbing");
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    });

    return () => {
      container.removeEventListener("mousedown", () => {});
      container.removeEventListener("mouseleave", () => {});
      container.removeEventListener("mouseup", () => {});
      container.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <section id="skills" className="pt-15 max-sm:pt-5 max-sm:w-full m-auto">
      <SplitText
        key={i18n.language}
        text={t("Skills & Technologies")}
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
      <div
        id="tabs-container"
        className="relative flex overflow-x-auto max-[500px]:justify-start! sm:justify-center gap-6 sm:gap-10 mt-10 cursor-pointer scrollbar-hidden select-none rounded-xs px-5 min-[550px]:shadow-none! min-[550px]:justify-center!"
        style={{
          boxShadow: "inset -20px 0 10px -15px rgba(0, 0, 0, 0.15)",
        }}
      >
        {tabs.map((tab, i) => {
          const isActive = activeTab === tab.key;
          return (
            <div
              key={tab.key}
              ref={(el) => (tabsRef.current[i] = el)}
              className={`flex items-center gap-2 pb-2 transition-colors duration-300 ${
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-[var(--icons-color)] hover:text-[var(--text-dark)]"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="flex items-center text-base sm:text-lg">
                {tab.icon}
              </span>
              <p className="text-sm sm:text-base">{tab.label}</p>
            </div>
          );
        })}
        <span
          className="absolute bottom-0 h-[3px] bg-green-600 rounded-full transition-all duration-500 ease-in-out"
          style={underlineStyle}
        ></span>
      </div>

      <div
        key={activeTab}
        className="grid grid-cols-6 max-[400px]:grid-cols-5 max-[300px]:grid-cols-4! gap-4 max-sm:gap-0 max-md:gap-2 max-[400px]:gap-y-2 max-sm:gap-y-4 w-[55%] max-[400px]:w-full max-[500px]:w-[90%] max-sm:w-[90%] max-md:w-[90%] max-lg:w-[80%] m-auto mt-6 rounded-lg bg-[var(--bg-skills)] p-4 max-sm:px-2 shadow-[var(--custom-shadow)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)",
          backgroundSize: "10px 10px",
          backgroundPosition: "-5px -5px",
        }}
      >
        {filteredStacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[var(--bg-skills-2)] max-sm:bg-transparent max-sm:shadow-none py-3 max-sm:py-1 rounded-xl gap-2 shadow-sm max-sm:w-fit max-sm:m-auto"
          >
            <Tooltip>
              <TooltipTrigger>
                <FadeContent
                  blur={true}
                  duration={800}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={index * 100}
                >
                  <img
                    src={`/photos/stacks/${stack.logo}`}
                    className={`${
                      stack.title === "TailwindCSS"
                        ? "h-6.5 max-sm:h-5.5 max-[400px]:h-5! mt-1"
                        : stack.title === "PHP"
                        ? "h-6.5 max-sm:h-5.5 max-[400px]:h-5! mt-1"
                        : "h-8 max-sm:h-8 max-[400px]:h-7!"
                    }`}
                    alt={stack.title}
                  />
                </FadeContent>
              </TooltipTrigger>
              <TooltipContent className="min-sm:hidden">
                <p>{stack.title}</p>
              </TooltipContent>
            </Tooltip>

            <h3 className="font-semibold text-sm mt-auto max-sm:hidden">
              {stack.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
