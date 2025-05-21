import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 text-center py-16">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent pb-2">404</h1>
            <p className="text-xl">Page not found</p>
          </div>
          
          <div className="w-full max-w-md bg-muted/10 rounded-lg p-8 border border-border/40">
            <div className="rounded-full bg-muted/30 p-6 mx-auto mb-6 w-24 h-24 flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="w-full">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-border/40 bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GuideClip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 