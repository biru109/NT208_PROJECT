import React from 'react';

function LessonCard({ title, videoUrl }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[#386DCC] mb-4 text-left">{title}</h2>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={title}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default LessonCard;
