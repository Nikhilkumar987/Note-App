import React from "react";
import { useNote } from "../../Context/contex";
import { useParams } from "react-router-dom";

function SingleNote() {
  const { notes } = useNote();
  const { id } = useParams();

  const note = notes.find((e) => e.id.toString() === id);

  if (!note) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Note Not Found</h1>
        <p className="text-gray-500">The note you're looking for does not exist or was deleted.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-indigo-700">{note.title}</h1>
      <p className="mt-4 text-gray-600">{note.content}</p>
    </div>
  );
}

export default SingleNote;
