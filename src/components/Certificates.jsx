import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";
import AnimatedContent from "./flowBits/AnimatedContent";
import FadeContent from "./flowBits/FadeContent";

export const Certificates = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const certificates = t("certificates.items", { returnObjects: true });

  return (
    <section className="pt-35 max-sm:pt-10">
      <AnimatedContent
        distance={10}
        direction="horizontal"
        reverse={true}
        duration={0.8}
        ease="easeOut"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={0.2}
      >
        <div className="flexy gap-2">
          <h1 className="font-bold text-2xl">{t("Certificates")}</h1>
          <p className="font-bold text-[var(--icons-color)] mt-0.5 text-lg">
            • {certificates.length}
          </p>
        </div>
      </AnimatedContent>

      <div className="w-[80%] max-sm:w-[80%] max-md:w-[60%] m-auto mt-8 max-sm:mt-4">
        <Carousel opts={{ align: "start", slidesToScroll: 1, loop: false }}>
          <CarouselContent>
            {certificates.map((cert, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 flex-shrink-0"
              >
                <FadeContent
                  blur={true}
                  duration={600}
                  easing="ease-out"
                  delay={100}
                  initialOpacity={0}
                >
                  <a
                    href={cert.link}
                    target="_blank"
                    className="group/certificate bg-[var(--bg-projects)] h-70 cursor-pointer p-4 rounded-2xl shadow-[var(--custom-shadow)] flex flex-col m-1 select-none"
                  >
                    <div className="relative">
                      <span className="z-10 text-xs absolute top-2 right-2 rounded-full bg-[var(--bg-projects)] py-1 px-2 shadow-[var(--custom-shadow)]">
                        {cert.owner}
                      </span>
                      <img
                        src={`/photos/certificates/${cert.photo}`}
                        className="h-40 w-full rounded-lg shadow-sm group-hover/certificate:scale-98 group-hover/certificate:brightness-90"
                        alt={cert.name}
                      />
                      <div className="absolute bottom-2 right-2 flexy gap-4 z-20">
                        <span
                          className="opacity-0 group-hover/certificate:opacity-100 
                                       group-hover/certificate:scale-90 
                                       group-hover/certificate:translate-x-4
                                       transform transition duration-300 
                                       bg-[#00000033] text-white text-sm py-0.5 px-2 rounded-full font-normal shadow-[var(--custom-shadow)]"
                        >
                          {t("Open")}
                        </span>
                        <span className="group-hover/certificate:scale-90 transform transition duration-300 rounded-full bg-[#00000033] p-1 shadow-[var(--custom-shadow)]">
                          <ArrowUpRight className="stroke-white size-5" />
                        </span>
                      </div>
                    </div>

                    <h1 className="font-bold text-lg leading-[1] mt-3 truncate">
                      {cert.name}
                    </h1>
                    <h3 className="font-semibold mb-2">{cert.platform}</h3>

                    <div className="relative mt-auto flexy justify-between!">
                      <div className="flexy gap-2 flex-wrap">
                        {cert.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-xs py-1 px-2 rounded-full font-bold shadow-[var(--custom-shadow)] ${
                              theme === "light" ? "bg-white" : "bg-[#6f6d6d]"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold">{cert.date}</p>
                    </div>
                  </a>
                </FadeContent>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="max-[400px]:-left-4! max-sm:-left-8! max-sm:bg-transparent max-sm:border-none shadow-none">
            <ChevronLeft className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselPrevious>
          <CarouselNext className="max-[400px]:-right-4! max-sm:-right-8! max-sm:bg-transparent max-sm:border-none shadow-none">
            <ChevronRight className="stroke-white size-6 max-sm:stroke-gray-300 max-sm:size-10" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
