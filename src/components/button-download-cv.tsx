"use client";
import { useState } from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

export function ButtonDownloadCV() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <div className="relative h-full w-full">
      <a
        href="/DoanNgocTrong-FrontEnd-Developer.pdf"
        download
        onClick={handleDownload}
      >
        <AnimatedSubscribeButton
          buttonColor="#000000"
          buttonTextColor="#ffffff"
          subscribeStatus={isDownloaded}
          initialText={
            <span className="group inline-flex items-center">
              Download CV{" "}
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Success{" "}
            </span>
          }
        />
      </a>
    </div>
  );
}
