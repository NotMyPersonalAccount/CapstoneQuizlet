import "./globals.css";
import { ScoringProvider } from "./ScoringContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScoringProvider>
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    </ScoringProvider>
  );
}
