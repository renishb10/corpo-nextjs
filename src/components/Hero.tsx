import Image, { StaticImageData } from 'next/image';

type Props = {
  imgPath: StaticImageData;
  imgAlt: string;
  title: string;
};
const Hero = (props: Props) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgPath}
          fill
          style={{ objectFit: 'cover' }}
          alt={props.imgAlt}
        />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
};
export default Hero;
