
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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-3xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-100 pb-4 ${isChinese ? 'font-source-han-sans' : ''}`}>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-8 px-2">
          <div 
            className={`prose prose-xl max-w-none leading-8 text-gray-800 ${isChinese ? 'font-source-han-sans' : 'font-sans'}`}
            dangerouslySetInnerHTML={{ __html: formatContent(content, isChinese) }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const formatContent = (content: string, isChinese: boolean): string => {
  let formattedContent = content;

  // Enhanced table formatting for privacy policy
  if (content.includes('資料類別') || content.includes('Data Category') || content.includes('数据类别')) {
    // Table 1: Data Categories
    const tablePattern1 = /(資料類別|Data Category|数据类别)[\s\S]*?(我們只收集|We only collect|我们只收集)/;
    const match1 = formattedContent.match(tablePattern1);
    if (match1) {
      const tableContent = match1[0];
      const rows = tableContent.split('\n').filter(row => row.trim());
      let table = '<div class="my-12 overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg bg-white"><table class="w-full border-collapse"><thead class="bg-gradient-to-r from-blue-50 to-indigo-50">';
      
      // Header row
      if (isChinese) {
        table += '<tr><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">資料類別</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">具體內容</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">收集方式 / 來源</th></tr>';
      } else {
        table += '<tr><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">Data Category</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">Specific Content</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">Collection Method / Source</th></tr>';
      }
      
      table += '</thead><tbody>';
      
      // Find table rows
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
          table += `<tr class="${bgClass} hover:bg-blue-50 transition-colors duration-300">`;
          table += `<td class="border-b border-gray-200 px-8 py-6 font-semibold text-gray-900 text-lg">${cells[0].trim()}</td>`;
          table += `<td class="border-b border-gray-200 px-8 py-6 text-gray-700 text-lg leading-relaxed">${cells[1].trim()}</td>`;
          table += `<td class="border-b border-gray-200 px-8 py-6 text-gray-700 text-lg leading-relaxed">${cells[2].trim()}</td>`;
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
      let table = '<div class="my-12 overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg bg-white"><table class="w-full border-collapse"><thead class="bg-gradient-to-r from-blue-50 to-indigo-50">';
      
      // Header row
      if (isChinese) {
        table += '<tr><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">類別</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">目的</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">保護措施</th></tr>';
      } else {
        table += '<tr><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">Category</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">Purpose</th><th class="border-b-2 border-gray-300 px-8 py-6 text-left font-bold text-gray-900 text-xl bg-blue-50">Protection Measures</th></tr>';
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
          table += `<tr class="${bgClass} hover:bg-blue-50 transition-colors duration-300">`;
          table += `<td class="border-b border-gray-200 px-8 py-6 font-semibold text-gray-900 text-lg">${cells[0].trim()}</td>`;
          table += `<td class="border-b border-gray-200 px-8 py-6 text-gray-700 text-lg leading-relaxed">${cells[1].trim()}</td>`;
          table += `<td class="border-b border-gray-200 px-8 py-6 text-gray-700 text-lg leading-relaxed">${cells[2].trim()}</td>`;
          table += '</tr>';
        }
      });
      
      table += '</tbody></table></div>';
      
      formattedContent = formattedContent.replace(tablePattern2, table + '\n\n$4');
    }
  }

  // Enhanced section and paragraph formatting
  formattedContent = formattedContent
    // Main section headers with enhanced styling
    .replace(/^(\d+\.\s+[^\n]+)/gm, '<div class="section-header"><h2 class="text-2xl font-bold text-gray-900 mt-12 mb-8 pb-4 border-b-3 border-blue-200 bg-gradient-to-r from-blue-50 to-transparent px-6 py-4 rounded-lg">$1</h2></div>')
    // Subsection headers
    .replace(/^([a-z]\)\s+[^\n]+)/gm, '<h3 class="text-xl font-semibold text-gray-800 mt-8 mb-6 pl-4 border-l-4 border-blue-400">$1</h3>')
    // Enhanced bullet points
    .replace(/^(\s*•\s+)/gm, '<li class="ml-8 mb-4 pl-3 text-lg leading-relaxed relative before:content-["●"] before:text-blue-600 before:font-bold before:absolute before:-left-6 before:top-0">')
    // Enhanced numbered lists
    .replace(/^(\s*\d+\.\s+)/gm, '<li class="ml-8 mb-4 pl-3 text-lg leading-relaxed list-decimal marker:text-blue-600 marker:font-bold marker:text-xl">')
    // Enhanced dash lists
    .replace(/^(\s*-\s+)/gm, '<li class="ml-8 mb-4 pl-3 text-lg leading-relaxed relative before:content-["—"] before:text-blue-600 before:font-bold before:absolute before:-left-6 before:top-0">')
    // Enhanced paragraphs
    .replace(/\n\n/g, '</p><p class="mb-8 text-gray-700 leading-relaxed text-lg">')
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 bg-yellow-50 px-1 rounded">$1</strong>')
    // Emphasis
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800 font-medium">$1</em>')
    // Enhanced dividers
    .replace(/⸻/g, '<hr class="my-12 border-t-3 border-gradient-to-r from-blue-200 via-gray-300 to-blue-200">')
    // Clean up formatting
    .replace(/<\/p><p[^>]*>(\s*<div class="section-header">)/g, '$1')
    .replace(/<\/p><p[^>]*>(\s*<h[23])/g, '$1')
    .replace(/<\/h[23]>\s*<p[^>]*>/g, '</h3>')
    .replace(/<p[^>]*>\s*<\/p>/g, '')
    // Wrap lists properly
    .replace(/(<li[^>]*>.*?<\/li>\s*)+/g, '<ul class="space-y-3 mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">$&</ul>')
    // Clean up empty lists
    .replace(/<ul[^>]*>\s*<\/ul>/g, '');

  return `<div class="legal-content text-gray-800 space-y-6 bg-white"><p class="mb-8 text-gray-700 leading-relaxed text-lg">${formattedContent}</p></div>`;
};

export default LegalModal;
