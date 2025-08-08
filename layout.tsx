
export const metadata = { title: "Frontend App", description: "AI-built frontend starter" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 underline">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
