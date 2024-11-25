import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="p-4 md:p-12" style={{backgroundImage: `url('/bg.png')`, backgroundSize: 'cover', width: '100vw', backgroundPosition: 'center', height: '100vh'}}>
         <section className="py-10 md:py-20" >
      <div className="mx-auto max-w-3xl md:max-w-4xl space-y-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-yellow-400">FAQs</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-white text-lg md:text-xl hover:text-white/90 text-left">
              How do I get a Referral Code?
            </AccordionTrigger>
            <AccordionContent className= " text-lg md:text-xl text-gray-400">
              To get your referral code, simply connect your wallet and visit your profile section. Your unique referral code will be displayed there, ready to share with others.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-white text-lg md:text-xl hover:text-white/90 text-left">
              Do I get rewarded in tokens or ETH when I refer buyers?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-lg md:text-xl">
              You receive your rewards in ETH instantly once someone you refer makes a transaction!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-white hover:text-white/90 text-left text-lg md:text-xl">
              How do I get a Referral Code?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-lg md:text-xl">
              To get your referral code, simply connect your wallet and visit your profile section. Your unique referral code will be displayed there, ready to share with others.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
         </section>
    </div>
  )
}

