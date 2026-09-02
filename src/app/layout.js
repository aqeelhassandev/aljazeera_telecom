import "./globals.css";

export const metadata = {
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

// Pass-through root layout so [locale]/layout.js owns <html>/<body> (lang/dir).
// Global not-found and the `/` redirect page provide their own document tags.
export default function RootLayout({ children }) {
  return children;
}
