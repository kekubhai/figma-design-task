import { DollarSign, Shield, Workflow, Layers } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: DollarSign,
      title: "Cheapest TXs",
      description: "Exchange your favorite crypto currencies at the cheapest possible transaction price"
    },
    {
      icon: Shield,
      title: "CerTIK",
      description: "We are fully audited by CertiK, the leading security-focused ranking platform to"
    },
    {
      icon: Workflow,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets"
    },
    {
      icon: Layers,
      title: "CrossDex Support",
      description: "Exchange your favorite crypto currencies at the cheapest possible transaction price"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 "  >
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Features</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
             {features.map((feature, index) => (
            <Card key={index} className="bg-[#0F1729] border-gray-800">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-yellow-400 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


