import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Foody } from "./Foody";
import { Youchef } from "./Youchef";
import { Okad } from "./Okad";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useTheme } from "../theme-provider";
import FadeContent from "../flowBits/FadeContent";

export const Mihna = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const videoRef = useRef(null);
  const companyPages = [
    {
      id: 1,
      title: t("Authentication Page"),
      photo: "/photos/projects/mihna/company/page_1.png",
    },
    {
      id: 2,
      title: t("Company dashboard"),
      photo: "/photos/projects/mihna/company/page_2.png",
    },
    {
      id: 3,
      title: t("Company Profile Page"),
      photo: "/photos/projects/mihna/company/page_3.png",
    },
    {
      id: 4,
      title: t("Analysis Page"),
      photo: "/photos/projects/mihna/company/page_4.png",
    },
    {
      id: 5,
      title: t("Job Applications Page Groups by Job"),
      photo: "/photos/projects/mihna/company/page_5.png",
    },
    {
      id: 6,
      title: t("Adding a job offer"),
      photo: "/photos/projects/mihna/company/page_6.png",
    },
    {
      id: 7,
      title: t("Confirmation of data for adding a job offer"),
      photo: "/photos/projects/mihna/company/page_7.png",
    },
    {
      id: 8,
      title: t("Form to edit the job"),
      photo: "/photos/projects/mihna/company/page_8.png",
    },
  ];
  const condidatePages = [
    {
      id: 1,
      title: t("Authentication Page"),
      photo: "/photos/projects/mihna/candidate/page_1.png",
    },
    {
      id: 2,
      title: t("Home Page"),
      photo: "/photos/projects/mihna/candidate/page_2.png",
    },
    {
      id: 3,
      title: t("Profile Page"),
      photo: "/photos/projects/mihna/candidate/page_3.png",
    },
    {
      id: 4,
      title: t("Job Offers Page"),
      photo: "/photos/projects/mihna/candidate/page_4.png",
    },
    {
      id: 5,
      title: t("Mihna Chatbot"),
      photo: "/photos/projects/mihna/candidate/page_5.png",
    },
    {
      id: 6,
      title: t("Job Offer Details Page"),
      photo: "/photos/projects/mihna/candidate/page_6.png",
    },
    {
      id: 7,
      title: t("Statistics and testimonials sections"),
      photo: "/photos/projects/mihna/candidate/page_7.png",
    },
    {
      id: 8,
      title: t("Top Companies and Popular Jobs sections"),
      photo: "/photos/projects/mihna/candidate/page_8.png",
    },
  ];
  const projects = [
    {
      name: "YouChef",
      description: t("youchef_description"),
      date: "06/2024 - 08/2024",
      image: "/photos/projects/youchef/Youchef.png",
      page: <Youchef />,
    },
    {
      name: "Okad",
      description: t("okad_description"),
      date: "03/2024 - 04/2024",
      image: "/photos/projects/okad/Okad.png",
      page: <Okad />,
    },
    {
      name: "Foody",
      description: t("foody_description"),
      date: "06/2024 - 08/2024",
      image: "/photos/projects/foody/Foody.png",
      page: <Foody />,
    },
  ];
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.unobserve(video);
  }, []);

  return (
    <div className="pt-20 select-none">
      {/* <div className=" flexy justify-start gap-4 w-fit py-1 px-10 m-auto border-b-2">
        <img
          src="/photos/projects/mihna/Mihna_logo.png"
          className="w-45"
          alt="Mihna"
        />
      </div> */}
      <img
        src="/photos/projects/mihna/Mihna_laptop.png"
        className="w-[60%] max-sm:w-[70%] m-auto rounded-xl shadow-[var(--custom-shadow)] mt-2 mb-20 max-sm:mb-10"
        alt="Mihna"
      />
      <div
        className={`pb-30 w-full font-["CabinetGrotesk"] ${
          theme === "light" ? "bg-[#eaeaea]" : "bg-[#000]"
        }`}
      >
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          delay={100}
          initialOpacity={0}
        >
          <div className="flexy py-20 max-md:py-10">
            <h1 className="flexy text-3xl sm:text-5xl md:text-6xl lg:text-8xl w-full sm:w-4/5 md:w-3/4 lg:w-3/5 m-auto text-center font-medium leading-snug sm:leading-tight md:leading-[1] max-sm:px-5">
              {t("Job Platform Connecting Candidates & Employers")}
            </h1>
          </div>
        </FadeContent>
        <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] m-auto grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 text-justify text-base sm:text-base md:text-xl font-medium">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            delay={200}
            initialOpacity={0}
          >
            <p>{t("mihna_description_1")}</p>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            delay={300}
            initialOpacity={0}
          >
            <p>{t("mihna_description_2")}</p>
          </FadeContent>
        </div>

        <FadeContent
          blur={true}
          duration={600}
          easing="ease-out"
          delay={300}
          initialOpacity={0}
        >
          <img
            src={`/photos/projects/mihna/${i18n.language}_Mihna_user_stories.png`}
            className="flexy m-auto aspect-video rounded-2xl mt-10 sm:mt-12 md:mt-20 w-[60%] max-lg:w-[80%] max-sm:w-[90%]"
            alt="Mihna"
          />
        </FadeContent>

        <FadeContent
          blur={true}
          duration={600}
          easing="ease-out"
          delay={300}
          initialOpacity={0}
        >
          <img
            src={`/photos/projects/mihna/${i18n.language}_Mihna_problems.png`}
            className="flexy m-auto aspect-video rounded-2xl mt-5 sm:mt-5 md:mt-10 w-[60%] max-lg:w-[80%] max-sm:w-[90%]"
            alt="Mihna"
          />
        </FadeContent>

        <div className="w-[90%] sm:w-[90%] md:w-[60%] m-auto grid sm:grid-cols-1 md:grid-cols-[1fr_1.5fr] mt-6 sm:mt-8 md:mt-10 text-base sm:text-base md:text-xl gap-4">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            delay={100}
            initialOpacity={0}
          >
            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold">
              {t("The Challenge")}
            </h1>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            delay={300}
            initialOpacity={0}
          >
            <p className="text-justify">{t("mihna_challenge")}</p>
          </FadeContent>
        </div>

        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          delay={300}
          initialOpacity={0}
        >
          <div className="flexy py-20 max-md:py-15 max-md:pb-8">
            <h1 className="flexy text-3xl sm:text-5xl md:text-6xl lg:text-8xl w-full sm:w-4/5 md:w-3/4 lg:w-3/5 m-auto text-center font-medium leading-snug sm:leading-tight md:leading-[1] max-sm:px-5">
              {t("Platform Features & Functionalities")}
            </h1>
          </div>
        </FadeContent>
        <div className=" flexy justify-start gap-4 w-fit py-1 px-10 m-auto">
          <h1 className="flexy text-3xl max-md:text-2xl max-sm:text-lg text-center">
            {t("Candidate Features & Functionalities")}
          </h1>
        </div>
        <Carousel className="w-[60%] max-lg:w-[80%] max-sm:w-[90%] m-auto mt-4 select-none">
          <CarouselContent className="p-2">
            {condidatePages.map((page, index) => (
              <CarouselItem key={index} className="relative pl-4">
                <FadeContent
                  blur={true}
                  duration={600}
                  easing="ease-out"
                  delay={100}
                  initialOpacity={0}
                >
                  <div className="shadow-[var(--custom-shadow)] rounded-[40px]">
                    <img
                      src={page.photo}
                      className="w-full aspect-[16/8] rounded-t-[40px]"
                      alt={page.title}
                    />
                    <div
                      className={`w-full rounded-b-[40px] py-2 px-6 flexy text-lg max-md:text-base border-t-2 ${
                        theme === "light" ? "bg-[#e6e6e699]" : "bg-[#3939397d]"
                      }`}
                    >
                      {page.title}
                    </div>
                  </div>
                </FadeContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="CarouselPrev">
            <ChevronLeft className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselPrevious>
          <CarouselNext className="CarouselNext">
            <ChevronRight className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselNext>
        </Carousel>
        <div className=" flexy justify-start gap-4 w-fit py-1 px-10 m-auto mt-20 max-md:mt-15">
          <h1 className="flexy text-3xl max-md:text-2xl max-sm:text-lg text-center">
            {t("Applying For a Job")}
          </h1>
        </div>
        <FadeContent
          blur={true}
          duration={800}
          easing="ease-out"
          delay={100}
          initialOpacity={0}
        >
          <video
            ref={videoRef}
            src="/videos/Mihna_job_applying.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[16/8] w-[60%] max-lg:w-[80%] max-sm:w-[90%] m-auto rounded-[40px] shadow-[var(--custom-shadow)] mt-4"
          ></video>
        </FadeContent>
        <div className=" flexy justify-start gap-4 w-fit py-1 px-10 m-auto mt-20 max-md:mt-15">
          <h1 className="flexy text-3xl max-md:text-2xl max-sm:text-lg text-center">
            {t("Company Features & Functionalities")}
          </h1>
        </div>
        <Carousel className="w-[60%] max-lg:w-[80%] max-sm:w-[90%] m-auto mt-4 select-none">
          <CarouselContent className="p-2">
            {companyPages.map((page, index) => (
              <CarouselItem key={index} className="relative pl-4">
                <FadeContent
                  blur={true}
                  duration={600}
                  easing="ease-out"
                  delay={100}
                  initialOpacity={0}
                >
                  <div className="shadow-[var(--custom-shadow)] rounded-[40px]">
                    <img
                      src={page.photo}
                      className="w-full aspect-[16/8] rounded-t-[40px]"
                      alt={page.title}
                    />
                    <div
                      className={`w-full rounded-b-[40px] py-2 px-6 flexy text-lg border-t-2 ${
                        theme === "light" ? "bg-[#e6e6e699]" : "bg-[#3939397d]"
                      }`}
                    >
                      {page.title}
                    </div>
                  </div>
                </FadeContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="CarouselPrev">
            <ChevronLeft className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselPrevious>
          <CarouselNext className="CarouselNext">
            <ChevronRight className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselNext>
        </Carousel>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          delay={300}
          initialOpacity={0}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/posts/maimoune_pfe-fullstackdevelopment-laravel-activity-7357032499840962561-daGm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENCWFMBhnwxzl902Gve7jd43kaDqY835Cs"
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
        </FadeContent>

        <div className="flexy justify-start gap-4 w-fit py-1 px-10 m-auto mt-20">
          <h1 className="flexy text-3xl max-md:text-2xl max-sm:text-xl max-[400px]:text-lg text-center">
            {t("Explore More Work")}
          </h1>
        </div>
        <div className="w-[40%] max-[1150px]:w-[60%] max-md:w-[70%] max-sm:w-[90%] m-auto">
          <Carousel opts={{ align: "start", slidesToScroll: 1, loop: false }}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="flex-shrink-0">
                  <FadeContent
                    blur={true}
                    duration={600}
                    easing="ease-out"
                    delay={100}
                    initialOpacity={0}
                  >
                    <Sheet>
                      <SheetTrigger>
                        <div className="group/project mt-6 bg-[var(--bg-projects)] h-100 p-4 rounded-4xl shadow-[var(--custom-shadow)] m-2 cursor-pointer flex flex-col">
                          <div className="relative">
                            <div className="absolute top-2 right-2 flexy gap-4 z-20">
                              <span
                                className="opacity-0 group-hover/project:opacity-100 
                   group-hover/project:scale-90 
                   group-hover/project:translate-x-4
                   transform transition duration-300 
                   bg-[#00000033] text-white py-[5px] px-4 rounded-full font-semibold"
                              >
                                {t("Open Project")}
                              </span>
                              <span className="group-hover/project:scale-85 transform transition duration-300 rounded-full bg-[#00000033] p-2">
                                <ArrowUpRight className="stroke-white" />
                              </span>
                            </div>
                            <div className="h-60 overflow-hidden shadow-sm rounded-2xl">
                              <div className="h-auto overflow-hidden">
                                <img
                                  src={project.image}
                                  className="h-auto w-full object-cover transform group-hover/project:brightness-90 transition-transform duration-[10s] ease-in-out hover:-translate-y-[85%]"
                                  alt={project.name}
                                />
                              </div>
                            </div>
                          </div>

                          <h1 className="font-bold text-2xl mt-2 text-left!">
                            {project.name}
                          </h1>
                          <p className="text-sm text-justify leading-[1.4] max-sm:leading-[1.1]">
                            {project.description}
                          </p>
                          <p className="flexy justify-end! text-sm font-semibold mt-auto">
                            {project.date}
                          </p>
                        </div>
                      </SheetTrigger>
                      <SheetContent side="bottom" className="w-full h-[100vh]">
                        {project.page}
                      </SheetContent>
                    </Sheet>
                  </FadeContent>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="CarouselPrev">
              <ChevronLeft className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
            </CarouselPrevious>
            <CarouselNext className="CarouselNext">
              <ChevronRight className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
