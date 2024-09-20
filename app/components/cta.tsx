import Image from "next/image";
import ArrowIcon from "@/public/assets/arrow.png";

export default function CTA() {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 px-[32px] py-[56px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-[32px] font-medium leading-[64px] text-white lg:text-[56px]">
        Monitor your website like a pro
      </h1>
      <p className="pt-6 text-white lg:pt-[48px] lg:text-[18px]">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex w-full flex-col items-center gap-x-[40px] lg:mt-[56px] lg:flex-row lg:justify-center">
        <button className="w-fit rounded-[4px] bg-white px-[32px] py-[16px] font-medium text-pink-500">
          Try for free
        </button>

        <button className="mt-[32px] flex w-full items-center justify-center gap-x-3 font-medium text-white lg:mt-0 lg:w-fit">
          Contact Sales{" "}
          <span>
            <Image src={ArrowIcon} alt="Learn More" />
          </span>
        </button>
      </div>
    </div>
  );
}
