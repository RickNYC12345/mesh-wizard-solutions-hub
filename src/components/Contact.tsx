import { useState, useRef } from "react";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Form validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s\-']+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  company: z.string()
    .max(100, "Company name must be less than 100 characters")
    .regex(/^[a-zA-Z0-9\s\-&.,']+$/, "Company name contains invalid characters")
    .optional(),
  project: z.string().optional(),
  industry: z.string().optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
});

// Input sanitization function
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    industry: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const { toast } = useToast();
  const submitTimeoutRef = useRef<NodeJS.Timeout>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting - prevent submissions within 30 seconds
    const now = Date.now();
    if (now - lastSubmission < 30000) {
      toast({
        title: "Please wait",
        description: "You can only submit once every 30 seconds.",
        variant: "destructive",
      });
      return;
    }
    
    // Clear previous timeout
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }
    
    // Validate form data
    try {
      const validatedData = contactSchema.parse({
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        project: formData.project || undefined,
        industry: formData.industry || undefined,
        message: formData.message
      });
      
      setErrors({});
      setIsSubmitting(true);
      setLastSubmission(now);
      
      // Additional security checks
      const hasInvalidContent = Object.values(validatedData).some(value => 
        value && (
          value.includes('<script>') ||
          value.includes('javascript:') ||
          value.includes('data:') ||
          value.length > 5000
        )
      );
      
      if (hasInvalidContent) {
        throw new Error("Invalid content detected");
      }
      
      // Simulate form submission with timeout
      submitTimeoutRef.current = setTimeout(async () => {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours to discuss your project.",
        });
        
        setFormData({
          name: "",
          email: "",
          company: "",
          project: "",
          industry: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 2000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "There was an error processing your request. Please try again.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  };

  const industries = [
    "Industrial Monitoring",
    "Smart Agriculture",
    "Smart Buildings",
    "Environmental Monitoring",
    "Healthcare & Wellness",
    "Asset Tracking",
    "Other"
  ];

  const projectTypes = [
    "New IoT System",
    "Existing System Upgrade",
    "Consulting & Planning",
    "Maintenance & Support",
    "Proof of Concept",
    "Other"
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Start Your Project
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your operations with ESP-NOW mesh networking? 
            Let's discuss your requirements and create a custom solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">contact@espnow-solutions.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/20 rounded-full">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Remote & On-site Services</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accent/20 rounded-full">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Why Choose ESP-NOW?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Direct device-to-device communication without Wi-Fi infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Ultra-low power consumption ideal for battery-operated devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Self-healing mesh networks with automatic node discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">Secure encrypted communication with customizable protocols</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      maxLength={50}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      maxLength={100}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    maxLength={100}
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Description *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements, number of devices, coverage area, specific challenges, and timeline..."
                    maxLength={2000}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    <p className="text-sm text-muted-foreground ml-auto">
                      {formData.message.length}/2000 characters
                    </p>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full gradient-mesh text-primary-foreground shadow-glow transition-smooth hover:shadow-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}