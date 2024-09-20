import Image from "next/image";
import logoImage from "@/public/assets/Logo.svg";
import userImage from "@/public/assets/User.svg";
import menuImage from "@/public/assets/Menu.svg";

interface IProps {
  title: string;
}
const navbarLinks: IProps[] = [
  {
    title: "Features",
  },
  {
    title: "Pricing",
  },
  {
    title: "Enterprise",
  },
  {
    title: "Careers",
  },
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={logoImage} alt="logo" />

        <div className="hidden gap-x-14 pl-[74px] lg:flex">
          {navbarLinks.map((item, i) => (
            <p className="font-medium text-[#36485C]" key={i}>
              {item.title}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <p className="hidden pr-14 font-medium text-[#36485C] lg:block">
          Open an Account
        </p>

        <div className="flex items-center gap-x-2">
          <Image src={userImage} alt="user_profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign In
          </span>
        </div>

        <Image src={menuImage} alt="menu_icon" className="lg:hidden" />
      </div>
    </nav>
  );
}
