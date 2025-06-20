"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Navigate the Philippine Labor Code with Confidence.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Your essential guide and compliance checker for all things related to employees and labor laws in the Philippines.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-lg italic">
              Protect your business, empower your workforce, and ensure compliance with the Labor Code of the Philippines (Presidential Decree No. 442, as amended).
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/assessment">
              <Button size="lg">Start Your Labor Compliance Assessment</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Identify compliance gaps in your HR practices.</li>
                <li>Reduce legal risks and potential penalties.</li>
                <li>Ensure fair and just labor practices for your employees.</li>
                <li>Streamline your HR processes with our guided assessment.</li>
                <li>Access actionable recommendations to improve compliance.</li>
            </ul>
        </div>
      </div>
    </motion.div>
  );
}
