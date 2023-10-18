export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  );
}
