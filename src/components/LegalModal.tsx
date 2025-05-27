
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
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-2xl font-bold text-gray-900 mb-6 ${isChinese ? 'font-source-han-sans' : ''}`}>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <div 
            className={`prose prose-lg max-w-none leading-relaxed text-gray-800 ${isChinese ? 'font-source-han-sans' : 'font-sans'}`}
            dangerouslySetInnerHTML={{ __html: formatContent(content, isChinese) }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const formatContent = (content: string, isChinese: boolean): string => {
  let formattedContent = content;

  // Format tables for privacy policy
  if (content.includes('資料類別') || content.includes('Data Category') || content.includes('数据类别')) {
    // Table 1: Data Categories
    const tablePattern1 = /(資料類別|Data Category|数据类别)[\s\S]*?(我們只收集|We only collect|我们只收集)/;
    const match1 = formattedContent.match(tablePattern1);
    if (match1) {
      const tableContent = match1[0];
      const rows = tableContent.split('\n').filter(row => row.trim());
      let table = '<div class="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm"><table class="w-full border-collapse bg-white"><thead class="bg-gradient-to-r from-gray-50 to-gray-100">';
      
      // Header row
      if (isChinese) {
        table += '<tr><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">資料類別</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">具體內容</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">收集方式 / 來源</th></tr>';
      } else {
        table += '<tr><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">Data Category</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">Specific Content</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">Collection Method / Source</th></tr>';
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
          table += `<tr class="${bgClass} hover:bg-blue-50 transition-colors duration-200">`;
          table += `<td class="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">${cells[0].trim()}</td>`;
          table += `<td class="border-b border-gray-100 px-6 py-4 text-gray-700">${cells[1].trim()}</td>`;
          table += `<td class="border-b border-gray-100 px-6 py-4 text-gray-700">${cells[2].trim()}</td>`;
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
      let table = '<div class="my-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm"><table class="w-full border-collapse bg-white"><thead class="bg-gradient-to-r from-gray-50 to-gray-100">';
      
      // Header row
      if (isChinese) {
        table += '<tr><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">類別</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">目的</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">保護措施</th></tr>';
      } else {
        table += '<tr><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">Category</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">Purpose</th><th class="border-b border-gray-200 px-6 py-4 text-left font-bold text-gray-900 text-lg">Protection Measures</th></tr>';
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
          table += `<tr class="${bgClass} hover:bg-blue-50 transition-colors duration-200">`;
          table += `<td class="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">${cells[0].trim()}</td>`;
          table += `<td class="border-b border-gray-100 px-6 py-4 text-gray-700">${cells[1].trim()}</td>`;
          table += `<td class="border-b border-gray-100 px-6 py-4 text-gray-700">${cells[2].trim()}</td>`;
          table += '</tr>';
        }
      });
      
      table += '</tbody></table></div>';
      
      formattedContent = formattedContent.replace(tablePattern2, table + '\n\n$4');
    }
  }

  // Format sections and paragraphs
  formattedContent = formattedContent
    // Add section headers styling with better spacing
    .replace(/^(\d+\.\s+[^\n]+)/gm, '<h2 class="text-xl font-bold text-gray-900 mt-10 mb-6 pb-3 border-b-2 border-blue-100">$1</h2>')
    // Format subsection headers
    .replace(/^([a-z]\)\s+[^\n]+)/gm, '<h3 class="text-lg font-semibold text-gray-800 mt-6 mb-4">$1</h3>')
    // Format numbered lists with better styling
    .replace(/^(\s*•\s+)/gm, '<li class="ml-6 mb-3 pl-2 relative before:content-["•"] before:text-blue-500 before:font-bold before:absolute before:-left-4">')
    .replace(/^(\s*\d+\.\s+)/gm, '<li class="ml-6 mb-3 pl-2 list-decimal marker:text-blue-500 marker:font-semibold">')
    // Format bullet points
    .replace(/^(\s*-\s+)/gm, '<li class="ml-6 mb-3 pl-2 relative before:content-["-"] before:text-blue-500 before:font-bold before:absolute before:-left-4">')
    // Format paragraphs with better spacing
    .replace(/\n\n/g, '</p><p class="mb-6 text-gray-700 leading-relaxed text-base">')
    // Format bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    // Format emphasis
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800">$1</em>')
    // Format dividers with better styling
    .replace(/⸻/g, '<hr class="my-10 border-t-2 border-gray-200">')
    // Clean up formatting issues
    .replace(/<\/p><p[^>]*>(\s*<h[23])/g, '$1')
    .replace(/<\/h[23]>\s*<p[^>]*>/g, '</h3>')
    .replace(/<p[^>]*>\s*<\/p>/g, '')
    // Add proper list containers
    .replace(/(<li[^>]*>.*?<\/li>\s*)+/g, '<ul class="space-y-2 mb-6">$&</ul>')
    // Clean up nested formatting
    .replace(/<ul[^>]*>\s*<\/ul>/g, '');

  return `<div class="text-gray-700 space-y-4"><p class="mb-6 text-gray-700 leading-relaxed text-base">${formattedContent}</p></div>`;
};

export default LegalModal;
