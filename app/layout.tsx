// app/layout.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/layout.module.css'; // Import the layout-specific styles

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You can add custom meta tags, title, and other head elements here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next.js App</title>
      </head>
      <body>
        <div className="layout-container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
