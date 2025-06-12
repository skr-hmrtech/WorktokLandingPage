import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Award, Clock, CheckCircle, Star, Heart, Globe } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { useLanguage } from "@/hooks/useLanguage";

export default function About() {
  const { content } = useLanguage();

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Shield, value: "500+", label: "Verified Professionals", color: "text-green-600", bg: "bg-green-100" },
    { icon: Award, value: "50+", label: "Service Categories", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: Clock, value: "24/7", label: "Customer Support", color: "text-orange-600", bg: "bg-orange-100" }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We ensure all service providers meet our high standards through rigorous verification processes.",
      color: "text-green-600"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work tirelessly to exceed your expectations.",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      title: "Trust & Reliability",
      description: "Building lasting relationships through transparent communication and reliable service delivery.",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Supporting local professionals and contributing to Iraq's growing service economy.",
      color: "text-blue-600"
    }
  ];

  const team = [
    {
      name: "Ahmed Al-Rashid",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "10+ years in tech leadership"
    },
    {
      name: "Fatima Al-Zahra",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Expert in service excellence"
    },
    {
      name: "Omar Hassan",
      position: "Technology Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "15+ years in platform development"
    }
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
                About WorkTok
              </h1>
            </AnimatedSection>
            <AnimatedSection animationType="slideUp" delay={400}>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
                Connecting Iraq's finest service professionals with customers who need quality work done right
              </p>
            </AnimatedSection>
            <AnimatedSection animationType="scale" delay={600}>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-lg">
                Trusted by thousands across Iraq
              </Badge>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animationType="slideUp">
        <section className="py-16 -mt-10 relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, value, label, color, bg }, index) => (
                <AnimatedSection key={index} animationType="scale" delay={index * 100}>
                  <Card className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${color}`} />
                      </div>
                      <div className={`text-3xl font-bold ${color} mb-2`}>{value}</div>
                      <div className="text-gray-600 font-medium">{label}</div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Story */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animationType="slideLeft">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Founded in 2020, WorkTok emerged from a simple observation: Iraq needed a reliable way to connect skilled professionals with customers seeking quality services.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    What started as a small team's vision has grown into Iraq's most trusted service marketplace, serving thousands of customers and supporting hundreds of local professionals.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Today, we're proud to be part of Iraq's digital transformation, creating opportunities and building trust in every interaction.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="slideRight" delay={200}>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Our team"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animationType="slideUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Our Values
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map(({ icon: Icon, title, description, color }, index) => (
                <AnimatedSection key={index} animationType="slideUp" delay={index * 150}>
                  <Card className="text-center h-full hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className={`w-8 h-8 ${color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animationType="slideUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Leadership Team
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet the passionate individuals driving WorkTok's mission forward
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={index} animationType="slideUp" delay={index * 200}>
                  <Card className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission Statement */}
      <AnimatedSection animationType="slideUp">
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              To empower Iraq's service economy by creating meaningful connections between skilled professionals and customers, fostering trust, quality, and economic growth in every community we serve.
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}