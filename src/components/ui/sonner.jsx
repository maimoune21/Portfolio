import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "!w-fit !h-10 !px-4 py-0 !rounded-lg shadow-[var(--custom-shadow)] text-white !border-none !font-bold",
          success: "!bg-green-600 !text-white",
          error: "!bg-red-600 !text-black",
          warning: "!bg-yellow-500 text-black",
          info: "!bg-blue-600 text-white",
        },
      }}
      icons={{
        // success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        // error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
