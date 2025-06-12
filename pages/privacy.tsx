import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { useLanguage } from "@/hooks/useLanguage";

export default function Privacy() {
  const { content } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal information you provide when registering (name, email, phone number)",
        "Professional information for service providers (qualifications, experience, certifications)",
        "Transaction and payment information for completed services",
        "Usage data and analytics to improve our platform",
        "Device information and IP addresses for security purposes"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To connect customers with qualified service providers",
        "To process payments and maintain transaction records",
        "To verify service provider credentials and maintain quality standards",
        "To provide customer support and resolve disputes",
        "To send important updates about our services and policies",
        "To improve our platform through analytics and user feedback"
      ]
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "We share contact information between customers and service providers for completed bookings",
        "We may share aggregated, non-personal data for business analytics",
        "We comply with legal requests from authorized government agencies",
        "We work with trusted payment processors to handle transactions securely",
        "We never sell your personal information to third parties for marketing purposes"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "All data is encrypted in transit and at rest using industry-standard protocols",
        "Payment information is processed through PCI-compliant payment processors",
        "Access to personal data is restricted to authorized personnel only",
        "Regular security audits and monitoring to detect potential threats",
        "Secure data centers with physical and digital access controls"
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access and review your personal information at any time",
        "Request corrections to inaccurate or incomplete data",
        "Delete your account and associated data (subject to legal requirements)",
        "Opt out of non-essential communications and marketing",
        "Request a copy of your data in a portable format",
        "File complaints with relevant data protection authorities"
      ]
    },
    {
      icon: AlertCircle,
      title: "Data Retention",
      content: [
        "Account information is retained while your account is active",
        "Transaction records are kept for 7 years for legal and accounting purposes",
        "Support communications are retained for 2 years",
        "Analytics data is anonymized and may be retained indefinitely",
        "Deleted accounts are permanently removed within 30 days of deletion request"
      ]
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
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Privacy Policy
                </h1>
              </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideUp" delay={400}>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
                Your privacy and data security are our top priorities. Learn how we protect and handle your information.
              </p>
            </AnimatedSection>
            <AnimatedSection animationType="slideUp" delay={600}>
              <p className="text-lg opacity-80">
                Last updated: December 2024
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Introduction */}
      <AnimatedSection animationType="slideUp">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment to Your Privacy</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At WorkTok, we understand that your personal information is valuable and deserves protection. This Privacy Policy explains how we collect, use, share, and protect your information when you use our platform to connect with service providers across Iraq.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. We are committed to transparency and will notify you of any significant changes to our privacy practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Privacy Sections */}
      <AnimatedSection animationType="fadeIn">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {sections.map(({ icon: Icon, title, content }, index) => (
                <AnimatedSection key={index} animationType="slideUp" delay={index * 100}>
                  <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-500">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        {content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact for Privacy */}
      <AnimatedSection animationType="slideUp">
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                <CardTitle className="text-2xl text-center">Questions About Your Privacy?</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-green-600 font-semibold">privacy@worktok.iq</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">Data Protection Officer</h3>
                    <p className="text-green-600 font-semibold">dpo@worktok.iq</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Legal Notice */}
      <AnimatedSection animationType="slideUp">
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Legal Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  This privacy policy complies with applicable Iraqi data protection laws and international best practices. 
                  WorkTok is committed to protecting your privacy rights and maintaining the highest standards of data security.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}