
import { motion } from "framer-motion";
import { Bot, Blocks } from "lucide-react";
import { Button } from "./ui/button";

const Products = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <Blocks className="h-10 w-10 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Hanzo App</h3>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Design, Engineer, and Market AI-powered applications with our unified platform.
            </p>
            <Button
              size="lg"
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              <a href="https://hanzo.app" className="flex items-center justify-center w-full">
                Get Started with Hanzo App
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <Bot className="h-10 w-10 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Hanzo Chat</h3>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Intelligent conversational AI platform for building advanced chatbots and assistants.
            </p>
            <Button
              size="lg"
              className="w-full bg-white text-black hover:bg-gray-100"
            >
              <a href="https://hanzo.chat" className="flex items-center justify-center w-full">
                Try Hanzo Chat
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
