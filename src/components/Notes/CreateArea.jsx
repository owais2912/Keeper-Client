import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);
  const authenticated = JSON.parse(localStorage.getItem("user-data"));
  const userId = authenticated ? authenticated.id : null;

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleAdd(e) {
    const noteWithUserId = { ...note, userId: userId };
    props.onAdd(noteWithUserId);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            value={note.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        )}

        <textarea
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
