import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to satisfy React.ReactNode type usage
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GrowthStep {
  title: string;
  description: string;
}