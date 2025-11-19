import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background terminal-scanline">
      <div className="w-full max-w-lg mx-4 bg-card border border-border rounded p-8 shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <AlertCircle className="h-16 w-16 text-destructive terminal-glow" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-2 font-mono terminal-glow">404</h1>

          <h2 className="text-xl font-semibold text-foreground mb-4 font-mono">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed font-mono text-sm">
            $ Error: The requested page does not exist
            <br />
            $ It may have been moved or deleted
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Home className="w-4 h-4 mr-2" />
              <span className="text-primary">$ cd ~</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
