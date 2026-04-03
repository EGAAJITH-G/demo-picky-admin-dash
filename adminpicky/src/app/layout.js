import "./globals.css";

export const metadata = {
  title: "Picky Admin Panel",
  description: "Modern SaaS Dashboard for Picky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
