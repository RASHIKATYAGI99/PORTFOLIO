import { db } from "./db";
import { messages, projects, certifications, type Message, type InsertMessage, type Project, type InsertProject, type Certification, type InsertCertification } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  getCertifications(): Promise<Certification[]>;
  createCertification(cert: InsertCertification): Promise<Certification>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications);
  }

  async createCertification(insertCert: InsertCertification): Promise<Certification> {
    const [cert] = await db.insert(certifications).values(insertCert).returning();
    return cert;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
