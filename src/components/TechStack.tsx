import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.png", // Assuming a Python logo exists or will be added
      className: "h-12 w-12",
    },
    {
      title: "Django",
      src: "/images/logos/django-logo.png",
      className: "h-10 w-14",
    },
    {
      title: "TensorFlow",
      src: "/images/logos/tensorflow.png", // Assuming a TensorFlow logo exists or will be added
      className: "h-12 w-12",
    },
    {
      title: "PyTorch",
      src: "/images/logos/pytorch.png", // Assuming a PyTorch logo exists or will be added
      className: "h-12 w-12",
    },
    {
      title: "Scikit-learn",
      src: "/images/logos/scikit-learn.png", // Assuming a Scikit-learn logo exists or will be added
      className: "h-12 w-12",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-6 mb-6", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
