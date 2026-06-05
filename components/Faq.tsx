// components/FaqFooterSection.tsx

"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What types of milk are available?",
    answer:
      "We provide cow milk, buffalo milk, toned milk, and full cream milk.",
  },
  {
    question: "Where do we deliver milk?",
    answer: "Milk delivery is available across selected areas in the city.",
  },
  {
    question: "Can we order other products with our milk subscription?",
    answer: "Yes, you can add dairy products, bakery items, and groceries.",
  }
];

const FaqFooterSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f1e5] pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-[#00a4df] text-4xl italic font-serif mb-20">
          <span className="text-red-500 mr-4">•</span>
          Frequently asked questions
          <span className="text-red-500 ml-4">•</span>
        </h2>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-[#e4ddcb] pb-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left py-4"
              >
                <span className="text-[#006ea3] text-lg font-serif">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp size={18} className="text-[#c28b43]" />
                ) : (
                  <ChevronDown size={18} className="text-[#c28b43]" />
                )}
              </button>

              {openIndex === index && (
                <p className="text-[#4c4c4c] leading-7 max-w-4xl pr-10">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqFooterSection;
