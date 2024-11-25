import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="   md:p-12" style={{backgroundImage: `url('/bg.png')`, backgroundSize: 'cover',   width:'140vh', backgroundPosition: 'center', height: '70vh'}}>
         <section className="py-20" >
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="text-center text-3xl font-bold text-yellow-400">FAQs</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-white text-xl hover:text-white/90 text-left">
              How do I get a Referral Code?
            </AccordionTrigger>
            <AccordionContent className= " text-xl text-gray-400">
              To get your referral code, simply connect your wallet and visit your profile section. Your unique referral code will be displayed there, ready to share with others.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-white text-xl hover:text-white/90 text-left">
              Do I get rewarded in tokens or ETH when I refer buyers?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-xl">
              You receive your rewards in ETH instantly once someone you refer makes a transaction!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-white hover:text-white/90 text-left text-xl">
              How do I get a Referral Code?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-xl">
              To get your referral code, simply connect your wallet and visit your profile section. Your unique referral code will be displayed there, ready to share with others.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
         </section>
    </div>
  )
}

