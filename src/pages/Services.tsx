import { Card } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Employee Management",
      description: "Comprehensive tools for managing your workforce efficiently",
      icon: "👥"
    },
    {
      title: "Project Tracking",
      description: "Track and manage projects with real-time updates",
      icon: "📊"
    },
    {
      title: "Time Management",
      description: "Advanced time tracking and scheduling solutions",
      icon: "⏰"
    },
    {
      title: "Analytics & Reports",
      description: "Detailed insights and customizable reports",
      icon: "📈"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
