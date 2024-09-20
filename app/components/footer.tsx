import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import FacebookIcon from "@/public/assets/Facebook.svg";
import FeedIcon from "@/public/assets/Feed.svg";
import TwitterIcon from "@/public/assets/X.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-[40px] pt-[80px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" />
        <Link
          href="https://github.com/swissguarde"
          className="text-[17px] font-bold text-[#36485C]"
        >
          Swissguarde GitHub
        </Link>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={FacebookIcon} alt="Facebook" />
        <Image src={FeedIcon} alt="Feed" />
        <Image src={TwitterIcon} alt="Twitter" />
      </div>
    </div>
  );
}
