'use client';

import React from "react";

export function Demo () {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          Try Our Demo
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://your-demo-url.com"
            width="100%"
            height="500px"
            className="border rounded-lg shadow-lg"
            title="Demo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};