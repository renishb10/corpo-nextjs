import Hero from '@/components/Hero';
import imgPath from 'public/performance.jpg';

export default function Performance() {
  return (
    <div className="text-white">
      <Hero
        imgAlt="Welding"
        imgPath={imgPath}
        title="We serve high performance applications"
      />
    </div>
  );
}
