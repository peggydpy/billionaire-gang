export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
          <h2 style={{ margin: 0, textAlign: "left" }}>
            Billionaire Gang Nonprofit
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
