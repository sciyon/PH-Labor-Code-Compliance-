"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-primary">About This App</h1>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-lg text-muted-foreground mb-6">
          This tool is designed to assist Philippine businesses, HR professionals, and entrepreneurs in understanding and assessing their compliance with the{" "}
          <a href="https://www.officialgazette.gov.ph/1974/05/01/presidential-decree-no-442-s-1974/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Labor Code of the Philippines (Presidential Decree No. 442, as amended)
          </a>{" "}
          and its pertinent implementing rules and regulations issued by the{" "}
          <a href="https://www.dole.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Department of Labor and Employment (DOLE)
          </a>
          . Our mission is to simplify complex legal provisions into an accessible, actionable guide.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Methodology</h2>
        <p className="text-lg text-muted-foreground mb-6">
          The assessment questions are derived from key articles of the Labor Code, relevant DOLE Department Orders, and prevailing jurisprudence. This tool is intended for Small and Medium-sized Enterprises (SMEs), HR managers, startup founders, and business owners.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Data Privacy</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We are committed to protecting your privacy. This website does not store any of your personal data or assessment responses on our servers. Your information is only used to generate the results on your screen. If you choose to email the results to yourself, that is the only time your data is transmitted, and it is sent directly to the email address you provide.
        </p>

        <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-md my-8">
          <h2 className="text-3xl font-bold text-destructive">Important Disclaimer</h2>
          <p className="text-lg text-destructive/90 mt-4">
            This web application provides general guidance and an assessment tool for informational purposes only. It is NOT a substitute for professional legal advice from a qualified labor lawyer. Labor laws are complex and constantly evolving, with interpretations that can vary based on specific facts and circumstances. Relying solely on this tool for legal compliance decisions is not recommended. Always consult with a legal professional for advice tailored to your specific business situation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
