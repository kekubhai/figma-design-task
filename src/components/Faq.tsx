import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function Faq() {
    const faqs = [
      {
        question: "How do I get a Referral Code?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam."
      },
      {
        question: "Do I get rewarded in tokens or ETH when I refer buyers?",
        answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
      },
      {
        question: "How do I get a Referral Code?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam."
      }
    ]
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-yellow-400">FAQs</span>
          </h2>
          
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  