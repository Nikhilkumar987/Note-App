import React, { useState } from "react";
import { createContext,useContext } from "react";


export const NoteContext = createContext()

 export function NoteContextProvider({children})
 {
    const [title ,setTitle] = useState('');
    const [notes,setNote] = useState([]);
    const [content,setContent] = useState('') 

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
        <NoteContext.Provider value={{title,setTitle,content,setContent,notes,addNote}}>
            {children}
        </NoteContext.Provider>
    )
 }
 
 export const  useNote = ()=> {
    return useContext(NoteContext);
 }