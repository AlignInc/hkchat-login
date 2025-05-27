
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
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-xl font-semibold text-gray-900 ${isChinese ? 'font-noto-sans-tc' : ''}`}>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div 
            className={`prose prose-sm max-w-none leading-relaxed ${isChinese ? 'font-noto-sans-tc' : 'font-sans'}`}
            dangerouslySetInnerHTML={{ __html: formatContent(content, isChinese) }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const formatContent = (content: string, isChinese: boolean): string => {
  // Split content into sections
  let formattedContent = content;

  // Format tables for privacy policy
  if (content.includes('資料類別') || content.includes('Data Category') || content.includes('数据类别')) {
    // Table 1: Data Categories
    const tablePattern1 = /(資料類別|Data Category|数据类别)[\s\S]*?(我們只收集|We only collect|我们只收集)/;
    const match1 = formattedContent.match(tablePattern1);
    if (match1) {
      const tableContent = match1[0];
      const rows = tableContent.split('\n').filter(row => row.trim());
      let table = '<div class="my-6"><table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm"><thead class="bg-gray-50">';
      
      // Header row
      if (isChinese) {
        table += '<tr><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">資料類別</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">具體內容</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">收集方式 / 來源</th></tr>';
      } else {
        table += '<tr><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Data Category</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Specific Content</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Collection Method / Source</th></tr>';
      }
      
      table += '</thead><tbody>';
      
      // Find table rows (lines with tabs or multiple spaces)
      const dataRows = rows.filter(row => 
        (row.includes('\t') || row.match(/\s{2,}/)) && 
        !row.includes('資料類別') && 
        !row.includes('Data Category') && 
        !row.includes('数据类别') &&
        !row.includes('收集方式') &&
        !row.includes('Collection Method') &&
        !row.includes('收集方式')
      );
      
      dataRows.forEach((row, index) => {
        const cells = row.split(/\t+|\s{2,}/).filter(cell => cell.trim());
        if (cells.length >= 3) {
          const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
          table += `<tr class="${bgClass}">`;
          table += `<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">${cells[0].trim()}</td>`;
          table += `<td class="border border-gray-300 px-4 py-3 text-gray-700">${cells[1].trim()}</td>`;
          table += `<td class="border border-gray-300 px-4 py-3 text-gray-700">${cells[2].trim()}</td>`;
          table += '</tr>';
        }
      });
      
      table += '</tbody></table></div>';
      
      formattedContent = formattedContent.replace(tablePattern1, table + '\n\n$2');
    }

    // Table 2: Data Sharing
    const tablePattern2 = /(類別|Category|类别)[\s]*?(目的|Purpose|目的)[\s]*?(保護措施|Protection Measures|保护措施)[\s\S]*?(我們不會|We will not|我们不会)/;
    const match2 = formattedContent.match(tablePattern2);
    if (match2) {
      const tableContent = match2[0];
      const rows = tableContent.split('\n').filter(row => row.trim());
      let table = '<div class="my-6"><table class="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm"><thead class="bg-gray-50">';
      
      // Header row
      if (isChinese) {
        table += '<tr><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">類別</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">目的</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">保護措施</th></tr>';
      } else {
        table += '<tr><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Category</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th><th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Protection Measures</th></tr>';
      }
      
      table += '</thead><tbody>';
      
      // Find table rows
      const dataRows = rows.filter(row => 
        (row.includes('\t') || row.match(/\s{2,}/)) && 
        !row.includes('類別') && 
        !row.includes('Category') && 
        !row.includes('类别') &&
        !row.includes('目的') &&
        !row.includes('Purpose') &&
        !row.includes('保護措施') &&
        !row.includes('Protection Measures') &&
        !row.includes('保护措施')
      );
      
      dataRows.forEach((row, index) => {
        const cells = row.split(/\t+|\s{2,}/).filter(cell => cell.trim());
        if (cells.length >= 3) {
          const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
          table += `<tr class="${bgClass}">`;
          table += `<td class="border border-gray-300 px-4 py-3 font-medium text-gray-800">${cells[0].trim()}</td>`;
          table += `<td class="border border-gray-300 px-4 py-3 text-gray-700">${cells[1].trim()}</td>`;
          table += `<td class="border border-gray-300 px-4 py-3 text-gray-700">${cells[2].trim()}</td>`;
          table += '</tr>';
        }
      });
      
      table += '</tbody></table></div>';
      
      formattedContent = formattedContent.replace(tablePattern2, table + '\n\n$4');
    }
  }

  // Format sections and paragraphs
  formattedContent = formattedContent
    // Add section headers styling
    .replace(/^(\d+\.\s+[^\n]+)/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">$1</h3>')
    // Format numbered lists
    .replace(/^(\s*•\s+)/gm, '<li class="ml-4 mb-2">')
    .replace(/^(\s*\d+\.\s+)/gm, '<li class="ml-4 mb-2 list-decimal">')
    // Format bullet points
    .replace(/^(\s*-\s+)/gm, '<li class="ml-4 mb-2">')
    // Format paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    // Format bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Format dividers
    .replace(/⸻/g, '<hr class="my-8 border-gray-200">')
    // Clean up extra formatting
    .replace(/<\/p><p[^>]*>(\s*<h3)/g, '$1')
    .replace(/<\/h3>\s*<p[^>]*>/g, '</h3>')
    .replace(/<p[^>]*>\s*<\/p>/g, '');

  return `<div class="text-gray-700"><p class="mb-4 text-gray-700 leading-relaxed">${formattedContent}</p></div>`;
};

export default LegalModal;
