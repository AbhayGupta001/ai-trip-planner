import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const FAQThree = () => {
  return (
    <section className="max-w-7xl mx-auto px-10 md:px-0 py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl lg:mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            assumenda
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div className="transition-all duration-200 border border-gray-400 dark:border-gray-700 shadow-lg cursor-pointer rounded-md">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black dark:text-white">
                How do I get started?
              </span>

              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi
                nobis inventore ratione deleniti?
              </p>
            </div>
          </div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="transition-all duration-200 border border-gray-400 dark:border-gray-700 cursor-pointer rounded-md"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black dark:text-white text-start">
                  What is the difference between a free and paid account?
                </span>

                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 textbase mt-6">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-indigo-600 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

FAQThree.displayName = "FAQThree";
