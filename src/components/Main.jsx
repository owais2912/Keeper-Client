import React, { useEffect, useState } from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import { getNotes, addNote, deleteNote } from "../api/api";

const Main = () => {
  const [notesList, setNotesList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const notes = await getNotes();
      setNotesList(notes);
    };
    fetchData();
  }, []);

  const handleAddNote = async (note) => {
    await addNote(note);
    const updatedNotes = await getNotes();
    setNotesList(updatedNotes);
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    const updatedNotes = await getNotes();
    setNotesList(updatedNotes);
  };
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Main;
