
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Server, Database, Shield, Cloud } from "lucide-react";

const StatusPage = () => {
  const services = [
    {
      name: "Hanzo Platform APIs",
      icon: Server,
      status: "Operational",
      uptime: "100%",
      latency: "45ms"
    },
    {
      name: "Hanzo Database",
      icon: Database,
      status: "Operational",
      uptime: "100%",
      latency: "28ms"
    },
    {
      name: "Hanzo Auth Service",
      icon: Shield,
      status: "Operational",
      uptime: "100%",
      latency: "32ms"
    },
    {
      name: "Hanzo AI Engine",
      icon: Cloud,
      status: "Operational",
      uptime: "100%",
      latency: "52ms"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <h1 className="text-3xl font-bold text-white">All Systems Operational</h1>
            </div>
            <p className="text-gray-400">
              Current status of Hanzo services and infrastructure
            </p>
          </div>

          <div className="grid gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.name}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Icon className="h-6 w-6 text-gray-400" />
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {service.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-green-500 text-sm">
                            {service.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{service.uptime}</div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-400">Average Latency</span>
                    <span className="text-white">{service.latency}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2">
              <div className="text-green-500 font-medium">No incidents reported in the last 90 days</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;
