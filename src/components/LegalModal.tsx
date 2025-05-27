
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from '@/hooks/useLanguage';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const { t, language } = useLanguage();

  const title = t(type === 'terms' ? 'terms.title' : 'privacy.title');
  const content = t(type === 'terms' ? 'terms.content' : 'privacy.content');

  // Determine if current language is Chinese
  const isChinese = language === 'zh-HK' || language === 'zh-CN';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-3xl font-bold text-gray-900 mb-8 text-center ${isChinese ? 'font-source-han-sans' : ''}`}>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-8">
          <style jsx>{`
            .privacy-policy-content,
            .terms-content {
              font-family: ${isChinese ? "'Source Han Sans', system-ui, -apple-system, sans-serif" : "'system-ui', -apple-system, sans-serif"};
            }

            .policy-section,
            .terms-section {
              margin-bottom: 3rem;
              padding: 2rem;
              background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
              border-radius: 1rem;
              border-left: 4px solid #3b82f6;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
            }

            .policy-section:hover,
            .terms-section:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.15);
            }

            .policy-section h2,
            .terms-section h2 {
              color: #1e40af;
              font-size: 1.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              padding-bottom: 0.75rem;
              border-bottom: 2px solid #e2e8f0;
            }

            .data-table-container {
              margin: 2rem 0;
              border-radius: 0.75rem;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }

            .data-collection-table {
              width: 100%;
              border-collapse: collapse;
              background: white;
            }

            .data-collection-table thead {
              background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            }

            .data-collection-table th {
              padding: 1rem 1.5rem;
              text-align: left;
              font-weight: 600;
              color: white;
              font-size: 1rem;
            }

            .data-collection-table td {
              padding: 1rem 1.5rem;
              border-bottom: 1px solid #e5e7eb;
              color: #374151;
            }

            .data-collection-table tbody tr:nth-child(even) {
              background-color: #f9fafb;
            }

            .data-collection-table tbody tr:hover {
              background-color: #eff6ff;
              transition: background-color 0.2s ease;
            }

            .purpose-list,
            .rights-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 1.5rem;
              margin: 2rem 0;
            }

            .purpose-item,
            .right-item {
              background: white;
              padding: 1.5rem;
              border-radius: 0.75rem;
              border: 1px solid #e5e7eb;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
            }

            .purpose-item:hover,
            .right-item:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
              border-color: #3b82f6;
            }

            .purpose-item h3,
            .right-item h4 {
              color: #1e40af;
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 0.75rem;
            }

            .disclosure-grid,
            .responsibility-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 1.5rem;
              margin: 2rem 0;
            }

            .disclosure-card,
            .responsibility-item {
              background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
              padding: 1.5rem;
              border-radius: 0.75rem;
              border: 1px solid #e2e8f0;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
            }

            .disclosure-card:hover,
            .responsibility-item:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
              border-color: #3b82f6;
            }

            .disclosure-card h4,
            .responsibility-item h4 {
              color: #1e40af;
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 0.75rem;
            }

            .security-measures {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              margin: 2rem 0;
            }

            .measure-item {
              display: flex;
              align-items: flex-start;
              gap: 1rem;
              background: white;
              padding: 1.5rem;
              border-radius: 0.75rem;
              border: 1px solid #e5e7eb;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
            }

            .measure-item:hover {
              transform: translateX(8px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-color: #3b82f6;
            }

            .measure-icon {
              font-size: 1.5rem;
              flex-shrink: 0;
            }

            .measure-item h4 {
              color: #1e40af;
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }

            .contact-info {
              background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
              padding: 2rem;
              border-radius: 0.75rem;
              border: 1px solid #bfdbfe;
            }

            .contact-details {
              margin-top: 1rem;
              padding: 1rem;
              background: white;
              border-radius: 0.5rem;
              border: 1px solid #e5e7eb;
            }

            .contact-details p {
              margin-bottom: 0.5rem;
              color: #374151;
            }

            .service-list {
              list-style: none;
              padding: 0;
              margin: 1rem 0;
            }

            .service-list li {
              padding: 0.75rem 0;
              border-bottom: 1px solid #e5e7eb;
              position: relative;
              padding-left: 2rem;
            }

            .service-list li:before {
              content: "✓";
              position: absolute;
              left: 0;
              color: #10b981;
              font-weight: bold;
              font-size: 1.125rem;
            }

            .prohibited-actions {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              margin: 2rem 0;
            }

            .prohibition-item {
              display: flex;
              align-items: flex-start;
              gap: 1rem;
              background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
              padding: 1.5rem;
              border-radius: 0.75rem;
              border: 1px solid #fecaca;
              transition: all 0.3s ease;
            }

            .prohibition-item:hover {
              transform: translateX(8px);
              box-shadow: 0 4px 8px rgba(239, 68, 68, 0.1);
            }

            .prohibition-icon {
              font-size: 1.5rem;
              flex-shrink: 0;
            }

            .prohibition-item h4 {
              color: #dc2626;
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }

            .disclaimer-box {
              background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
              padding: 2rem;
              border-radius: 0.75rem;
              border: 1px solid #fdba74;
              border-left: 4px solid #ea580c;
              margin: 2rem 0;
            }

            .disclaimer-box p {
              color: #9a3412;
              font-weight: 500;
              margin: 0;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
              .purpose-list,
              .rights-container,
              .disclosure-grid,
              .responsibility-grid {
                grid-template-columns: 1fr;
              }

              .policy-section,
              .terms-section {
                padding: 1.5rem;
                margin-bottom: 2rem;
              }

              .data-collection-table th,
              .data-collection-table td {
                padding: 0.75rem;
                font-size: 0.875rem;
              }
            }
          `}</style>
          <div 
            className={`prose prose-lg max-w-none leading-relaxed text-gray-800 ${isChinese ? 'font-source-han-sans' : 'font-sans'}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
