"use client";
import React from "react";
import { FloatingDock } from "@/components/aceternityui/floating-dock";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandBitbucket,
  IconBrandTailwind,
} from "@tabler/icons-react";

export function Skill() {
  const links = [
    {
      title: "React",
      icon: (
        <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "React Native",
      icon: (
        <IconBrandReactNative className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Nextjs",
      icon: (
        <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Typescript",
      icon: (
        <IconBrandTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Tailwind",
      icon: (
        <IconBrandTailwind className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Nodejs",
      icon: (
        <IconBrandNodejs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Bitbucket",
      icon: (
        <IconBrandBitbucket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
