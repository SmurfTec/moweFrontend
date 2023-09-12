// icons.js
import Image from "next/image";
import React from "react";

export const PlayIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#69A88D" fillOpacity="0.31" />
    <path
      d="M20 16L34 25L20 34V16Z"
      stroke="black"
      strokeOpacity="0.43"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PauseIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#69A88D" fillOpacity="0.31" />
    <path
      d="M31.25 15.5H26.75V33.5H31.25V15.5Z"
      stroke="black"
      strokeOpacity="0.43"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.25 15.5H17.75V33.5H22.25V15.5Z"
      stroke="black"
      strokeOpacity="0.43"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpeakerMuteIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#69A88D" fillOpacity="0.31" />
    <path
      d="M36 22L30 28"
      stroke="#6B7770"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 22L36 28"
      stroke="#6B7770"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 18L19 22H15V28H19L24 32V18Z"
      stroke="#6B7770"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HamburgerIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#69A88D" />
    <path
      d="M17.375 29.25H31.625"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.375 24.5H31.625"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.375 19.75H31.625"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LocationIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#020202" fillOpacity="0.7" />
    <path
      d="M46.5 33.668C46.5 41.8346 36 48.8346 36 48.8346C36 48.8346 25.5 41.8346 25.5 33.668C25.5 30.8832 26.6062 28.2125 28.5754 26.2433C30.5445 24.2742 33.2152 23.168 36 23.168C38.7848 23.168 41.4555 24.2742 43.4246 26.2433C45.3938 28.2125 46.5 30.8832 46.5 33.668Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 37.168C37.933 37.168 39.5 35.601 39.5 33.668C39.5 31.735 37.933 30.168 36 30.168C34.067 30.168 32.5 31.735 32.5 33.668C32.5 35.601 34.067 37.168 36 37.168Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TimeIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#020202" fillOpacity="0.7" />
    <path
      d="M36.5 48.4154C43.6337 48.4154 49.4167 42.6324 49.4167 35.4987C49.4167 28.365 43.6337 22.582 36.5 22.582C29.3664 22.582 23.5834 28.365 23.5834 35.4987C23.5834 42.6324 29.3664 48.4154 36.5 48.4154Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.5 27.75V35.5L41.6667 38.0833"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DresscodeIcon = () => (
  <Image alt="dresscodeIcon" src={"/dress.png"} height={72} width={72} />
);

