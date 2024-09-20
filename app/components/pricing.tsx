import Image from "next/image";
import CheckIcon from "@/public/assets/check.svg";

export default function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-center text-2xl font-medium text-[#172026] lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pb-[40px] pt-[16px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-x-[24px] gap-y-6 lg:flex-row">
        <div className="flex w-full flex-col rounded-[8px] bg-[#F5F4FF] p-6 lg:justify-between">
          <div>
            <h3 className="text-[18px] font-medium text-[#4328EB] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]">
            Start Trial
          </button>
        </div>

        <div className="flex w-full flex-col rounded-[8px] bg-[#4328EB] p-6">
          <div>
            <h3 className="text-[18px] font-medium text-white lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              500$<span className="text-[#F4F8FA]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={CheckIcon} alt="included" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]">
            Get Started
          </button>
        </div>

        <div className="flex w-full flex-col rounded-[8px] bg-[#F5F4FF] p-6 lg:justify-between">
          <div>
            <h3 className="text-[18px] font-medium text-[#4328EB] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for big companies
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>

            <p className="pt-4 text-[16px] text-[#36485C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="pt-2 text-[16px] text-[#36485C]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
