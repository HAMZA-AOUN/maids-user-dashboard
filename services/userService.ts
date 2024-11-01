import axios from "axios";

export const fetchUsers = async (page: string) => {
  const response = await axios.get(`/api/users?page=${page}`);
  return response.data;
};

export const fetchUserById = async (id: string) => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
};
