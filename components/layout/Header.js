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
    <header className="flex items-center justify-between py-6">
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
            <a className="font-bold hover:text-purple-400">{label}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
};
