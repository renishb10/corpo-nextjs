import Link from 'next/link';

type Props = {};
const Header = (props: Props) => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <div className="text-3xl font-bold">
          <Link href="/">Home</Link>
        </div>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;
