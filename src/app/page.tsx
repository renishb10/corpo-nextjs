import Hero from '@/components/Hero';
import imgPath from 'public/home.jpg';

export default function Home() {
  return (
    <div className="text-white">
      <Hero
        imgAlt="Car Factory"
        imgPath={imgPath}
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
