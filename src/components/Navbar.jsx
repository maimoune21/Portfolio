import { Target } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Switch from "./ui/Switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import { useTheme } from "./theme-provider";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
    localStorage.setItem("i18nextLng", lng);
  };

  const [open, setOpen] = React.useState(false);
  const { theme } = useTheme();
  const languages = [
    { id: 1, name: "Français", code: "fr", photo: "/photos/fr.svg" },
    { id: 2, name: "English", code: "en", photo: "/photos/gb.svg" },
    { id: 3, name: "Spanish", code: "es", photo: "/photos/es.svg" },
    { id: 4, name: "German", code: "de", photo: "/photos/de.svg" },
  ];

  return (
    <nav className="flexy justify-between! shadow-[var(--custom-shadow)] w-[50%] max-md:w-[80%] max-[800px]:w-[70%] max-[900px]:w-[70%] max-[1000px]:w-[60%] max-sm:w-full backdrop-blur-md bg-[var(--bg-nav)] m-auto mt-4 max-sm:mt-0 px-6 py-2 rounded-full max-sm:rounded-none! sticky top-1 max-sm:top-0 z-50">
      <Link
        to="home"
        smooth={true}
        duration={600}
        offset={-100}
        className="flexy justify-start!"
      >
        <img
          src={
            theme === "light"
              ? "../../public/photos/MM_black_text.png"
              : "../../public/photos/MM_white_text.png"
          }
          alt="MM"
          className="h-8 w-8 cursor-pointer"
        />
      </Link>
      <div className="flexy gap-4 max-[550px]:hidden!">
        <Tooltip>
          <TooltipTrigger>
            <Link to="home" smooth={true} duration={600} offset={-100}>
              <svg
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                className="size-7 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                    fill="var(--icons-color)"
                  ></path>
                </g>
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Home")}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link to="about" smooth={true} duration={600} offset={-30}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--icons-color)"
                className="size-6 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("About")}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link to="skills" smooth={true} duration={600} offset={-80}>
              <Target className="cursor-pointer stroke-[var(--icons-color)]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Skills")}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger className="bg-transparent">
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={70}
              className="bg-transparent cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect width="24" height="24" fill="none"></rect>{" "}
                  <path
                    d="M15 15C13.8954 15 13 15.8954 13 17V20C13 21.1046 13.8954 22 15 22H15.024C16.2771 22 17.3524 21.9342 18.2508 21.7345C19.1607 21.5323 19.9494 21.1798 20.5646 20.5646C21.1798 19.9494 21.5323 19.1607 21.7345 18.2508C21.8262 17.8382 21.8867 17.4194 21.9264 16.9979C22.0301 15.8982 21.1046 15 20 15H15Z"
                    fill="var(--icons-color)"
                  ></path>{" "}
                  <path
                    d="M2 15.024V13C2 11.8954 2.89543 11 4 11H9C10.1046 11 11 11.8954 11 13V20C11 21.1046 10.1046 22 9 22H8.976C7.72287 22 6.64762 21.9342 5.74915 21.7345C4.83933 21.5323 4.05065 21.1798 3.43543 20.5646C2.82021 19.9494 2.46772 19.1607 2.26552 18.2508C2.06584 17.3524 2 16.2771 2 15.024Z"
                    fill="var(--icons-color)"
                  ></path>{" "}
                  <path
                    d="M22 11C22 12.1046 21.1046 13 20 13H15C13.8954 13 13 12.1046 13 11V4C13 2.89543 13.8954 2 15 2H15.024C16.2771 2 17.3524 2.06584 18.2508 2.26552C19.1607 2.46772 19.9494 2.82021 20.5646 3.43543C21.1798 4.05065 21.5323 4.83933 21.7345 5.74915C21.9342 6.64762 22 7.72287 22 8.976V11Z"
                    fill="var(--icons-color)"
                  ></path>{" "}
                  <path
                    d="M11 4C11 2.89543 10.1046 2 9 2H8.976C7.72287 2 6.64762 2.06584 5.74915 2.26552C4.83933 2.46772 4.05065 2.82021 3.43543 3.43543C2.82021 4.05065 2.46772 4.83933 2.26552 5.74915C2.17381 6.1618 2.11329 6.58063 2.07356 7.0021C1.96991 8.1018 2.89543 9 4 9H9C10.1046 9 11 8.10457 11 7V4Z"
                    fill="var(--icons-color)"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Projects")}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link to="experience" smooth={true} duration={600} offset={-100}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--icons-color)"
                className="size-6 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Education & Experience")}</p>
          </TooltipContent>
        </Tooltip>
        <Sheet>
          <SheetTrigger className="font-menu cursor-pointer">
            <Tooltip>
              <TooltipTrigger className="cursor-pointer" asChild>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--icons-color)"
                  className="size-5.5 cursor-pointer mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("Contact Me")}</p>
              </TooltipContent>
            </Tooltip>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <Contact />
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {/* Mobile Nav Menu */}
      <div className="flexy justify-end! gap-3 ">
        <Sheet>
          <SheetTrigger className="font-menu cursor-pointer min-[550px]:hidden">
            <Tooltip>
              <TooltipTrigger className="cursor-pointer" asChild>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--icons-color)"
                  className="size-5.5 cursor-pointer mt-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("Contact Me")}</p>
              </TooltipContent>
            </Tooltip>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <Contact />
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
        <Switch />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <img
              src={
                languages.find((lang) => lang.code === i18n.language)?.photo ||
                "/photos/Globe.png"
              }
              className="rounded-full h-6 w-6 cursor-pointer"
              alt="fr"
            />
          </PopoverTrigger>
          <PopoverContent className="w-fit p-0">
            <Command>
              <CommandList>
                <CommandEmpty>No Language found.</CommandEmpty>
                <CommandGroup>
                  {languages
                    .filter((language) => language.code !== i18n.language)
                    .map((language, index) => (
                      <CommandItem
                        key={index}
                        value={language.name}
                        onSelect={() => changeLanguage(language.code)}
                      >
                        <img
                          src={language.photo}
                          className="rounded-full h-5 w-5"
                          alt={language.code}
                        />
                        {language.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};
