import { Code, Cpu, Radio, Settings, Wrench, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: Radio,
      title: "ESP-NOW Mesh Development",
      description: "Custom mesh networking solutions with ESP32 devices for reliable, long-distance communication without traditional Wi-Fi infrastructure.",
      features: ["Multi-node topology", "Auto-healing networks", "250-byte message capacity", "Low-latency communication"]
    },
    {
      icon: Cpu,
      title: "IoT System Integration",
      description: "Complete IoT ecosystem development integrating ESP-NOW with sensors, actuators, and cloud platforms for comprehensive monitoring solutions.",
      features: ["Sensor integration", "Cloud connectivity", "Real-time dashboards", "Data analytics"]
    },
    {
      icon: Code,
      title: "Firmware Development",
      description: "Custom firmware solutions using ESP-IDF and Arduino frameworks, optimized for your specific use case and hardware requirements.",
      features: ["ESP-IDF expertise", "Arduino compatibility", "OTA updates", "Power optimization"]
    },
    {
      icon: Settings,
      title: "System Configuration",
      description: "Professional setup and configuration of ESP-NOW networks, including device pairing, security implementation, and performance optimization.",
      features: ["Network setup", "Security protocols", "Performance tuning", "Troubleshooting"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing technical support, system monitoring, and maintenance services to ensure your IoT network operates at peak performance.",
      features: ["24/7 monitoring", "Remote diagnostics", "Performance reports", "Emergency support"]
    },
    {
      icon: Globe,
      title: "Consulting & Strategy",
      description: "Expert consultation on IoT architecture, technology selection, and strategic planning for your digital transformation initiatives.",
      features: ["Architecture design", "Technology assessment", "Cost optimization", "Future planning"]
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Specialized Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive ESP-NOW and IoT solutions tailored to your specific needs. 
            From concept to deployment, we deliver robust mesh networking systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-smooth border-border/50 bg-card/80 backdrop-blur-sm network-node"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-smooth">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}