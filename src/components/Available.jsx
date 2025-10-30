import { Phone } from "lucide-react";
import React from "react";
import { useTheme } from "./theme-provider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Contact } from "./Contact";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "react-i18next";
import AnimatedContent from "./flowBits/AnimatedContent";
import TextType from "./flowBits/TextType";
import FadeContent from "./flowBits/FadeContent";

export const Available = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className="flexy flex-col gap-6 pb-20">
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
        delay={0.1}
      >
        <div
          className={`flexy h-11 max-h-11 font-bold text-base rounded-full px-6 shadow-[var(--custom-shadow)] ${
            theme === "light" ? "bg-[#16a34a17]" : "bg-[#00bf6340]"
          }`}
        >
          <span
            className={`pulse relative w-2 aspect-square rounded-full mr-4 ${
              theme === "light" ? "bg-green-600" : "bg-green-400"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-full animate-ping [animation-delay:3s] [animation-duration:1.5s] ${
                theme === "light" ? "bg-green-600" : "bg-green-400"
              }`}
            ></span>
          </span>
          <p className="max-sm:text-sm">{t("Available for work")}</p>
        </div>
      </AnimatedContent>
      <TextType
        text={`${t("Let's build something")}\n${t("incredible together!")}`}
        className="font-bold text-2xl max-sm:text-xl text-center whitespace-pre-line"
        typingSpeed={70}
        deletingSpeed={60}
        pauseDuration={3000}
        showCursor={true}
        loop={false}
        cursorCharacter=""
      />
      <FadeContent
        blur={true}
        duration={1100}
        easing="ease-out"
        initialOpacity={0}
      >
        <a
          href="mailto:mohamedmaimouneh@gmail.com"
          className="bg-[#0072ff0a] pt-1 underline decoration-2 text-xl max-sm:text-base underline-offset-2"
        >
          mohamedmaimouneh@gmail.com
        </a>
      </FadeContent>
      <Sheet>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger>
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
                delay={0.1}
              >
                <span
                  className={`h-11! w-11! max-sm:h-10! max-sm:w-10! cursor-pointer inline-flex items-center justify-center rounded-full shadow-[var(--custom-shadow)] ${
                    theme === "light" ? "bg-[#d9e2e9]" : "bg-[#00bf6354]"
                  }`}
                >
                  <Phone className="fill-[var(--icons-color)] stroke-[var(--icons-color)] size-5 max-sm:size-4.5" />
                </span>
              </AnimatedContent>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Contact Me")}</p>
          </TooltipContent>
        </Tooltip>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <Contact />
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
};
