"use client";
import React from "react";
import Image from "next/image";
import EventBackground from "../../../../public/event/event-bg.jpg";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  SoundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import {
  DresscodeIcon,
  FeedbackIcon,
  GfitIcon,
  HamburgerIcon,
  LocationIcon,
  PauseIcon,
  PlayIcon,
  RssIcon,
  SpeakerMuteIcon,
  TimeIcon,
} from "@/components/Icons";
import Link from "next/link";
const EventLayout = ({ children }: { children: React.ReactNode }) => {
  console.log(localStorage.getItem("primaryMedia"));
  return (
    <section
      className="h-screen flex flex-col"
      style={{ backgroundImage: `url(${EventBackground.src})` }}
    >
      <div className="flex items-center container mx-auto">
        <div className="flex justify-between items-center w-full mt-10">
          <Image
            src="/black-transparent-logo.svg"
            alt="mowe-logo"
            width={192}
            height={82}
          />
          <Space>
            <PlayIcon />
            <PauseIcon />
            <SpeakerMuteIcon />
            <p className="ml-5">
              <HamburgerIcon />
            </p>
          </Space>
        </div>
      </div>
      <div className="flex justify-center flex-1 container mx-auto">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-20 mt-28">
            <Link href={"/login"}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <LocationIcon />
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/50 text-white">
                  Ubicación
                </span>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <TimeIcon />
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/50 text-white">
                  Countdown
                </span>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <DresscodeIcon />
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/50 text-white">
                  Dresscode
                </span>
              </div>
            </Link>
          </div>
          <div>{children}</div>
          <div className="flex flex-col gap-20 mt-28">
            <Link href={"/login"}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <GfitIcon />
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/50 text-white">
                  Regalo
                </span>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <RssIcon />
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/50 text-white">
                  RRSS
                </span>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="flex flex-col gap-2 justify-center items-center">
                <FeedbackIcon />
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black/50 text-white">
                  Feedback
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventLayout;
