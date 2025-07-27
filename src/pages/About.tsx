import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "20+ years of experience in enterprise software"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Expert in AI and machine learning technologies"
    },
    {
      name: "Mike Wilson",
      role: "Head of Product",
      bio: "Passionate about creating intuitive user experiences"
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">About Promptix</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're on a mission to revolutionize employee management and workplace productivity through innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-muted-foreground">
            To empower organizations with tools that enhance productivity and foster better workplace management.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-muted-foreground">
            To become the leading platform for employee management and workplace optimization globally.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-muted-foreground">
            Innovation, transparency, and commitment to excellence in everything we do.
          </p>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-primary mb-2">{member.role}</p>
            <p className="text-muted-foreground">{member.bio}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
