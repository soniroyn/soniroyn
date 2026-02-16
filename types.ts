
// Import React to provide the React namespace for type definitions.
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ModuleData {
  id: string;
  title: string;
  description: string;
  outcome: string;
  icon: React.ReactNode;
}

export interface UseCase {
  industry: string;
  description: string;
  benefit: string;
}
