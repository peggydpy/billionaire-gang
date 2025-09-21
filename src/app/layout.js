"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.png"
              alt="Billionaire Gang Logo"
              style={{ height: "60px", marginRight: "15px" }}
            />
            <h1 style={{ fontSize: "22px", margin: 0 }}>
              Billionaire Gang Nonprofit
            </h1>
          </div>

          <nav>
            <ul
              style={{
                display: "flex",
                gap: "30px",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li><a href="#about" style={linkStyle}>About</a></li>
              <li><a href="#mission" style={linkStyle}>Mission</a></li>
              <li><a href="#team" style={linkStyle}>Team</a></li>
            </ul>
          </nav>
        </header>

        {/* ABOUT SECTION */}
        <section
          id="about"
          style={{
            padding: "80px 20px",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
          }}
        >
          <h2 style={headingStyle}>About</h2>
          <p style={paragraphStyle}>
            Billionaire Gang Nonprofit fuels youth and strengthens communities
            through wellness and action — where fitness meets wellness, and youth
            always win.
          </p>
        </section>

        {/* MISSION SECTION */}
        <section
          id="mission"
          style={{
            padding: "80px 20px",
            backgroundColor: "#e6f0ff",
            textAlign: "center",
          }}
        >
          <h2 style={headingStyle}>Mission</h2>
          <p style={paragraphStyle}>
            Creating a Memphis that is safe, healthy, and rewarding for the next
            generation.
          </p>
        </section>

        {/* TEAM SECTION */}
        <section
          id="team"
          style={{
            padding: "80px 20px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <h2 style={headingStyle}>Team</h2>
          <p style={paragraphStyle}>
            Meet the passionate individuals working together to make Memphis thrive.
          </p>
        </section>

        {children}
      </body>
    </html>
  );
}

/* Reusable Styles */
const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "16px",
  fontWeight: "500",
};

const headingStyle = {
  fontSize: "28px",
  marginBottom: "20px",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  maxWidth: "700px",
  margin: "0 auto",
  color: "#444",
};


