import axiosInstance from "./axios";

const getContact = (itemsPerPage, page) => axiosInstance.get("/api/contact");

const createDiscount = (data) =>
  axiosInstance.post("/api/contact", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const updateDiscount = (id, data) =>
  axiosInstance.post(`/api/contact`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const deleteDiscount = (id) => axiosInstance.delete(`/api/contact`, { id: id });

export { getContact, createDiscount, updateDiscount, deleteDiscount };
