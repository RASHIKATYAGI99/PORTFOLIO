import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects API
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Certifications API
  app.get(api.certifications.list.path, async (_req, res) => {
    const certifications = await storage.getCertifications();
    res.json(certifications);
  });

  // Contact API
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Quizify",
      description: "A platform that makes learning more interactive and engaging through quizzes, catering to a variety of topics and difficulty levels. It enhances user engagement through interactive learning features.",
      techStack: JSON.stringify(["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"]),
      link: "#", // Placeholder
      imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000" // Generic quiz image
    });

    await storage.createProject({
      title: "Quantum Talk",
      description: "A dynamic ecosystem designed to empower users with seamless group collaboration, AI-driven conversations, and on-demand code generation.",
      techStack: JSON.stringify(["MongoDB", "Express.js", "React.js", "Node.js", "API Integrations"]),
      link: "#", // Placeholder
      imageUrl: "https://images.unsplash.com/photo-1587560699334-cc4da63c240b?auto=format&fit=crop&q=80&w=1000" // Generic tech/chat image
    });
    
    console.log("Database seeded with initial projects");
  }

  const existingCerts = await storage.getCertifications();
  if (existingCerts.length === 0) {
    await storage.createCertification({
      name: "Software Testing",
      issuer: "The Digital Adda",
      year: "2024",
      link: "#"
    });
    await storage.createCertification({
      name: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      year: "2025",
      link: "#"
    });
    await storage.createCertification({
      name: "Full Stack BackEnd Using NodeJS",
      issuer: "GLA University, Mathura",
      year: "2024",
      link: "#"
    });
    await storage.createCertification({
      name: "Prompt Engineering for Everyone",
      issuer: "Cognitive Class",
      year: "2024",
      link: "#"
    });
    console.log("Database seeded with initial certifications");
  }
}
