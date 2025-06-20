"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAssessment } from "@/context/AssessmentContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { questions } from "@/lib/questions";
import { toast } from "sonner";
import { useTheme } from "next-themes";

export default function ResultsPage() {
  const { answers } = useAssessment();
  const [email, setEmail] = useState("");
  const { theme } = useTheme();

  const score =
    (answers.filter((answer) => answer === "yes").length / questions.length) *
    100;

  let status = "";
  if (score >= 90) {
    status = "Highly Compliant";
  } else if (score >= 75) {
    status = "Good Standing - Minor Adjustments";
  } else if (score >= 50) {
    status = "Attention Needed - Moderate Risk";
  } else {
    status = "High Risk - Urgent Action Required";
  }

  const nonCompliantAnswers = answers
    .map((answer, index) => (answer === "no" ? index : -1))
    .filter((index) => index !== -1);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, answers, theme }),
      });
      if (response.ok) {
        toast.success("Results sent successfully!");
      } else {
        toast.error("Failed to send results. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Assessment Results & Recommendations
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>Overall Compliance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold">Compliance Score:</p>
              <p className="text-lg font-bold text-primary">{score.toFixed(2)}%</p>
            </div>
            <p className="text-muted-foreground">Status: {status}</p>
          </CardContent>
        </Card>
        {nonCompliantAnswers.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nonCompliantAnswers.map((questionIndex) => (
                  <div key={questionIndex}>
                    <h3 className="font-bold">
                      {questions[questionIndex].question}
                    </h3>
                    <p className="text-muted-foreground">
                      Reference: {questions[questionIndex].reference}
                    </p>
                    <p>
                      Recommendation: Review the relevant laws and regulations
                      and consult with a legal professional to ensure
                      compliance.
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Email My Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Enter your email address to receive a detailed report of your
              assessment. No data is saved on this website.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
