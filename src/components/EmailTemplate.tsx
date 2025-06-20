import * as React from "react";

interface EmailTemplateProps {
  answers: (string | null)[];
  questions: {
    section: string;
    question: string;
    reference: string;
  }[];
  theme?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  answers,
  questions,
  theme = "light",
}) => {
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

  const isDark = theme === "dark";

  const bodyStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: isDark ? '#1a202c' : '#f7fafc',
    color: isDark ? '#e2e8f0' : '#1a202c',
    padding: '20px',
    lineHeight: '1.6',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: isDark ? '#2d3748' : '#ffffff',
    border: `1px solid ${isDark ? '#4a5568' : '#e2e8f0'}`,
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: isDark ? '#2d3748' : '#edf2f7',
    padding: '20px',
    textAlign: 'center',
    borderBottom: `1px solid ${isDark ? '#4a5568' : '#e2e8f0'}`,
  };

  const h1Style: React.CSSProperties = {
    color: isDark ? '#e5b800' : '#b7791f', // Gold
    margin: '0',
  };
  
  const contentStyle: React.CSSProperties = {
    padding: '20px',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: isDark ? '#4a5568' : '#f7fafc',
    borderRadius: '5px',
  };

  const footerStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '10px',
    textAlign: 'center',
    fontSize: '12px',
    color: isDark ? '#a0aec0' : '#718096',
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={h1Style}>Labor Code Compliance Results</h1>
        </div>
        <div style={contentStyle}>
          <div style={sectionStyle}>
            <h2 style={{ color: '#e5b800', borderBottom: '1px solid #e5b800', paddingBottom: '5px' }}>Overall Summary</h2>
            <p><strong>Compliance Score:</strong> <span style={{ color: '#e5b800', fontSize: '18px' }}>{score.toFixed(2)}%</span></p>
            <p><strong>Status:</strong> {status}</p>
          </div>
          
          <h2 style={{ color: '#e5b800', borderBottom: '1px solid #e5b800', paddingBottom: '5px', marginTop: '30px' }}>Detailed Breakdown</h2>
          {questions.map((question, index) => (
            <div key={index} style={sectionStyle}>
              <p><strong>Question {index + 1}:</strong> {question.question}</p>
              <p><strong>Your Answer:</strong> <span style={{ textTransform: 'capitalize', fontWeight: 'bold', color: answers[index] === 'yes' ? '#48bb78' : '#f56565' }}>{answers[index] || "Not Answered"}</span></p>
              <p style={{ fontSize: '12px', color: '#a0aec0' }}><em>Reference: {question.reference}</em></p>
            </div>
          ))}
        </div>
        <div style={footerStyle}>
          <p>This is an automated report. For legal advice, please consult a qualified professional.</p>
          <p>&copy; {new Date().getFullYear()} PH Labor Code Compliance</p>
        </div>
      </div>
    </div>
  );
};
