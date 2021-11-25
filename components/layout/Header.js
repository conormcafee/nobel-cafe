import Link from "next/link";
import { Logo } from "@components/misc";

const menu = [
  { label: "Christmas 2021", href: "/christmas-at-nobel" },
  { label: "Breakfast & Lunch Menu", href: "/menu" },
  { label: "Videos", href: "/videos" },
];

export const Header = ({ hasSnowFall }) => {
  const backgroundColour = hasSnowFall ? "bg-gray-700" : "bg-white";
  const textColour = hasSnowFall ? "text-white" : "text-inherit";
  const hoverTextColour = hasSnowFall
    ? "hover:text-red-400"
    : "hover:text-green-500";
  const borderColour = hasSnowFall ? "border-red-400" : "border-green-700";

  return (
    <header
      className={`sticky z-10 top-0 py-6 [ bg-white shadow-sm ][ border-t-4 ${borderColour} ][ ${backgroundColour} ${textColour} ]`}
    >
      <div className="wrapper [ flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between ]">
        <Link href="/" title="Go to Homepage of Nobel Cafe">
          <a>
            <Logo hasSnowFall={hasSnowFall} />
          </a>
        </Link>

        <nav className="space-x-4">
          {menu.map(({ label, href }) => (
            <Link href={href} key={href}>
              <a className={`text-sm font-bold ${hoverTextColour}`}>{label}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
