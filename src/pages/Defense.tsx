import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Defense = () => {
  const branches = [
    {
      name: "U.S. Air Force",
      description:
        "Modernizing flight operations, logistics and mission planning with secure AI solutions.",
    },
    {
      name: "U.S. Army",
      description:
        "Supporting soldiers with data-driven insights for readiness, maintenance and battlefield awareness.",
    },
    {
      name: "U.S. Navy",
      description:
        "Enhancing naval operations through advanced analytics for fleet management and maritime intelligence.",
    },
    {
      name: "U.S. Marine Corps",
      description:
        "Delivering agile platforms that improve mission coordination and communications in any environment.",
    },
    {
      name: "U.S. Space Force",
      description:
        "Empowering guardians with cutting-edge capabilities for space domain awareness and command and control.",
    },
    {
      name: "U.S. Coast Guard",
      description:
        "Providing resilient systems that safeguard our waters and support humanitarian and security missions.",
    },
  ];

  const leaders = [
    {
      name: "Zach Kelling",
      title: "Chief Executive Officer",
    },
    {
      name: "Michael Kelling",
      title: "President",
    },
    {
      name: "Antje Worring",
      title: "Senior Vice President of Defense",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Committed to Defense</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Hanzo partners with the Department of Defense to deliver user-centric digital transformation that empowers the warfighter.
            </p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
              With decades of experience commercializing AI, we have brought more than 100 deep tech products to market since 2014. Hanzo is proudly backed by Techstars.
            </p>
          </div>

          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Contract Vehicles & Expertise</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Our team brings decades of DoD experience and is ready to engage through a variety of contract vehicles.
            </p>
            <ul className="max-w-3xl mx-auto space-y-2 text-gray-300 list-disc list-inside text-left">
              <li>Small Business Innovation Research (SBIR) solutions ready for point-of-use integration</li>
              <li>System of Systems Consortium (SOSSEC) and other Transaction Agreements</li>
              <li>SeaPort Next Generation (NxG) and Tradewind Marketplace vehicles</li>
              <li>18+ years delivering data engineering, AI and cloud expertise for the DoD</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Solutions for Every Branch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="p-6 rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{branch.name}</h3>
                  <p className="text-gray-400 text-sm">{branch.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {leaders.map((leader) => (
                <div key={leader.name} className="p-6 rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-gray-400 text-sm">{leader.title}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-gray-400 mb-6">
              Reach out to our defense team at{' '}
              <a href="mailto:defense@hanzo.industries" className="text-purple-400 hover:underline">
                defense@hanzo.industries
              </a>{' '}
              to discuss mission requirements.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Defense;
