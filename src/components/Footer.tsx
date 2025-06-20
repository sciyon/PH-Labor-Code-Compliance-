export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t mt-auto">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} PH Labor Code Compliance. All rights reserved.</p>
        <p className="text-sm mt-2">
          This web application provides general guidance and an assessment tool for informational purposes only. It is NOT a substitute for professional legal advice.
        </p>
      </div>
    </footer>
  );
}
