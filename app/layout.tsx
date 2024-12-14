// app/layout.tsx
import Header from '../components/Header'; // Import Header component
import Breadcrumb from '../components/Breadcrumb'; // Import Breadcrumb component
import Footer from '../components/Footer'; // Optional Footer component
import './globals.css'; // Global styles (optional)

export const metadata = {
  title: 'Your Website Title',
  description: 'Description of your website.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en"> {/* No extra space here */}
      <head>
        {/* You can add metadata or links to external stylesheets here if needed */}
      </head>
      <body>
        {/* Global Header */}
        <Header />
        
        {/* Global Breadcrumb - optional */}
        <Breadcrumb />

        {/* Main Content */}
        <main>{children}</main>

        {/* Global Footer - optional */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
