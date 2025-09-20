"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2 style={{ margin: 0 }}>Billionaire Gang Nonprofit</h2>
          <nav>
            <ul
              style={{
                display: "flex",
                gap: "40px",
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

        {/* Page Sections */}
        <main style={{ padding: "40px" }}>
          <section id="about" style={{ marginBottom: "80px" }}>
            <h3>About</h3>
            <p>Write a simple description about Billionaire Gang Nonprofit here.</p>
          </section>

          <section id="mission" style={{ marginBottom: "80px" }}>
            <h3>Mission</h3>
            <p>A vibrant, equitable Memphis fueled by youth, wellness, and community action.</p>
          </section>

          <section id="team" style={{ marginBottom: "80px" }}>
            <h3>Team</h3>
            <p>Introduce your team members here.</p>
          </section>
        </main>

        {children}
      </body>
    </html>
  );
}
