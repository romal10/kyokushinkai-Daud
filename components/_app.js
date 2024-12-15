import Header from '../components/Header';  // Import Header component
import Breadcrumb from '../components/Breadcrumb';  // Import Breadcrumb component
import Footer from '../components/Footer';  // Optional Footer component
import '../styles/globals.css';  // Import global CSS
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>


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
