import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewspaperService {
  titles: string[] = [
    'New Breakthrough in Quantum Computing Promises Unprecedented Processing Speeds',
    'Ethical Concerns Raised Over AI-Powered Facial Recognition Systems in Public Spaces',
    'Robotics Company Unveils Humanoid Assistant Capable of Natural Language Interaction',
    'Tech Giants Collaborate on Open Source Framework for AI Ethics and Accountability',
    'Startup Launches Innovative AI-Powered Healthcare Platform for Remote Patient Monitoring',
    'Researchers Develop Neural Network Algorithm for Predicting Stock Market Trends',
    "Artificial Intelligence Helps Detect Early Signs of Alzheimer's Disease in Brain Scans",
    'Government Agencies Implement AI-Driven Solutions for Streamlining Administrative Processes',
    'Autonomous Delivery Drones Set to Revolutionize Last-Mile Logistics',
    'Machine Learning Algorithm Identifies Patterns in Climate Data to Improve Weather Forecasting',
    'Virtual Reality Therapy Shows Promise in Treating PTSD and Anxiety Disorders',
    'Blockchain Technology Being Utilized to Enhance Supply Chain Transparency',
    'AI Chatbot Provides 24/7 Customer Support for E-commerce Websites',
    'Robotic Process Automation Reduces Administrative Burden in Financial Institutions',
    'Tech Company Introduces Biometric Authentication System for Secure Access Control',
    'AI-Generated Artwork Fetches Record Prices at Auction, Sparking Debate Over Creativity',
    'Advancements in Natural Language Processing Enable More Accurate Translation Services',
    '3D Printing Innovations Revolutionize Manufacturing Processes Across Industries',
    'Smart Home Devices Vulnerable to Cyber Attacks, Raises Concerns Over Privacy',
    'Researchers Develop AI Algorithm for Early Detection of Cardiovascular Diseases',
  ];

  constructor() {}

  private getSingleRandomTitle(): string {
    const randomIndex = Math.floor(Math.random() * this.titles.length);
    return this.titles[randomIndex];
  }

  getRandomTitles(amount: number): string[] {
    const titles = new Array<string>(amount).fill('');
    return titles.map((t) => this.getSingleRandomTitle());
  }
}
