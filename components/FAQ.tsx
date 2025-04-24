import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    id: "item-1",
    question: "We connect our customers with the best?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "item-2",
    question: "Android research & development rockstar?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  // Add more items if needed
]

export default function FAQ() {
  return (
    <section className="py-[124px]">
      <div className="container mx-auto px-14">
        <div className="mb-14">
          <Image
            src="/images/office.png" // Replace with actual image path
            alt="Office environment"
            width={1100}
            height={425}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-x-[100px]">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-normal leading-[56px] text-black max-w-[493px]">
              We connect our customers with the best, and help them keep up-and stay open.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-silver-sand py-4">
                  <AccordionTrigger className="text-xl leading-8 text-black hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-silver-sand pt-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}