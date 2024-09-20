"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import PlusIcon from "@/public/assets/Plus.svg";

interface IProps {
  question: string;
  answer: string;
}
const items: IProps[] = [
  {
    question: "Lorem ipsum dolor, sit amet consectetur",
    answer:
      "ipsum dolor, sit amet consectetur adipisicing elit. Iusto, qua Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores!",
  },
  {
    question: "Lorem ipsum dolor, sit amet consectetur",
    answer:
      "ipsum dolor, sit amet consectetur adipisicing elit. Iusto, qua Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores!",
  },
  {
    question: "Lorem ipsum dolor, sit amet consectetur",
    answer:
      "ipsum dolor, sit amet consectetur adipisicing elit. Iusto, qua Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores!",
  },
  {
    question: "Lorem ipsum dolor, sit amet consectetur",
    answer:
      "ipsum dolor, sit amet consectetur adipisicing elit. Iusto, qua Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores!",
  },
];

export default function FAQ() {
  return (
    <div className="flex w-full flex-col py-12 lg:flex-row lg:gap-x-6 lg:py-[60px]">
      <div className="lg:w-1/3 lg:py-8 lg:pr-14">
        <h2 className="text-[14px] font-medium text-[#EB2891]">
          Frequently Asked Questions
        </h2>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let&apos;s clarify some of your questions.
        </h1>
        <p className="pb-6 text-[#36485C]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          maiores!
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="rounded-[8px] bg-[#E3F1FF] p-[16px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={PlusIcon}
                        alt="See more"
                        className="h-10 w-10 lg:h-6 lg:w-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
