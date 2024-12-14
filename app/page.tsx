// app/page.tsx
import Main from '../components/Main';
import '../styles/Home.module.css'; // Home-specific styles (optional)

export default function Home() {
  return (
    <div className="home-page">
      <Main />
    </div>
  );
}
