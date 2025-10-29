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

export const Available = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className="flexy flex-col gap-6 pb-20">
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
      <h1 className="font-bold text-2xl max-sm:text-xl text-center">
        {t("Let's build something")} <br /> {t("incredible together!")}
      </h1>
      <a
        href="mailto:mohamedmaimouneh@gmail.com"
        className="bg-[#0072ff0a] pt-1 underline decoration-2 text-xl max-sm:text-base underline-offset-2"
      >
        mohamedmaimouneh@gmail.com
      </a>
      <Sheet>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger>
              <span
                className={`h-11! w-11! max-sm:h-10! max-sm:w-10! cursor-pointer inline-flex items-center justify-center rounded-full shadow-[var(--custom-shadow)] ${
                  theme === "light" ? "bg-[#d9e2e9]" : "bg-[#00bf6354]"
                }`}
              >
                <Phone className="fill-[var(--icons-color)] stroke-[var(--icons-color)] size-5 max-sm:size-4.5" />
              </span>
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
