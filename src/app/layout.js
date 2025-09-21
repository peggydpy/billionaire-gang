"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 32px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="Billionaire Gang Logo"
              style={{ width: "70px", height: "auto" }}
            />
            <h1 style={{ fontSize: "22px", fontWeight: "700" }}>
              Billionaire Gang Nonprofit
            </h1>
          </div>

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

        <main
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div style={{ maxWidth: "800px", width: "100%" }}>
            {/* About Section */}
            <section
              id="about"
              style={{ marginBottom: "40px", textAlign: "center" }}
            >
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>
                About
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#333",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Billionaire Gang Nonprofit fuels youth and strengthens
                communities through wellness and action — where fitness meets
                wellness, and youth always win.
              </p>
            </section>

            {/* Mission Section */}
<section id="mission" style={{ marginBottom: "40px", textAlign: "center" }}>
  <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>
    Mission
  </h3>
  <p
    style={{
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "700px",
      margin: "0 auto",
    }}
  >
    Creating a Memphis that is safe, healthy, and rewarding for the next generation.
  </p>
</section>

{/* Team Section */}
<section id="team" style={{ marginBottom: "40px", textAlign: "center" }}>
  <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>
    Team
  </h3>
  <p
    style={{
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#333",
      maxWidth: "700px",
      margin: "0 auto",
    }}
  >
    Meet the people behind Billionaire Gang Nonprofit — dedicated leaders and
    community builders working together for a stronger Memphis.
  </p>
</section>


            {children}
          </div>
        </main>
      </body>
    </html>
  );
}


