
import React, { useEffect, useRef } from 'react';

interface CommentSectionProps {
  theme: 'dark' | 'light';
  projectId?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ theme, projectId }) => {
  const commentBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentBoxRef.current) {
      commentBoxRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'arya-elang-samudra/portfolio-comments');
    script.setAttribute('issue-term', projectId || 'global-feedback');
    script.setAttribute('theme', 'github-dark'); 
    script.setAttribute('crossorigin', 'anonymous');

    if (commentBoxRef.current) {
      commentBoxRef.current.appendChild(script);
    }
  }, [projectId]);

  return (
    <div className="w-full mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/5 overflow-hidden">
      <div className="mb-8 md:mb-12 text-left">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">say something 👀</h3>
        <p className="text-[10px] md:text-sm text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">Public Feedback & Thoughts</p>
      </div>
      <div className="w-full">
        <div id="comments-container" ref={commentBoxRef} className="utterances-frame w-full" />
      </div>
    </div>
  );
};

export default CommentSection;
