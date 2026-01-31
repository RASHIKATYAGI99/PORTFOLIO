import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-display font-bold mb-6">Let's Connect</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background rounded-full shadow-lg hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background rounded-full shadow-lg hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 bg-background rounded-full shadow-lg hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Rashika Tyagi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
