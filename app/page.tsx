// app/page.tsx
import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Breadcrumb />
      <div className="content">
        <h2>About Our Services</h2>
        <p>Here you can add more content to your homepage...</p>
      </div>
    </div>
  );
}
