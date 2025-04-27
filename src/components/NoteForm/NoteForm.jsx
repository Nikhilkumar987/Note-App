import React, { useState } from "react";
import { useNote } from "../../Context/contex";
function NoteForm() {

   const {title,setTitle,addNote,content,setContent}  = useNote();
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
      
      {/* Title Input */}
      <div>
        <input
          type="text"
          value={title}
          placeholder="Enter note title..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>

      {/* Text Area */}
      <div>
        <textarea
          placeholder="Write your note here..."
          rows="6"
          value={content}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 resize-none"
          onChange={(e)=>setContent(e.target.value)}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button onClick={addNote}
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
        >
          Save Note
        </button>
      </div>
    </div>
  );
}

export default NoteForm;
