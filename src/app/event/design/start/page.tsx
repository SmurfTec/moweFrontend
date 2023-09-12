import React from "react";
import Image from "next/image";
import hiHand from "../../../../../public/event/hi-hand.svg";
import { Button } from "antd";
import Link from "next/link";
import EventBackground from "../../../public/event/event-bg.jpg";

const Start = () => {
  return (
    <section className="bg-white w-8/12 bg-opacity-50 backdrop-blur-md mx-auto p-20 rounded-lg">
      <div className="bg-white rounded-lg text-center py-20 px-10 flex flex-col gap-4">
        <Image src={hiHand} alt="Picture of the author" className="mx-auto" />
        <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">
          Welcome to your wedding invitation designer!
        </h1>
        <p className="text-2xl  font-normal">
          if you’re ready, let’s design the perfect invitation for the Big Day!
        </p>
        <Link href={"/event/design/intro"}>
          <Button type="primary" size="large" shape="round">
            Start
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Start;
