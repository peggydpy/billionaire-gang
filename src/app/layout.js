"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 20px", // tighter padding
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2 style={{ margin: 0 }}>Billionaire Gang Nonprofit</h2>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "20px", // less space between links
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li><a href="#about">About</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </nav>
        </header>

        <main
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            lineHeight: "1.4",
          }}
        >
          <section id="about" style={{ marginBottom: "40px" }}>
            <h3>About</h3>
            <p>Edit this section with your About content.</p>
          </section>

          <section id="mission" style={{ marginBottom: "40px" }}>
            <h3>Mission</h3>
            <p>Edit this section with your Mission content.</p>
          </section>

          <section id="team" style={{ marginBottom: "40px" }}>
            <h3>Team</h3>
            <p>Edit this section with your Team content.</p>
          </section>
        </main>
      </body>
    </html>
  );
}
