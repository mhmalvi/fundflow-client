import "../globals.css";

export const metadata = {
  title: "payment-Crowd Funding",
  description: "Crowd Funding - Quadque",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
