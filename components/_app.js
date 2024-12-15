import Header from '../components/Header';  // Import Header component
import Breadcrumb from '../components/Breadcrumb';  // Import Breadcrumb component
import Footer from '../components/Footer';  // Optional Footer component
import '../styles/globals.css';  // Import global CSS

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Header */}
      <Header />
      
      {/* Global Breadcrumb (optional) */}
      <Breadcrumb />
      
      {/* Main Content */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Global Footer (optional) */}
      <Footer />
    </>
  );
}

export default MyApp;
