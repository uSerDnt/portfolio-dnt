"use client";
import { DATA } from "@/data/resume";
import MorphingCard from "./beatsui/morphing-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const AvatarCustomn = () => {
  return (
    <MorphingCard
      width="250px"
      height="250px"
      contents={[
        {
          shape: "circle",
          title: "Discover",
          children: (
            <Avatar className="size-full rounded-full">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          ),
        },
        {
          shape: "hexagon",
          title: "Gender: Male",
          description: "Phone: 0335764560",
        },
        {
          shape: "rectangle",
          title: "Email: ",
          description: "doanngoctrong2023@gmail.com",
        },
      ]}
      colorScheme={{ from: "#4F46E5", to: "#7C3AED" }}
      autoPlay={true}
      interval={4000}
    />
  );
};
