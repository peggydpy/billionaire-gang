export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', borderBottom: '1px solid #ddd' }}>
  <h2 style={{ margin: 0 }}>Billionaire Gang Nonprofit</h2>
  <nav>
    <ul style={{ display: 'flex', gap: '20px', margin: 0, padding: 0, listStyle: 'none' }}>
      <li><a href="#about">About</a></li>
      <li><a href="#mission">Mission</a></li>
      <li><a href="#team">Team</a></li>
    </ul>
  </nav>
</header>

        {children}
      </body>
    </html>
  );
}
