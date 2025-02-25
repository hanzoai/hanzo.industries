
import { motion } from "framer-motion";
import { Blocks, Code2, Bot, MessageSquare, Database, ChartBar, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    icon: <Blocks className="h-8 w-8" />,
    title: "Hanzo App",
    description: "Design, Engineer, and Market AI-powered applications with our unified platform.",
    features: ["Unified Development Platform", "Real-time Database", "AI Integration", "One-Click Deployment"],
    productUrl: "/products/hanzo-app",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Hanzo Code",
    description: "Advanced code generation and management powered by AI.",
    features: ["AI Code Generation", "Code Review", "Documentation", "Version Control"],
    productUrl: "/products/hanzo-code",
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Hanzo Dev",
    description: "Developer tools and workflows for modern application development.",
    features: ["Local Development", "CLI Tools", "DevOps Integration", "Testing Suite"],
    productUrl: "/products/hanzo-dev",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Hanzo Base",
    description: "Scalable database and backend infrastructure solutions.",
    features: ["Serverless Database", "Auto-scaling", "Data Migration", "Backup & Recovery"],
    productUrl: "/products/hanzo-base",
  },
  {
    icon: <ChartBar className="h-8 w-8" />,
    title: "Hanzo Analytics",
    description: "Real-time analytics and insights for your applications.",
    features: ["User Analytics", "Performance Metrics", "Custom Reports", "Data Visualization"],
    productUrl: "/products/hanzo-analytics",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "HanzoDB",
    description: "High-performance distributed database system.",
    features: ["ACID Compliance", "Horizontal Scaling", "Real-time Sync", "Multi-region"],
    productUrl: "/products/hanzodb",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Hanzo Chat",
    description: "Intelligent conversational AI platform for building advanced chatbots.",
    features: ["Natural Language Processing", "Custom Training", "Multi-channel", "Analytics"],
    productUrl: "/products/hanzo-chat",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Hanzo Works",
    description: "AI-powered workspace for team collaboration and productivity.",
    features: ["Team Collaboration", "Project Management", "Resource Planning", "Automation"],
    productUrl: "/products/hanzo-works",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Hanzo Platform</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive DX platform you can run locally or in Hanzo Cloud
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {product.icon}
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-white text-black hover:bg-gray-100"
              >
                <a href={product.productUrl}>Learn More</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            <a href="https://console.hanzo.ai">Get Started with Hanzo Cloud</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
