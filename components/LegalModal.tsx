import React from 'react';
import { X, Shield, Lock, FileText, CheckCircle } from 'lucide-react';

interface Props {
  type: string;
  onClose: () => void;
}

const LegalModal: React.FC<Props> = ({ type, onClose }) => {
  const getContent = () => {
    switch(type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Shield className="text-teal" />,
          body: 'At Soniroyn, we take your privacy seriously. This policy describes how we collect, use, and protect your data. We use enterprise-grade encryption for all voice data and never share your sensitive business intelligence with third parties without explicit consent. All data processed is used solely to improve your specific AI agent performance.'
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: <FileText className="text-teal" />,
          body: 'By using the Soniroyn platform, you agree to our service terms. We provide 99.9% uptime for voice operations and regular software updates. Usage of our AI agents must comply with local telecommunication laws. We provide a scalable infrastructure for businesses of all sizes to automate their voice communications securely.'
        };
      case 'gdpr':
        return {
          title: 'GDPR Compliance',
          icon: <Lock className="text-teal" />,
          body: 'Soniroyn is fully GDPR compliant. We offer right-to-erasure for all processed voice transcripts, data portability for your business intelligence, and a transparent data processing policy. Our servers are located in secure, regionalized data centers to meet international data residency requirements.'
        };
      case 'data':
        return {
          title: 'Data Processing',
          icon: <CheckCircle className="text-teal" />,
          body: 'Our Data Processing Agreement (DPA) ensures that your customer conversations are processed with the highest standards of integrity. We utilize structured data extraction to provide you with leads while ensuring all PII is handled according to strict enterprise security protocols.'
        };
      default:
        return { title: 'Information', icon: <FileText />, body: 'Information not found.' };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-[#0B1F3A]/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-navy w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8 sm:p-12">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-teal/10 rounded-2xl">
                {content.icon}
              </div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] dark:text-white">{content.title}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors bg-transparent border-none cursor-pointer">
              <X size={24} className="text-gray-400" />
            </button>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
              {content.body}
            </p>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Version 1.2 • Last Updated March 2024</p>
               <p className="text-sm text-gray-500">For specific legal inquiries, please contact our data protection officer via the demo booking link.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="mt-10 w-full bg-[#0B1F3A] dark:bg-teal text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all cursor-pointer border-none"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;