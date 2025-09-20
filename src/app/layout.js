"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", lineHeight: 1.6 }}>
        
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 40px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2 style={{ margin: 0 }}>Billionaire Gang Nonprofit</h2>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "20px",
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

        {/* Sections */}
        <main style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
          <section id="about" style={{ marginBottom: "60px" }}>
            <h3>About</h3>
            <p>Edit this section with your About content.</p>
          </section>

          <section id="mission" style={{ marginBottom: "60px" }}>
            <h3>Mission</h3>
            <p>Edit this section with your Mission content.</p>
          </section>

          <section id="team" style={{ marginBottom: "60px" }}>
            <h3>Team</h3>
            <p>Edit this section with your Team content.</p>
          </section>
        </main>

      </body>
    </html>
  );
}
