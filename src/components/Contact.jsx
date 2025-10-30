import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Socials from "./ui/Socials";
import WeatherDisplay from "@/api/WeatherDisplay ";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import FadeContent from "./flowBits/FadeContent";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const getFormattedDate = () => {
    const date = new Date();
    return date.toLocaleDateString(i18n.language, {
      day: "numeric",
      weekday: "long",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnnoaqkp", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      toast.success("Message sent successfully!");
      e.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="pb-0">
      <div className="flexy flex-col pt-15 max-sm:pt-20">
        <FadeContent
          blur={true}
          duration={1100}
          easing="ease-out"
          initialOpacity={0}
        >
          <img
            src={`${
              theme === "light"
                ? "/photos/MM_black_text.png"
                : "/photos/MM_white_text.png"
            }`}
            alt="MM"
            className="h-11 w-11 flexy"
          />
        </FadeContent>
        <div
          className={`flexy absolute top-10 max-sm:top-6 right-12 max-[850px]:right-4 h-10 max-[850px]:h-8 max-h-10 font-bold text-base rounded-full px-6 max-sm:px-4 shadow-[var(--custom-shadow)] ${
            theme === "light" ? "bg-[#16a34a17]" : "bg-[#00bf6340]"
          }`}
        >
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={200}
          >
            <div className="flexy">
              <span
                className={`pulse relative w-1.5 aspect-square rounded-full mr-4 ${
                  theme === "light" ? "bg-green-600" : "bg-green-400"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full animate-ping [animation-delay:3s] [animation-duration:1.5s] ${
                    theme === "light" ? "bg-green-600" : "bg-green-400"
                  }`}
                ></span>
              </span>
              <p className="text-sm max-[850px]:text-xs">
                {t("Available for work")}
              </p>
            </div>
          </FadeContent>
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={300}
        >
          <h1 className="mt-6 font-bold text-3xl max-sm:text-xl">
            {t("Let's start a project together")} 🤝
          </h1>
        </FadeContent>
      </div>
      <div className="grid grid-cols-[1fr_1fr] max-[850px]:grid-cols-1 w-[78%] max-sm:w-full max-[1050px]:w-[90%] m-auto gap-20 max-sm:gap-15 max-lg:gap-10 mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-sm:px-10"
        >
          <span className="flex flex-col gap-1">
            <Label htmlFor="name">{t("Name")}</Label>
            <Input
              id="name"
              name="name"
              type="text"
              className="bg-[var(--bg-projects)]! h-12 focus:border-blue-300"
              required
            />
          </span>
          <span className="flex flex-col gap-1">
            <Label htmlFor="email">{t("Email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="bg-[var(--bg-projects)]! h-12 focus:border-blue-300"
              required
            />
          </span>
          <span className="flex flex-col gap-1">
            <Label htmlFor="message">{t("Message")}</Label>
            <Textarea
              id="message"
              name="message"
              className="bg-[var(--bg-projects)]! h-28 focus:border-blue-300"
              placeholder={t("Text Message...")}
              required
            />
          </span>
          <Button
            variant="outline"
            type="submit"
            className="w-full shadow-sm h-12 cursor-pointer font-semibold"
          >
            {t("Send Message")}
          </Button>
        </form>
        <div className="flexy flex-col max-sm:px-5">
          <div className="relative h-65 max-sm:h-55 overflow-hidden shadow-[var(--custom-shadow)] rounded-xl">
            <img
              src="/photos/elements/cloud.png"
              className="cloud absolute h-[150px] w-[150px]"
              alt="My location"
            />
            <img
              src="/photos/elements/my-location.png"
              className=" h-65 w-full max-sm:h-55"
              alt="My location"
            />
            <div className="flexy justify-between! absolute bottom-2 left-1/2 z-10 -translate-x-1/2 backdrop-blur-sm bg-white/20 h-18 w-[95%] shadow-[var(--custom-shadow)] m-auto rounded-full p-3">
              <div>
                <div className="">
                  <span className="flexy gap-2 text-white">
                    <div
                      className="relative w-[clamp(2.5rem,10vw,3.3rem)] aspect-square rounded-full border-2 border-white"
                      style={{
                        "--minute-rotation": "102deg",
                        "--hour-rotation": "240deg",
                      }}
                    >
                      <div className="absolute z-10 inset-0 m-auto w-1 h-1 rounded-full bg-white"></div>
                      <div
                        className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-white origin-top -translate-x-1/2"
                        style={{
                          height: "35%",
                          transform:
                            "translateX(-50%) rotate(var(--minute-rotation))",
                        }}
                      ></div>
                      <div
                        className="absolute top-[25px] max-[500px]:top-[20px] left-1/2 w-0.5 h-5 bg-red-500 origin-top -translate-x-1/2"
                        style={{
                          height: "35%",
                          transform:
                            "translateX(-50%) rotate(var(--hour-rotation))",
                        }}
                      ></div>
                    </div>
                    <span>
                      <h1 className="text-xl leading-[1] mt-1">Casablanca</h1>
                      <p className="text-sm">{getFormattedDate()}</p>
                    </span>
                  </span>
                </div>
              </div>
              <span className="text-xl text-white">
                <WeatherDisplay />
              </span>
            </div>
          </div>
          <div className="flexy mt-3">
            <Socials />
          </div>
        </div>
      </div>
      <p className="flexy text-base mt-20">
        {t("Copyright 2025 · Made by")}
        <a
          href="https://github.com/maimoune21"
          target="_blank"
          className="underline ml-1"
        >
          Maimoune
        </a>
      </p>
    </section>
  );
};
