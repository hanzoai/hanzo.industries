
import { motion } from "framer-motion";
import { Blocks, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    icon: <Blocks className="h-8 w-8" />,
    title: "Hanzo App",
    description: "Design, Engineer, and Market AI-powered applications with our unified platform.",
    features: [
      { icon: <Blocks className="h-4 w-4" />, text: "Unified Development Platform" },
      { icon: <Blocks className="h-4 w-4" />, text: "Real-time Database" },
      { icon: <Blocks className="h-4 w-4" />, text: "AI Integration" },
      { icon: <Blocks className="h-4 w-4" />, text: "One-Click Deployment" }
    ],
    productUrl: "https://app.hanzo.ai",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Hanzo Chat",
    description: "Intelligent conversational AI platform for building advanced chatbots and virtual assistants.",
    features: [
      { icon: <MessageSquare className="h-4 w-4" />, text: "Natural Language Processing" },
      { icon: <MessageSquare className="h-4 w-4" />, text: "Custom AI Training" },
      { icon: <MessageSquare className="h-4 w-4" />, text: "Multi-channel Integration" },
      { icon: <MessageSquare className="h-4 w-4" />, text: "Real-time Analytics" }
    ],
    productUrl: "https://chat.hanzo.ai",
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {product.icon}
                <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{product.description}</p>
              <ul className="space-y-3 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-white text-black hover:bg-gray-100"
              >
                <a href={product.productUrl}>Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: products.length * 0.1 }}
          className="mt-20 p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Build?</h3>
            <p className="text-gray-300 mb-8">
              Start building unstoppable applications today with our comprehensive suite of tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-black border-2 border-white group-hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    Read the Docs
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://app.hanzo.ai/signup" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 group-hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    Get Started Free
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
