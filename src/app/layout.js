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

        {/* Widget Area */}
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              width: "600px",
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              overflowY: "auto",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <section id="about" style={{ marginBottom: "30px" }}>
              <h3>About</h3>
              <p>Edit this section with your About content...</p>
            </section>

            <section id="mission" style={{ marginBottom: "30px" }}>
              <h3>Mission</h3>
              <p>Edit this section with your Mission content...</p>
            </section>

            <section id="team">
              <h3>Team</h3>
              <p>Edit this section with your Team content...</p>
            </section>
          </div>
        </main>

        {children}
      </body>
    </html>
  );
}
