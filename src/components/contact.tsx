"use client";

import Link from "next/link";
import BlurFade from "./magicui/blur-fade";
import { TypewriterEffectSmooth } from "./aceternityui/typewriter-effect";
import { RainbowButton } from "./magicui/rainbow-button";
const BLUR_FADE_DELAY = 0.04;

export const Contact = () => {
  const words = [
    {
      text: "with",
    },
    {
      text: "a direct",
    },
    {
      text: "question",
    },
    {
      text: "on",
    },
    {
      text: "Facebook.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="space-y-3">
          <Link href={"https://www.facebook.com/doanngoctrong2001/"}>
            <RainbowButton>Contact Me</RainbowButton>
          </Link>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Want to chat? Just shoot me a dm{" "}
            <TypewriterEffectSmooth words={words} />
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </BlurFade>
    </div>
  );
};
