import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white border border-brand-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            className="w-full flex justify-between items-center p-5 text-left bg-brand-50/50 hover:bg-brand-50 transition-colors"
            onClick={() => toggle(index)}
          >
            <span className="font-serif font-medium text-lg text-brand-800">{item.title}</span>
            {openIndex === index ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-brand-400" />}
          </button>
          
          {openIndex === index && (
            <div className="p-6 text-brand-700 bg-white border-t border-brand-100 leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;