"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Department of Labor and Employment (DOLE)",
    links: [
      { href: "https://www.dole.gov.ph", text: "Official Website" },
      { href: "https://bwc.dole.gov.ph/images/Downloads/2023-Handbook-on-Workers-Statutory-Monetary-Benefits.pdf", text: "DOLE Handbook on Workers' Statutory Monetary Benefits" },
      { href: "https://www.dole.gov.ph/news/category/labor-advisories/", text: "Latest Labor Advisories and Department Orders" },
    ],
  },
  {
    title: "National Labor Relations Commission (NLRC)",
    links: [{ href: "https://nlrc.dole.gov.ph", text: "Official Website" }],
  },
  {
    title: "Social Security System (SSS)",
    links: [{ href: "https://www.sss.gov.ph", text: "Official Website" }],
  },
  {
    title: "Philippine Health Insurance Corporation (PhilHealth)",
    links: [{ href: "https://www.philhealth.gov.ph", text: "Official Website" }],
  },
  {
    title: "Home Development Mutual Fund (Pag-IBIG Fund)",
    links: [{ href: "https://www.pagibigfund.gov.ph", text: "Official Website" }],
  },
  {
    title: "Official Gazette of the Philippines",
    links: [
      { href: "https://www.officialgazette.gov.ph/1974/05/01/presidential-decree-no-442-s-1974/", text: "Labor Code of the Philippines (PD 442)" },
    ],
  },
  {
    title: "National Wages and Productivity Commission",
    links: [{ href: "https://nwpc.dole.gov.ph/", text: "Official Website" }],
  },
];

export default function ResourcesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Resources & Official Links</h1>
        <div className="grid gap-6">
          {resources.map((resource) => (
            <Card key={resource.title}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {resource.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
