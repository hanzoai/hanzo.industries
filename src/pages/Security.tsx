
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Key, UserCheck, Server, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Best-in-class security practices and infrastructure to protect your data and applications"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data in transit and at rest is encrypted using industry-standard protocols"
    },
    {
      icon: Key,
      title: "Access Controls",
      description: "Fine-grained permissions and role-based access control (RBAC) for team management"
    },
    {
      icon: UserCheck,
      title: "Identity & Authentication",
      description: "Multi-factor authentication and single sign-on (SSO) support"
    },
    {
      icon: Server,
      title: "Data Protection",
      description: "Regular backups and disaster recovery protocols to ensure data safety"
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Security First, Always
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We prioritize the security and privacy of your data with enterprise-grade protection at every layer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center space-y-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                SOC 2 Type II Certified
              </h2>
              <p className="text-gray-400 mb-6">
                Our security practices and controls have been audited and certified by independent third-party auditors
              </p>
              <Button 
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Download Security Whitepaper
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Security Monitoring</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Data Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;
