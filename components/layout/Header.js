import Link from "next/link";
import Image from "next/image";

import logo from "../../public/assets/images/logo.png";

const menu = [
  { label: "Menu", href: "/menu" },
  { label: "Videos", href: "/videos" },
  { label: "Jobs", href: "/jobs" },
];

export const Header = () => {
  return (
    <header className="py-6 [ bg-white shadow-sm ]">
      <div className="wrapper [ flex items-center justify-between ]">
        <Link href="/" title="Go to Homepage of Nobel Cafe">
          <a>
            <Image
              src={logo}
              alt="Render of the Nobel Cafe logo"
              width={200}
              height={33}
            />
          </a>
        </Link>

        <nav className="space-x-4">
          {menu.map(({ label, href }) => (
            <Link href={href} key={href}>
              <a className="text-sm tracking-wider uppercase font-bold hover:text-green-500">
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
