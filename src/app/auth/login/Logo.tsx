import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/black-transparent-logo.svg"
      alt="mowe-logo"
      width={192}
      height={82}
    />
  );
};

export default Logo;
