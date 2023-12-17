import React from "react";
import Image from "next/image";

function SocialMediaSVG() {
  return (
    <>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <Image
          alt="facebook"
          src="/image/facebook.svg"
          width={20}
          height={20}
          className="dark:bg-gray-400 rounded-md dark:hover:bg-white"
        />
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <Image
          alt="instagram"
          src="/image/instagram.svg"
          height={20}
          width={20}
          className="dark:bg-gray-400 rounded-md dark:hover:bg-white"
        />
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <Image
          alt="twitter"
          src="/image/twitter.svg"
          height={20}
          width={20}
          className="dark:bg-gray-400 rounded-md dark:hover:bg-white"
        />
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <Image
          alt="github"
          src="/image/github.svg"
          height={20}
          width={20}
          className="dark:bg-gray-400 rounded-md dark:hover:bg-white"
        />
      </a>
    </>
  );
}

export default SocialMediaSVG;
