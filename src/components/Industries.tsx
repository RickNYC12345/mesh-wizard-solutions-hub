import { Factory, Sprout, Home, Thermometer, Heart, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Industrial Monitoring",
      description: "Real-time machine health tracking, predictive maintenance, and environmental monitoring in manufacturing facilities.",
      applications: ["Machine health sensors", "Temperature monitoring", "Vibration analysis", "Predictive maintenance"],
      color: "bg-blue-500/20 text-blue-600"
    },
    {
      icon: Sprout,
      title: "Smart Agriculture",
      description: "Precision farming solutions with soil monitoring, irrigation control, and livestock tracking across large agricultural areas.",
      applications: ["Soil moisture sensors", "Irrigation automation", "Livestock tracking", "Weather monitoring"],
      color: "bg-green-500/20 text-green-600"
    },
    {
      icon: Home,
      title: "Smart Buildings",
      description: "Building automation systems for lighting, HVAC, security, and energy management without centralized infrastructure.",
      applications: ["Lighting control", "HVAC automation", "Security systems", "Energy management"],
      color: "bg-purple-500/20 text-purple-600"
    },
    {
      icon: Thermometer,
      title: "Environmental Monitoring",
      description: "Remote sensing networks for weather stations, pollution monitoring, and environmental research in challenging locations.",
      applications: ["Weather stations", "Air quality monitoring", "Water quality sensors", "Wildlife tracking"],
      color: "bg-teal-500/20 text-teal-600"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Patient monitoring systems, wearable devices, and healthcare facility networks for improved care delivery.",
      applications: ["Vital signs monitoring", "Fall detection", "Medication reminders", "Emergency alerts"],
      color: "bg-red-500/20 text-red-600"
    },
    {
      icon: Package,
      title: "Asset Tracking",
      description: "Inventory management, logistics tracking, and asset monitoring solutions for warehouses and supply chains.",
      applications: ["Inventory tracking", "Fleet management", "Supply chain visibility", "Warehouse automation"],
      color: "bg-orange-500/20 text-orange-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industry Applications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ESP-NOW mesh networks are transforming industries across the globe. 
            Discover how our solutions can revolutionize your sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-smooth border-border/50 bg-card/80 backdrop-blur-sm network-node animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full ${industry.color} transition-smooth`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Key Applications
                  </h4>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">Bytes per message</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1km+</div>
            <div className="text-muted-foreground">Communication range</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20</div>
            <div className="text-muted-foreground">Devices per network</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5µA</div>
            <div className="text-muted-foreground">Deep sleep current</div>
          </div>
        </div>
      </div>
    </section>
  );
}