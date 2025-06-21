import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const divisions = [
    {
      name: "Sales",
      email: "sales@hanzo.industries",
      description: "General product and platform inquiries."
    },
    {
      name: "Defense",
      email: "defense@hanzo.industries",
      description: "Connect with our dedicated defense division."
    },
    {
      name: "Partnerships",
      email: "partners@hanzo.industries",
      description: "Explore strategic or technology partnerships."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-400 text-lg">
            Reach out and our team will route your request to the appropriate division.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {divisions.map((d) => (
            <div key={d.name} className="p-6 rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold mb-2">{d.name}</h3>
              <p className="text-gray-400 mb-4 text-sm">{d.description}</p>
              <a href={`mailto:${d.email}`} className="text-purple-400 hover:underline">
                {d.email}
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