export const GfitIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#020202" fillOpacity="0.7" />
    <path
      d="M46 36V48.5H26V36"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M48.5 29.75H23.5V36H48.5V29.75Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 48.5V29.75"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 29.75H41.625C42.4538 29.75 43.2487 29.4208 43.8347 28.8347C44.4208 28.2487 44.75 27.4538 44.75 26.625C44.75 25.7962 44.4208 25.0013 43.8347 24.4153C43.2487 23.8292 42.4538 23.5 41.625 23.5C37.25 23.5 36 29.75 36 29.75Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 29.75H30.375C29.5462 29.75 28.7513 29.4208 28.1653 28.8347C27.5792 28.2487 27.25 27.4538 27.25 26.625C27.25 25.7962 27.5792 25.0013 28.1653 24.4153C28.7513 23.8292 29.5462 23.5 30.375 23.5C34.75 23.5 36 29.75 36 29.75Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RssIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#020202" fillOpacity="0.7" />
    <path
      d="M42 49.332C44.2091 49.332 46 47.5412 46 45.332C46 43.1229 44.2091 41.332 42 41.332C39.7909 41.332 38 43.1229 38 45.332C38 47.5412 39.7909 49.332 42 49.332Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 40C28.2091 40 30 38.2091 30 36C30 33.7909 28.2091 32 26 32C23.7909 32 22 33.7909 22 36C22 38.2091 23.7909 40 26 40Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.4533 38.0117L38.56 43.3184"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 30.668C44.2091 30.668 46 28.8771 46 26.668C46 24.4588 44.2091 22.668 42 22.668C39.7909 22.668 38 24.4588 38 26.668C38 28.8771 39.7909 30.668 42 30.668Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M38.5466 28.6797L29.4533 33.9864"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FeedbackIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="36" cy="36" r="36" fill="#020202" fillOpacity="0.7" />
    <path
      d="M39.2625 34.4805C39.9253 33.6521 40.29 32.6247 40.2979 31.5638C40.2979 30.2913 39.7924 29.0709 38.8926 28.1712C37.9929 27.2714 36.7725 26.7659 35.5 26.7659C34.2275 26.7659 33.0071 27.2714 32.1074 28.1712C31.2076 29.0709 30.7021 30.2913 30.7021 31.5638C30.71 32.6247 31.0747 33.6521 31.7375 34.4805C30.4376 35.2715 29.4177 36.4495 28.8208 37.8492C28.7373 38.0268 28.6905 38.2194 28.6831 38.4156C28.6758 38.6117 28.7082 38.8073 28.7782 38.9906C28.8483 39.174 28.9547 39.3413 29.0909 39.4825C29.2272 39.6238 29.3906 39.736 29.5713 39.8126C29.752 39.8892 29.9463 39.9286 30.1425 39.9283C30.3388 39.928 30.533 39.8881 30.7135 39.811C30.894 39.7339 31.057 39.6211 31.1929 39.4795C31.3287 39.3379 31.4346 39.1703 31.5042 38.9867C31.8393 38.2032 32.396 37.5347 33.1059 37.0632C33.8157 36.5917 34.6478 36.3377 35.5 36.3326C36.3547 36.3349 37.1899 36.5875 37.9026 37.0592C38.6153 37.5309 39.1743 38.201 39.5104 38.9867C39.6221 39.2503 39.8088 39.4752 40.0474 39.6334C40.286 39.7916 40.5658 39.8761 40.8521 39.8763C41.0472 39.8727 41.24 39.8331 41.4208 39.7596C41.7765 39.6086 42.0576 39.3225 42.2025 38.9643C42.3474 38.6061 42.3443 38.2051 42.1938 37.8492C41.593 36.4474 40.5678 35.2692 39.2625 34.4805ZM35.5 33.4159C35.1273 33.4159 34.763 33.3052 34.4533 33.0978C34.1437 32.8904 33.9025 32.5958 33.7606 32.2512C33.6187 31.9065 33.5823 31.5275 33.656 31.1622C33.7298 30.7969 33.9104 30.4617 34.175 30.1992C34.4396 29.9367 34.7761 29.7587 35.142 29.6878C35.5079 29.6168 35.8866 29.6562 36.2301 29.8008C36.5736 29.9454 36.8664 30.1888 37.0713 30.5001C37.2763 30.8114 37.3841 31.1765 37.3813 31.5492C37.3774 32.0456 37.1775 32.5204 36.8251 32.87C36.4727 33.2197 35.9964 33.4159 35.5 33.4159ZM44.25 20.918H26.75C25.5897 20.918 24.4769 21.3789 23.6564 22.1994C22.8359 23.0198 22.375 24.1326 22.375 25.293V41.3346C22.375 42.495 22.8359 43.6078 23.6564 44.4282C24.4769 45.2487 25.5897 45.7096 26.75 45.7096H30.5271L34.4646 49.6617C34.6009 49.7969 34.7625 49.9038 34.9401 49.9764C35.1178 50.049 35.3081 50.0857 35.5 50.0846C35.8476 50.0847 36.1838 49.9605 36.4479 49.7346L41.1438 45.7096H44.25C45.4103 45.7096 46.5231 45.2487 47.3436 44.4282C48.1641 43.6078 48.625 42.495 48.625 41.3346V25.293C48.625 24.1326 48.1641 23.0198 47.3436 22.1994C46.5231 21.3789 45.4103 20.918 44.25 20.918ZM45.7083 41.3346C45.7083 41.7214 45.5547 42.0923 45.2812 42.3658C45.0077 42.6393 44.6368 42.793 44.25 42.793H40.6042C40.2566 42.7929 39.9204 42.9171 39.6563 43.143L35.5729 46.643L32.1604 43.2159C32.0241 43.0807 31.8625 42.9738 31.6849 42.9012C31.5072 42.8286 31.3169 42.7919 31.125 42.793H26.75C26.3632 42.793 25.9923 42.6393 25.7188 42.3658C25.4453 42.0923 25.2917 41.7214 25.2917 41.3346V25.293C25.2917 24.9062 25.4453 24.5353 25.7188 24.2618C25.9923 23.9883 26.3632 23.8346 26.75 23.8346H44.25C44.6368 23.8346 45.0077 23.9883 45.2812 24.2618C45.5547 24.5353 45.7083 24.9062 45.7083 25.293V41.3346Z"
      fill="white"
    />
  </svg>
);
