import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_PROXY,
});

export const getNotes = async () => {
  try {
    const result = await api.get("/api/notes");
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addNote = async (note) => {
  try {
    await api.post("/api/add-note", note);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (id) => {
  try {
    await api.post(`/api/delete-note/${id}`);
  } catch (error) {
    console.log(error);
  }
};
