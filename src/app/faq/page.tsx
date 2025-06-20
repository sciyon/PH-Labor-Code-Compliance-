"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How accurate is this assessment?",
    answer:
      "The assessment is based on the Philippine Labor Code and relevant DOLE regulations. However, it is for informational purposes only and is not a substitute for legal advice.",
  },
  {
    question: "Is my data confidential?",
    answer:
      "Yes, your data is confidential. We do not store any of your assessment responses on our servers.",
  },
  {
    question: "Can I save my assessment progress?",
    answer:
      "Currently, you cannot save your assessment progress. You must complete it in one session.",
  },
  {
    question: "How often is the Labor Code information updated on this site?",
    answer:
      "We strive to keep the information as up-to-date as possible. However, for the most current information, please refer to the official government sources linked in our Resources page.",
  },
  {
    question: "What technologies were used to build this app?",
    answer:
      "This app was built with Next.js, Tailwind CSS, and shadcn/ui.",
  },
  {
    question: "Who is considered a 'rank-and-file' employee?",
    answer:
      "In the Philippines, a rank-and-file employee is any employee who is not a managerial employee. Managerial employees are those who have the power to hire, fire, discipline, or effectively recommend such actions.",
  },
  {
    question: "What are the types of employment contracts in the Philippines?",
    answer:
      "The most common types of employment contracts are regular, probationary, project, and seasonal.",
  },
  {
    question: "Can an employee be dismissed without due process?",
    answer:
      "No. The Labor Code requires both a just or authorized cause for termination and the observance of due process, which typically involves a two-notice rule.",
  },
  {
    question: "What are the mandatory government benefits for employees?",
    answer:
      "The mandatory government benefits include contributions to the Social Security System (SSS), Philippine Health Insurance Corporation (PhilHealth), and the Home Development Mutual Fund (Pag-IBIG Fund).",
  },
];

export default function FaqPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
