
import { motion } from "framer-motion";
import { Code2, BarChart3, CreditCard, Wand2, Bot, Network, Cpu, Leaf } from "lucide-react";
import { Button } from "./ui/button";

const allFeatures = [
  {
    icon: <Wand2 className="h-8 w-8" />,
    title: "Hanzo App",
    description:
      "Design, build, and launch full-featured applications with our generative App Builder. Native analytics and platform API integration.",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Hanzo Bot",
    description:
      "Launch agentic frameworks effortlessly using our drag-and-drop GUI to build and iterate on scalable agentic workflows.",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Hanzo Code",
    description:
      "Open Source IDE that embeds AI agents directly into your coding workflow, accelerating development and deployment.",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Hanzo Dev",
    description:
      "24/7 AI engineers that ingest your data and code to build, refine, test, and engineer alongside you autonomously.",
  }
];

const Features = () => {
  const displayedFeatures = allFeatures.slice(0, 16);

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-white/10 hover:ring-white/20 transition-all"
            >
              <div className="p-2 bg-white/10 w-fit rounded-lg text-blue-400">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
