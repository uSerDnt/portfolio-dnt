"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpLeftSquareIcon,
  Loader,
  Mail,
  MessageCircle,
  MousePointerClickIcon,
  User,
  Waves,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DynamicContainer,
  DynamicDescription,
  DynamicDiv,
  DynamicIsland,
  DynamicIslandProvider,
  DynamicTitle,
  SizePresets,
  useDynamicIslandSize,
  useScheduledAnimations,
} from "@/components/cultui/dynamic-island";
import { Play, Pause, Rewind, FastForward } from "lucide-react";
import { IconBrandSpotify } from "@tabler/icons-react";

const DynamicAction = () => {
  const { state: blobState, setSize } = useDynamicIslandSize();

  const blobStates: SizePresets[] = ["compact", "large", "medium"];

  const cycleBlobStates = () => {
    const currentIndex = blobStates.indexOf(blobState.size);
    const nextIndex = (currentIndex + 1) % blobStates.length;
    setSize(blobStates[nextIndex]);
  };

  useScheduledAnimations([
    { size: "compact", delay: 1000 },
    { size: "large", delay: 1200 },
    { size: "medium", delay: 1400 },
  ]);

  // Provide dynamic detail in such a beautiful small place :)
  const renderCompactState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative w-full flex items-center">
        <DynamicDescription className="absolute left-4  my-auto text-lg font-medium tracking-tighter text-white ">
          <MessageCircle className=" h-5 w-5 fill-cyan-400 text-cyan-400" />
        </DynamicDescription>

        <DynamicDescription className="absolute text-white right-4  my-auto text-lg font-bold tracking-tighter ">
          welcome my portfolio
        </DynamicDescription>
      </div>
    </DynamicContainer>
  );

  // Great for call to action, popping up in users face :)
  const renderLargeState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative  flex w-full items-center justify-between gap-6 px-4">
        <Loader className="animate-spin h-12 w-12  text-yellow-300" />

        <DynamicTitle className="my-auto text-2xl font-black tracking-tighter text-white ">
          loading
        </DynamicTitle>
      </div>
    </DynamicContainer>
  );

  const renderMediumState = () => (
    <DynamicContainer className="flex flex-col justify-between px-2 pt-4 text-white h-full bg-neutral-900 rounded-2xl">
      <MusicPlayer />
    </DynamicContainer>
  );

  function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.addEventListener("loadedmetadata", () => {
          setDuration(audioRef.current.duration);
        });
        audioRef.current.addEventListener("timeupdate", () => {
          setCurrentTime(audioRef.current.currentTime);
        });
      }
    }, []);

    const togglePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    const handleRewind = () => {
      audioRef.current.currentTime -= 10;
    };

    const handleFastForward = () => {
      audioRef.current.currentTime += 10;
    };

    const handleProgressChange = (e) => {
      const newTime = e.target.value;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    return (
      <div className="p-4 w-full text-white">
        <div className="flex items-center space-x-3 mb-4">
          {/* <img
            src="/nami.png"
            alt="Song Cover"
            className="w-12 h-12 rounded-md"
          /> */}
          <IconBrandSpotify className="size-12" />

          <div>
            <h3 className="text-lg font-semibold">Giua dai lo dong tay</h3>
            <p className="text-sm text-gray-400">just for fun</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full mx-2"
          />
          <span>{formatTime(duration)}</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handleRewind}>
            <Rewind className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-neutral-800"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          <button onClick={handleFastForward}>
            <FastForward className="w-6 h-6 text-white" />
          </button>
        </div>
        <audio ref={audioRef} src="/gd.mp3" />
      </div>
    );
  }

  // Render function for other states
  const renderOtherStates = () => (
    <div className="flex items-center justify-center h-full w-full">
      <div>
        <ArrowUpLeftSquareIcon className="text-white" />
      </div>
      <p className="text-white">cycle states</p>
    </div>
  );

  // Main render logic based on size
  function renderState() {
    switch (blobState.size) {
      case "compact":
        return renderCompactState();
      case "large":
        return renderLargeState();
      case "medium":
        return renderMediumState();
      // Optionally add cases for other states as necessary
      default:
        return renderOtherStates();
    }
  }

  return (
    <div className=" h-full">
      <div className="flex flex-col gap-4  h-full">
        <div className="absolute top-12 left-1">
          {/* {!blobState.isAnimating ? ( */}
          <Button
            onClick={cycleBlobStates}
            disabled={blobState.isAnimating}
            className="mt-4 p-2 border rounded-md max-w-[200px] "
          >
            Click
            <MousePointerClickIcon className="ml-2 h-4 w-4" />
          </Button>
          {/* ) : null} */}
        </div>
        <div className="absolute top-1 right-2">
          <div>
            <Badge variant="outline">prev - {blobState.previousSize}</Badge>
            <Badge variant="outline">cur -{blobState.size}</Badge>
          </div>
        </div>

        <DynamicIsland id="dynamic-blob">{renderState()}</DynamicIsland>
      </div>
    </div>
  );
};

export function DynamicIslandDemo() {
  return (
    <DynamicIslandProvider initialSize={"default"}>
      <div>
        <DynamicAction />
      </div>
    </DynamicIslandProvider>
  );
}

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

export function FadeIn(props: any) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({ faster = false, ...props }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
