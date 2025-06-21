
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Error signing out",
        description: message,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-white"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-black/90 backdrop-blur-md border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#products"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Solutions
            </a>
            <a
              href="/defense"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Defense
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Contact
            </a>
            <a
              href="https://docs.hanzo.ai"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            >
              Docs
            </a>
            
            <div className="px-3 py-2 space-y-2">
              {user ? (
                <>
                  <div className="text-gray-300 mb-2">{user.email}</div>
                  <Button 
                    variant="ghost" 
                    className="w-full text-white hover:bg-white/10"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="w-full text-white hover:bg-white/10"
                    onClick={() => navigate("/auth")}
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100"
                    onClick={() => navigate("/auth")}
                  >
                    Signup
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
