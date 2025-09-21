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
            <a href="#about" style={{ margin: "0 10px" }}>About</a>
            <a href="#mission" style={{ margin: "0 10px" }}>Mission</a>
            <a href="#team" style={{ margin: "0 10px" }}>Team</a>
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

            {/* Mission and Team sections can go here */}
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}


