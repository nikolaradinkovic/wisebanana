import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex items-center gap-3">
        <Image
          src="/logo1.png"
          alt="Wise Banana Logo"
          width={44}
          height={44}
        />

        <span className="text-2xl font-bold tracking-tight text-black">
          Wise Banana
        </span>
      </div>

      <div className="flex items-center gap-10 text-[15px] font-medium text-gray-600">
        <a className="transition hover:text-black" href="#">
          Products
        </a>

        <a className="transition hover:text-black" href="#">
          About
        </a>

        <a className="transition hover:text-black" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
}