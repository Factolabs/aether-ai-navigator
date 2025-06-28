
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, FileCheck, Circle, Star } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const handleGetStarted = () => {
    toast("Welcome! Let's get you started with ECRU AI Assistant", {
      description: "Redirecting to setup wizard...",
    });
  };

  const handleContactUs = () => {
    toast("Contact form opening...", {
      description: "We'll get back to you within 24 hours!",
    });
  };

  const features = [
    {
      title: "Multi-Source Analysis",
      description: "Processes data from multiple sources simultaneously for comprehensive insights",
      icon: <FileCheck className="w-8 h-8" />,
      color: "bg-ecru-violet"
    },
    {
      title: "Voice Typing System",
      description: "Advanced speech recognition with natural language processing capabilities",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-ecru-pink"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent conversational AI that understands context and provides personalized responses",
      icon: <Circle className="w-8 h-8" />,
      color: "bg-ecru-green"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "ECRU has transformed how our team handles complex problem-solving. The AI insights are incredible!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Data Analyst",
      content: "The multi-source analysis feature saved us hours of manual work. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Business Consultant",
      content: "The voice typing system is incredibly accurate. It's like having a personal assistant.",
      rating: 5,
      avatar: "ED"
    }
  ];

  const faqs = [
    {
      question: "How does ECRU's AI processing work?",
      answer: "ECRU uses advanced machine learning algorithms to analyze multiple data sources simultaneously, providing comprehensive insights and solutions in real-time."
    },
    {
      question: "Is my data secure with ECRU?",
      answer: "Absolutely! We use enterprise-grade encryption and follow strict data privacy protocols. Your information is never shared with third parties."
    },
    {
      question: "Can I integrate ECRU with existing tools?",
      answer: "Yes, ECRU offers seamless integration with popular business tools and platforms through our robust API system."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support, comprehensive documentation, and dedicated account managers for enterprise clients."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-ecru-violet/10 to-ecru-pink/10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2 text-sm font-poppins">
                  Virtual Assistant
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-playfair font-bold text-gray-900 leading-tight">
                  Less Chat,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecru-violet to-ecru-pink">
                    More Problem Solving
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-poppins leading-relaxed max-w-2xl">
                  Experience the future of intelligent assistance with our advanced AI that understands, analyzes, and solves complex problems across multiple data sources.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-poppins"
                  onClick={handleGetStarted}
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-poppins"
                  onClick={handleContactUs}
                >
                  Contact Us
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 font-poppins">99%</div>
                  <div className="text-sm text-gray-600 font-poppins">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 font-poppins">612+</div>
                  <div className="text-sm text-gray-600 font-poppins">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 font-poppins">15</div>
                  <div className="text-sm text-gray-600 font-poppins">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="animate-float">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-ecru-violet to-ecru-pink rounded-3xl blur-xl opacity-30"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-ecru-violet rounded-xl flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-poppins font-semibold text-gray-900">AI Assistant</div>
                          <div className="text-sm text-gray-600 font-poppins">Online</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-ecru-pink/20 rounded-2xl p-4">
                          <p className="text-sm font-poppins text-gray-800">How can I help you solve complex problems today?</p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-4 ml-8">
                          <p className="text-sm font-poppins text-gray-800">Analyze sales data from Q4</p>
                        </div>
                        <div className="bg-ecru-green/20 rounded-2xl p-4">
                          <p className="text-sm font-poppins text-gray-800">Processing multiple data sources... Analysis complete! ✅</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
              Our Intelligent AI Assistant
            </h2>
            <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
              Discover how our advanced AI processes information and transforms your workflow with intelligent problem-solving capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`${feature.color}/10 border-none hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-playfair font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 font-poppins text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Assistant Benefits */}
      <section className="py-20 bg-gradient-to-r from-ecru-violet/20 to-ecru-pink/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
                Your Intelligent Virtual Assistant
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-ecru-green rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600 font-poppins">Always ready to assist with intelligent problem-solving, any time of day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-ecru-pink rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
                    <p className="text-gray-600 font-poppins">Communicate naturally in your preferred language with advanced NLP.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-ecru-violet rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-2">Contextual Understanding</h3>
                    <p className="text-gray-600 font-poppins">Remembers conversation context for more personalized and relevant responses.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-poppins font-bold text-gray-900">Performance Metrics</h3>
                    <Badge className="bg-ecru-green text-white">+600</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-poppins text-gray-600">Response Accuracy</span>
                      <span className="font-poppins font-semibold">99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-ecru-green h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-poppins text-gray-600">Problem Resolution</span>
                      <span className="font-poppins font-semibold">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-ecru-pink h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-poppins text-gray-600">User Satisfaction</span>
                      <span className="font-poppins font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-ecru-violet h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
              See Our Customers Kind Reviews
            </h2>
            <p className="text-xl text-gray-600 font-poppins max-w-3xl mx-auto">
              Discover why over 27,000+ customers around the world trust ECRU for their AI-powered solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-ecru-violet/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-ecru-violet to-ecru-pink rounded-full flex items-center justify-center text-white font-poppins font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-poppins font-semibold text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-600 font-poppins">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-poppins leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 bg-gradient-to-r from-ecru-violet/10 to-ecru-pink/10 rounded-2xl px-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-poppins">27000+</div>
                <div className="text-sm text-gray-600 font-poppins">Customers Around The World</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 font-poppins">4.9/5</div>
                <div className="text-sm text-gray-600 font-poppins">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-ecru-grey/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-poppins">
                Find answers to common questions about our AI virtual assistant platform.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-2xl px-6">
                  <AccordionTrigger className="text-left font-poppins font-semibold text-gray-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 font-poppins leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ecru-violet/20 to-ecru-pink/20"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              Run Fast With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecru-violet to-ecru-pink">
                Generative AI
              </span>{" "}
              Across Every Function
            </h2>
            <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto leading-relaxed">
              Transform your business operations with our advanced AI virtual assistant. Experience the future of intelligent automation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ecru-violet to-ecru-pink hover:opacity-90 text-white px-12 py-4 text-lg font-poppins rounded-xl"
                onClick={handleGetStarted}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-poppins rounded-xl"
                onClick={handleContactUs}
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="pt-12">
              <p className="text-gray-400 font-poppins text-sm">
                Join thousands of businesses already using ECRU AI Assistant
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
