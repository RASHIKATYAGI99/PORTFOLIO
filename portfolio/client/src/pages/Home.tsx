import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { ArrowDown, Code, Server, Database, Globe, ExternalLink, Github, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useProjects } from "@/hooks/use-projects";
import { useCertifications } from "@/hooks/use-certifications";
import { useContact } from "@/hooks/use-contact";

// Section Components

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Abstract Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Rashika <span className="text-gradient">Tyagi</span>
          </h1>
          <div className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 h-20">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Software Engineer",
                  "Creative Coder",
                  "Problem Solver"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>
          <div className="flex gap-4">
            <Link to="projects" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/30 transition-all"
              >
                View Work
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-card text-foreground border border-border rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse" />
            <img
              src="/images/profile.jpg"
              alt="Rashika Tyagi"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop";
              }}
            />
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-card p-4 rounded-xl shadow-lg z-20"
            >
              <Code className="w-8 h-8 text-blue-500" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-card p-4 rounded-xl shadow-lg z-20"
            >
              <Server className="w-8 h-8 text-purple-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-muted-foreground hover:text-primary">
          <ArrowDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-8">About Me</h2>
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-200/50 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I am an Engineer with an ability to adapt to any environment, with a strong foundation in computer science principles. 
              My journey in tech is driven by curiosity and a desire to build solutions that matter.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I specialize in full-stack development, bridging the gap between elegant front-end interfaces and robust back-end logic.
              When I'm not coding, I'm constantly learning new technologies to stay ahead in this ever-evolving field.
            </p>
            
            <div className="mt-10">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Download Resume <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Java", category: "Languages", icon: "☕" },
    { name: "JavaScript", category: "Languages", icon: "📜" },
    { name: "HTML5", category: "Frontend", icon: "🌐" },
    { name: "CSS3", category: "Frontend", icon: "🎨" },
    { name: "React.js", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Express.js", category: "Backend", icon: "🚂" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "SQL", category: "Database", icon: "🗄️" },
    { name: "Git & GitHub", category: "Tools", icon: "📦" },
    { name: "REST APIs", category: "Architecture", icon: "🔗" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">My toolbox for building digital experiences</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-2 block">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const { data: certifications, isLoading } = useCertifications();

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Recognition of my technical expertise</p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications?.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="text-6xl">📜</div>
                </div>
                
                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium mb-4">
                        {cert.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                    <p className="text-muted-foreground mb-6">{cert.issuer}</p>
                    
                    {cert.link && (
                        <a 
                            href={cert.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-medium hover:underline text-sm"
                        >
                            View Certificate <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                    )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Projects = () => {
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all z-10" />
                  <img
                    src={project.imageUrl || `https://source.unsplash.com/random/800x600?tech,${index}`}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
  {(Array.isArray(project.techStack)
    ? project.techStack
    : project.techStack?.split(",") ?? []
  ).map((tech: string) => (
    <span
      key={tech.trim()}
      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full font-medium"
    >
      {tech.trim()}
    </span>
  ))}
</div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* Fallback if no projects */}
            {(!projects || projects.length === 0) && (
               <div className="col-span-full text-center py-20 text-muted-foreground">
                 <p>No projects loaded. Backend connection might be pending.</p>
               </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const contactMutation = useContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-primary p-12 text-primary-foreground flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">Get in Touch</h3>
              <p className="mb-8 opacity-90">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-12">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <input
                  {...form.register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={contactMutation.isPending}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all disabled:opacity-50"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
