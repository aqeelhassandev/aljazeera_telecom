import { Alexandria } from "next/font/google";
import NotFoundContent from "@/components/NotFoundContent";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <html lang="en" className={`${alexandria.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <NotFoundContent />
      </body>
    </html>
  );
}
