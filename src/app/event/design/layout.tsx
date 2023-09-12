import React from "react";
import Image from "next/image";
import EventBackground from "../../../../public/event/event-bg.jpg";
import Logo from "@/app/auth/login/Logo";

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ backgroundImage: `url(${EventBackground.src})` }}
    >
      <div className="flex items-center container mx-auto">
        <Logo />
      </div>
      <div className="flex items-center flex-1 container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default EventLayout;
