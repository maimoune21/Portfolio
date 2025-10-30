import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Foody } from "./projects/Foody";
import { Mihna } from "./projects/Mihna";
import { Okad } from "./projects/Okad";
import { Youchef } from "./projects/Youchef";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import AnimatedContent from "./flowBits/AnimatedContent";
import FadeContent from "./flowBits/FadeContent";

export const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Mihna",
      description: t("mihna_description"),
      date: "02/2025 - 04/2025",
      image: "/photos/projects/mihna/Mihna.png",
      page: <Mihna />,
    },
    {
      name: "YouChef",
      description: t("youchef_description"),
      date: "03/2024 - 04/2024",
      image: "/photos/projects/youchef/Youchef.png",
      page: <Youchef />,
    },
    {
      name: "Okad",
      description: t("okad_description"),
      date: "04/2024 - 06/2024",
      image: "/photos/projects/okad/Okad.png",
      page: <Okad />,
    },
    {
      name: "Foody",
      description: t("foody_description"),
      date: "02/2024 - 03/2024",
      image: "/photos/projects/foody/Foody.png",
      page: <Foody />,
    },
  ];

  return (
    <section id="projects" className="pt-35 max-lg:pt-20 pb-20 max-sm:pb-10">
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
        <h1 className="flexy font-bold text-2xl">{t("Projects")}</h1>
      </AnimatedContent>
      <FadeContent
        blur={true}
        duration={1100}
        easing="ease-out"
        delay={300}
        initialOpacity={0}
      >
        <h3 className="font-semibold flexy text-lg max-sm:text-base max-[400px]:text-sm! max-[450px]:px-5 text-center mt-4">
          {t("Each project is a unique piece of development")} 🧩
        </h3>
      </FadeContent>

      <div className="w-[80%] m-auto mt-4 max-sm:w-[90%] max-[700px]:w-[90%] max-[900px]:w-[80%] max-lg:w-[70%] max-xl:w-[90%]">
        <Carousel opts={{ align: "start", slidesToScroll: 1, loop: false }}>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="sm:1/1 md:basis-1/1 lg:basis-1/2 flex-shrink-0"
              >
                <FadeContent
                  blur={true}
                  duration={400}
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

                        <h1 className="font-bold text-2xl max-sm:text-xl mt-2 text-left!">
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
          <CarouselPrevious className="max-sm:-left-4! max-sm:bg-transparent max-sm:border-none shadow-none">
            <ChevronLeft className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselPrevious>
          <CarouselNext className="max-sm:-right-4! max-sm:bg-transparent max-sm:border-none shadow-none">
            <ChevronRight className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
