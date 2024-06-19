import Hero from '@/components/Hero';
import imgPath from 'public/scale.jpg';

export default function Scale() {
  return (
    <div className="text-white">
      <Hero
        imgAlt="Steel Factory"
        imgPath={imgPath}
        title="Scale your app to Infinity"
      />
    </div>
  );
}
