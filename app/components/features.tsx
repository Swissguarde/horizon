import featureImage from "@/public/assets/feature-1.svg";
import featureBImage from "@/public/assets/feature-2.svg";
import featureCImage from "@/public/assets/feature-3.svg";
import check from "@/public/assets/check.svg";
import rightIcon from "@/public/assets/blue-button.svg";
import rightGreenIcon from "@/public/assets/green-button.svg";
import rightPurpleIcon from "@/public/assets/green-button.svg";
import Image from "next/image";

export default function Features() {
  return (
    <div className="flex flex-col gap-y-14 py-14 lg:gap-y-[80px] lg:py-[120px]">
      <div className="flex flex-col gap-x-6 lg:flex-row-reverse">
        <Image
          src={featureImage}
          alt="features_image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-14 lg:pr-14">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={featureImage}
            className="pt-6 sm:hidden"
            alt="feature_image"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <span>
              <Image src={rightIcon} alt="icon" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={featureBImage}
          alt="features_image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-14 lg:pl-14">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image
            src={featureBImage}
            className="pt-6 sm:hidden"
            alt="feature_image"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="checkmark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={check} alt="checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-6 font-medium text-[#00A424] lg:text-[18px]">
            Learn More
            <span>
              <Image src={rightGreenIcon} alt="icon" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 lg:flex-row-reverse">
        <Image
          src={featureCImage}
          alt="features_image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-14 lg:pr-14">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your site&apos;s new subscribers
          </h1>
          <Image
            src={featureImage}
            className="pt-6 sm:hidden"
            alt="feature_image"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird&apos;s eye view with our
            customizable dashboard.
          </p>

          <div className="flex w-full gap-x-6">
            <div className="w-1/2 flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#5F7896]">Lorem ipsum dolor sit</p>
            </div>
            <div className="w-1/2 flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">5k+</h3>
              <p className="text-[#5F7896]">Eligendi obcaecati atque.</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
            Learn More
            <span>
              <Image src={rightPurpleIcon} alt="icon" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
