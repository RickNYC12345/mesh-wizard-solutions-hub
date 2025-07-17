import { ArrowRight, Network, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mesh-network.jpg";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with mesh pattern */}
      <div className="absolute inset-0 gradient-hero mesh-pattern"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ESP-NOW
              </span>
              <br />
              <span className="text-foreground">IoT Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Custom mesh networking solutions for industrial monitoring, smart agriculture, and IoT systems. 
              Connecting your devices across long distances with reliable, low-power communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="gradient-mesh text-primary-foreground shadow-glow transition-smooth hover:shadow-accent"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="network-node border-primary/30 hover:border-primary"
              >
                Learn More
              </Button>
            </div>
            
            {/* Key features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg shadow-card">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Mesh Networks</h3>
                  <p className="text-sm text-muted-foreground">Self-healing topology</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg shadow-card">
                <div className="p-2 bg-accent/20 rounded-full">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Low Power</h3>
                  <p className="text-sm text-muted-foreground">Battery efficient</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg shadow-card">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure</h3>
                  <p className="text-sm text-muted-foreground">Encrypted communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex-1 relative">
          <div className="relative animate-float">
            <img 
              src={heroImage} 
              alt="ESP-NOW Mesh Network Visualization" 
              className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Floating network nodes */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-pulse-glow"></div>
          <div className="absolute top-32 right-16 w-3 h-3 bg-accent rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-24 left-20 w-3 h-3 bg-primary rounded-full animate-pulse-glow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-16 right-12 w-4 h-4 bg-accent rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </section>
  );
}