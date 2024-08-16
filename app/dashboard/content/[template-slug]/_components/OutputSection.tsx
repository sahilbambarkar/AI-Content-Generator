import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef: any = useRef();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput || '');
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 2000);
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          <Copy className='w-4 h-4' />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue='Your result will appear here'
        initialEditType='wysiwyg'
        height='600px'
        useCommandShortcut={true}
      />
      {showPrompt && (
        <div className='fixed top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg'>
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}

export default OutputSection;