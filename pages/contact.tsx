import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { useLanguage } from "@/hooks/useLanguage";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const { content } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for contacting us! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "+964 770 123 4567",
      description: "Available 24/7 for urgent inquiries",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@worktok.iq",
      description: "Response within 2-4 hours",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: MapPin,
      title: "Head Office",
      value: "Baghdad, Iraq",
      description: "Al-Karrada District, Building 45",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "24/7 Support",
      description: "Sunday to Thursday: 8AM - 8PM",
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  const supportCategories = [
    "General Inquiry",
    "Service Provider Registration",
    "Customer Support",
    "Technical Issue",
    "Payment & Billing",
    "Partnership Opportunity",
    "Feedback & Suggestions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <AnimatedSection animationType="slideUp" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
            </AnimatedSection>
            <AnimatedSection animationType="slideUp" delay={400}>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
                Have questions? We're here to help! Reach out to our dedicated support team
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Info Cards */}
      <AnimatedSection animationType="slideUp">
        <section className="py-16 -mt-10 relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map(({ icon: Icon, title, value, description, color, bg }, index) => (
                <AnimatedSection key={index} animationType="scale" delay={index * 100}>
                  <Card className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg h-full">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${color}`} />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                      <p className={`font-semibold ${color} mb-2`}>{value}</p>
                      <p className="text-sm text-gray-600">{description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form & Map */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection animationType="slideLeft">
                <Card className="shadow-2xl border-0">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <MessageCircle className="w-6 h-6" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="border-2 hover:border-green-300 focus:border-green-500 transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="border-2 hover:border-green-300 focus:border-green-500 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="border-2 hover:border-green-300 focus:border-green-500 transition-colors"
                            placeholder="+964 770 123 4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Category
                          </label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => setFormData({...formData, category: value})}
                          >
                            <SelectTrigger className="border-2 hover:border-green-300 focus:border-green-500 transition-colors">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {supportCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="border-2 hover:border-green-300 focus:border-green-500 transition-colors"
                          placeholder="Brief description of your inquiry"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="border-2 hover:border-green-300 focus:border-green-500 transition-colors"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Map & Additional Info */}
              <AnimatedSection animationType="slideRight" delay={200}>
                <div className="space-y-8">
                  {/* Map */}
                  <Card className="shadow-2xl border-0 overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                        <p className="text-gray-600">Baghdad, Al-Karrada District</p>
                        <p className="text-gray-600">Building 45, Floor 3</p>
                      </div>
                    </div>
                  </Card>

                  {/* Quick Support */}
                  <Card className="shadow-2xl border-0">
                    <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                      <CardTitle className="flex items-center gap-3">
                        <HeadphonesIcon className="w-6 h-6" />
                        Need Immediate Help?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-6">
                        For urgent matters, our support team is available 24/7 via phone or live chat.
                      </p>
                      <div className="space-y-3">
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => window.open('tel:+9647701234567')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now: +964 770 123 4567
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-green-600 text-green-600 hover:bg-green-50"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Start Live Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* FAQ Link */}
                  <Card className="shadow-2xl border-0">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Find quick answers to common questions in our FAQ section.
                      </p>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        View FAQ
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Response Time */}
      <AnimatedSection animationType="slideUp">
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Response Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Live Chat</h3>
                <p className="text-gray-600">Instant response during business hours</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">Response within 2-4 hours</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">24/7 availability for urgent matters</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}