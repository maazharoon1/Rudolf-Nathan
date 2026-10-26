import React from 'react';
import { X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div role="dialog" aria-modal="true" aria-labelledby="contact-title" className="relative w-full max-w-lg bg-white shadow-2xl border border-neutral-200 p-8 sm:p-12 my-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer" aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>
        <div className="w-8 h-[1.5px] bg-red-700 mb-6" />
        <h2 id="contact-title" className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal">CONTACT</h2>
        <p className="mt-2 text-xs tracking-[0.2em] uppercase text-neutral-600 font-medium">Rudolf Nathan Watches</p>
        <p className="mt-6 text-xs text-neutral-600 leading-relaxed font-light">
          For timepiece inquiries and collection details, email us or give us a call.
        </p>
        <a href="mailto:michaelangelowatchesofficial@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-3 px-5 py-4 bg-neutral-900 hover:bg-red-800 transition-colors text-xs tracking-wider text-white">
          <Mail className="w-4 h-4" />
          <span>Email our team</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="mailto:michaelangelowatchesofficial@gmail.com" className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-600 hover:text-red-700 transition-colors">
          <Mail className="w-4 h-4 shrink-0" />
          <span className="break-all">michaelangelowatchesofficial@gmail.com</span>
        </a>
        <a href="tel:+13214476924" className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-600 hover:text-red-700 transition-colors">
          <Phone className="w-4 h-4 shrink-0" />
          <span>+1 321-447-6924</span>
        </a>
        <address className="mt-6 flex items-start justify-center gap-2 text-xs text-neutral-600 leading-relaxed not-italic">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>631 Brawley School Road, Mooresville, NC, United States, 28117</span>
        </address>
      </div>
    </div>
  );
};
