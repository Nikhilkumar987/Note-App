import React, { useEffect, useState } from "react";
import { createContext,useContext } from "react";


export const NoteContext = createContext()

 export function NoteContextProvider({children})
 {
    const [title ,setTitle] = useState('');
    const [notes,setNote] = useState([]);
    const [content,setContent] = useState('') 


    useEffect(()=>
    {
        const storednotes = JSON.parse(localStorage.getItem("notes"));
        if(storednotes)
        {
            setNote(storednotes);
        }
    },[])

    useEffect(()=>
    {
        localStorage.setItem("notes",JSON.stringify(notes))
    },[notes])


    function deleteNote(id) {
        setNote((prevNotes) => prevNotes.filter((note) => note.id !== id));
      }

    function addNote()
    {
        const newNote={
            id: Date.now(),
            title:title,
            content:content
        }
        setNote((prevNote)=>[...prevNote,newNote]);
        setTitle('');
        setContent('');
    }

    return(
        <NoteContext.Provider value={{title,setTitle,content,setContent,notes,addNote,deleteNote}}>
            {children}
        </NoteContext.Provider>
    )
 }
 
 export const  useNote = ()=> {
    return useContext(NoteContext);
 }