import rightIcon from "@/public/assets/blue-button.svg";
import gradient from "@/public/assets/Gradient.svg";
import heroImage from "@/public/assets/Image.svg";
import googleImage from "@/public/assets/Google.svg";
import slackImage from "@/public/assets/Slack.svg";
import trustPilot from "@/public/assets/Trustpilot.svg";
import cnnImage from "@/public/assets/CNN.svg";
import clutchImage from "@/public/assets/Clutch.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-5 lg:px-[280px]">
        <h1 className="text-center text-[32px] font-medium leading-[40px] text-[#172026] lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>

        <p className="pt-6 text-center text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>

        <div className="flex w-full justify-center gap-x-6 pt-8">
          <button className="w-1/2 rounded-[4px] bg-[#4328EB] px-8 py-4 text-white lg:w-fit">
            Try for free
          </button>
          <button className="flex w-1/2 items-center justify-center gap-x-2 text-[#4328EB] lg:w-fit">
            View Pricing
            <span>
              <Image src={rightIcon} alt="icon" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={gradient}
          alt="gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={heroImage}
            alt="hero_image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

          <div className="flex w-full flex-col items-center px-5 align-middle lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-center text-white lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center lg:grid-cols-5">
              <Image src={googleImage} alt="google_logo" />
              <Image src={slackImage} alt="slack_logo" />
              <Image src={trustPilot} alt="trust_logo" />
              <Image src={cnnImage} alt="cnn_logo" />
              <Image src={clutchImage} alt="clutch_logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
