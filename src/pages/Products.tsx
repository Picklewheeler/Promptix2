import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const products = [
    {
      title: "Basic Plan",
      price: "$29",
      features: ["Up to 5 users", "Basic reporting", "Task management", "Email support"],
      recommended: false
    },
    {
      title: "Pro Plan",
      price: "$79",
      features: ["Up to 20 users", "Advanced reporting", "Project management", "24/7 support"],
      recommended: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: ["Unlimited users", "Custom features", "Dedicated support", "Custom integrations"],
      recommended: false
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className={`p-6 ${product.recommended ? 'border-primary border-2' : ''}`}>
            {product.recommended && (
              <div className="text-primary text-sm font-semibold mb-2">Recommended</div>
            )}
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <div className="text-3xl font-bold mb-4">{product.price}</div>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">Get Started</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
