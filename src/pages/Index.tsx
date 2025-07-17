import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="industries">
          <Industries />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <footer className="bg-card/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/20 rounded-full">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ESP-NOW Solutions
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transforming industries with custom ESP-NOW mesh networking solutions. 
                Connecting devices across long distances with reliable, low-power communication.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2025 ESP-NOW Solutions. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mesh Development</li>
                <li>System Integration</li>
                <li>Firmware Development</li>
                <li>Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Industrial</li>
                <li>Agriculture</li>
                <li>Smart Buildings</li>
                <li>Healthcare</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
