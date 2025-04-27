import React from "react";
import { useNote } from "../../Context/contex";
import { Link } from "react-router-dom";

function NoteList() {
    const { notes, deleteNote } = useNote();  // get deleteNote function too

    if (notes.length === 0) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
                <p className="text-gray-500">There are no notes yet! Start by creating some notes ✍️</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notes.map((note) => (
                    <div 
                        key={note.id} 
                        className="block p-6 rounded-lg shadow-md bg-white hover:bg-indigo-50 transition duration-300 relative"
                    >
                        <Link to={`/notes/${note.id}`}>
                            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{note.title}</h2>
                            <p className="text-gray-500 line-clamp-2">{note.content}</p>
                        </Link>

                        {/* Delete Button */}
                        <button
                            onClick={() => deleteNote(note.id)}
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                            ✖
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoteList;
