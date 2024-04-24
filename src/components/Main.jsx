import React, { useEffect, useState } from "react";
import CreateArea from "../components/Notes/CreateArea";
import Note from "../components/Notes/Note";
import { getNotes, addNote, deleteNote } from "../api/api";
import HOC from "../pages/hoc";

const Main = () => {
  const [notesList, setNotesList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notes = await getNotes(token);
        setNotesList(notes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAddNote = async (note) => {
    await addNote(note);
    const updatedNotes = await getNotes(token);
    setNotesList(updatedNotes);
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    const updatedNotes = await getNotes(token);
    setNotesList(updatedNotes);
  };
  return (
    <>
      <CreateArea onAdd={handleAddNote} />
      {notesList && notesList.length > 0 ? (
        notesList.map((noteItem, index) => (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={handleDeleteNote}
          />
        ))
      ) : (
        <p>No notes found</p>
      )}
    </>
  );
};

export default HOC(Main);
