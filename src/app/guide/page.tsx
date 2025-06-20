"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const guideSections = [
  {
    title: "I. Fundamental Principles",
    content:
      "A Brief Overview of Labor Protection and Social Justice: The Labor Code is designed to protect the rights of workers, promote their welfare, and ensure industrial peace based on the principles of social justice. It aims to afford full protection to labor, promote full employment, ensure equal employment opportunities, and regulate relations between workers and employers.",
    subContent:
      "Core Idea: The State affirms labor as a primary social and economic force and shall protect the rights of workers and promote their welfare. (Preamble of the Labor Code)",
  },
  {
    title: "II. Pre-Employment",
    content:
      "Recruitment & Placement (Labor Code, Arts. 13-42): Legality of Recruitment: Only licensed or authorized entities (e.g., Private Recruitment Agencies, Public Employment Service Offices) can engage in recruitment and placement activities. This prohibits illegal recruitment.",
    subContent:
      "Prohibitions: The law strictly prohibits certain acts in recruitment, such as charging excessive fees, misrepresentation, or engaging in 'debt bondage' (where a worker is forced to work off a debt). Implication for Businesses: Ensure you only deal with legitimate and licensed recruitment agencies. Direct hiring is generally allowed for non-placement fee purposes.",
  },
  {
    title: "III. Conditions of Employment",
    content:
      "A. Hours of Work: Normal Hours (Labor Code, Art. 83): The normal hours of work for any employee shall not exceed eight (8) hours a day. Exceptions may apply to certain health personnel or in exigency situations as prescribed by law. Overtime (Labor Code, Art. 87): Work performed beyond eight (8) hours a day is considered overtime and must be compensated with an additional premium of at least 25% of the regular wage. Work on a holiday or rest day beyond 8 hours has higher premiums. Night Shift Differential (Labor Code, Art. 86; Republic Act No. 10151 - Night Workers Act): Every employee shall be paid a night shift differential of not less than ten percent (10%) of their regular wage for each hour of work performed between 10:00 PM and 6:00 AM. RA 10151 further provides for health assessments and workplace safety for night workers.",
    subContent:
      "B. Rest Periods: Weekly Rest Day (Labor Code, Art. 91): Every employee is entitled to a rest period of not less than twenty-four (24) consecutive hours after every six (6) consecutive normal work days. The employer generally determines the rest day but must respect employee preference based on religious grounds. Holiday Pay (Labor Code, Art. 94): Employees are entitled to holiday pay for unworked regular holidays. If worked, higher premiums apply (e.g., 200% of the regular wage for regular holidays). Special non-working holidays have different rules.",
  },
  {
    title: "IV. Employee Benefits",
    content:
      "A. Statutory Leaves: Service Incentive Leave (Labor Code, Art. 95): Every employee who has rendered at least one (1) year of service shall be entitled to a yearly service incentive leave of five (5) days with pay. This leave is commutable to its money equivalent if unused. Maternity Leave (Republic Act No. 11210 - Expanded Maternity Leave Law): Grants 105 days of paid maternity leave for female workers in every instance of pregnancy, regardless of civil status or legitimacy of the child, with an option to extend for an additional 30 days without pay. Solo mothers get an additional 15 days paid leave. Paternity Leave (Republic Act No. 8187): Grants seven (7) days of paid leave to married male employees for the first four (4) deliveries of his legitimate spouse. Solo Parent Leave (Republic Act No. 8972 - Solo Parents' Welfare Act of 2000): Grants seven (7) working days of parental leave with pay annually to solo parents who have rendered at least one (1) year of service. VAWC Leave (Republic Act No. 9262 - Anti-Violence Against Women and Their Children Act of 2004): Grants ten (10) days of paid leave to women victims of violence as defined by the Act, in addition to other paid leaves.",
    subContent:
      "B. Mandatory Contributions: Social Security System (SSS) (Republic Act No. 11199 - Social Security Act of 2018): Mandatory social insurance program for private sector employees and their employers, providing benefits for sickness, maternity, disability, retirement, and death. Philippine Health Insurance Corporation (PhilHealth) (Republic Act No. 7875 - National Health Insurance Act of 1995, as amended): Mandatory health insurance program for all Filipinos, providing universal health care coverage. Home Development Mutual Fund (Pag-IBIG Fund) (Republic Act No. 9679 - Home Development Mutual Fund Law of 2009): Mandatory national savings program and housing finance for all covered employees.",
  },
  {
    title: "V. Termination of Employment",
    content:
      "Just Causes (Labor Code, Art. 297 [formerly Art. 282]): Grounds for termination due to an employee's fault or culpability (e.g., serious misconduct, willful disobedience, gross and habitual neglect of duties, fraud, commission of a crime). Authorized Causes (Labor Code, Arts. 298-299 [formerly Arts. 283-284]): Grounds for termination not due to the employee's fault (e.g., installation of labor-saving devices, redundancy, retrenchment, cessation of business, disease). Separation pay is generally required for authorized causes.",
    subContent:
      "Due Process: For Just Causes: Requires a 'two-notice rule' (1. Notice of intent to dismiss with grounds, giving employee time to explain; 2. Hearing/conference for employee to present defense; 3. Notice of decision to dismiss). For Authorized Causes: Requires a written notice to both the employee and the DOLE at least 30 days before the effective date of termination.",
  },
  {
    title: "VI. Special Groups of Workers",
    content:
      "Kasambahay (Republic Act No. 10361 - Domestic Workers Act or 'Kasambahay Law'): Provides specific rights and standards for domestic workers, including minimum wage, 24-hour rest day, mandatory SSS/PhilHealth/Pag-IBIG coverage, written employment contract, and prohibition of debt bondage.",
    subContent:
      "Women Workers (Labor Code, Arts. 130-138; Republic Act No. 9710 - Magna Carta of Women): Prohibits discrimination against women in employment, including discrimination based on marriage, pregnancy, or sex. The Magna Carta of Women further ensures the full protection of women's rights in all spheres, including employment, granting special leave benefits for gynecological disorders (two months with full pay, if applicable). Minors (Labor Code, Arts. 139-140): Sets the minimum employable age at 15 years old. Children below 15 are generally not allowed to work, except under specific circumstances (e.g., direct supervision of parents in certain activities, provided it does not interfere with schooling). Protections are in place for working children aged 15-17.",
  },
];

export default function GuidePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Understanding the Philippine Labor Code
        </h1>
        <p className="text-muted-foreground mb-8">
          This section provides a simplified guide to the fundamental principles
          and key provisions of the Labor Code of the Philippines (Presidential
          Decree No. 442, as amended), along with other significant
          labor-related Republic Acts and Department Orders. This is not a
          substitute for legal advice, but a tool for general understanding and
          initial compliance assessment.
        </p>
        <div className="space-y-6">
          {guideSections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{section.content}</p>
                {section.subContent && (
                  <p className="text-muted-foreground mt-4">
                    {section.subContent}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
