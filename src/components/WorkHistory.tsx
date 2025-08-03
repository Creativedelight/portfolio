"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-900 bg-white shadow-md rounded-md">
      

      {/* Timeline Items */}
      {timeline.map((item, idx) => (
        <section
          key={idx}
          className="mb-10 last:mb-0 border-b border-gray-200 pb-6"
          aria-labelledby={`section-title-${idx}`}
        >
          {/* Title */}
          <h2
            id={`section-title-${idx}`}
            className="text-2xl font-bold text-emerald-600 mb-1"
          >
            {item.company ? `${item.title} @ ${item.company}` : item.title}
          </h2>

          {/* Date */}
          {item.date && (
            <p className="text-sm text-gray-400 italic mb-3">{item.date}</p>
          )}

          {/* Description */}
          {item.description && (
            <p className="mb-4 text-gray-700 leading-relaxed">{item.description}</p>
          )}

          {/* Responsibilities */}
          {item.responsibilities && item.responsibilities.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {item.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <IconCircleCheckFilled className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">{resp}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
};
