import Hero from '@/components/Hero';
import imgPath from 'public/reliability.jpg';

export default function Reliability() {
  return (
    <div className="text-white">
      <Hero
        imgAlt="Welding"
        imgPath={imgPath}
        title="Super High Reliability Hosting"
      />
    </div>
  );
}
