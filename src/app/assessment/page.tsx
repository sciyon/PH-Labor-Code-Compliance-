"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useAssessment } from "@/context/AssessmentContext";
import { motion } from "framer-motion";
import { questions } from "@/lib/questions";

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { answers, setAnswer, resetAnswers } = useAssessment();

  useEffect(() => {
    resetAnswers();
  }, [resetAnswers]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (value: "yes" | "no" | "not-sure") => {
    setAnswer(currentQuestion, value);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="max-w-2xl mx-auto">
        <Progress value={progress} className="mb-8" />
        <Card>
          <CardHeader>
            <CardTitle>
              {questions[currentQuestion].section}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <RadioGroup
              onValueChange={handleAnswer}
              value={answers[currentQuestion] || ""}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-sure" id="not-sure" />
                <Label htmlFor="not-sure">Not Sure</Label>
              </div>
            </RadioGroup>
            <p className="text-sm text-muted-foreground mt-4">
              Reference: {questions[currentQuestion].reference}
            </p>
          </CardContent>
        </Card>
        <div className="flex justify-between mt-8">
          <Button onClick={handlePrev} disabled={currentQuestion === 0}>
            Previous
          </Button>
          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={answers[currentQuestion] === null}
            >
              Next
            </Button>
          ) : (
            <Link href="/results">
              <Button disabled={answers[currentQuestion] === null}>
                View Results
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
