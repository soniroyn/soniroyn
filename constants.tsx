import React from 'react';
import { Layout, CheckCircle, ShieldCheck } from 'lucide-react';

export const HOW_IT_WORKS = [
  { step: '01', title: 'Plan', desc: 'We help you choose the best rules for your AI agent.', icon: <Layout className="w-6 h-6" /> },
  { step: '02', title: 'Setup', desc: 'We connect it to your current calendars and tools.', icon: <CheckCircle className="w-6 h-6" /> },
  { step: '03', title: 'Launch', desc: 'Your new agent starts answering calls right away.', icon: <ShieldCheck className="w-6 h-6" /> }
];