import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_PROXY,
});

export const getNotes = async (token) => {
  try {
    const result = await api.get("/api/notes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const registerUser = async (formData) => {
  try {
    const response = await api.post("/api/register", formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error(error.response.data.message);
    } else {
      console.log(error);
      throw error;
    }
  }
};

export const deleteNote = async (id) => {
  try {
    await api.post(`/api/delete-note/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error("Unable to login. Please check your credentials.");
  }
};
