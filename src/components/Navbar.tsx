
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProductsMenu } from "./navigation/ProductsMenu";
import { SolutionsMenu } from "./navigation/SolutionsMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
      toast({
        title: "Signed out successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png"
              alt="Hanzo"
              className="h-10 w-10"
            />
            <span className="text-white font-bold text-xl">Hanzo</span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <ProductsMenu />
            <SolutionsMenu />
            <a href="https://docs.hanzo.ai" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </a>

            <div className="flex items-center space-x-3">
              {user ? (
                <>
                  <span className="text-gray-300">{user.email}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-white border-white hover:bg-white/10"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-white border-white hover:bg-white/10"
                    onClick={() => navigate("/auth")}
                  >
                    Login
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-white text-black hover:bg-gray-100"
                    onClick={() => {
                      navigate("/auth");
                    }}
                  >
                    Signup
                  </Button>
                </>
              )}
            </div>
          </div>

          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
