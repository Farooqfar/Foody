"use client";
import { api } from "@/app/lib/axios";
import React, { useState } from "react";

export default function page() {
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    sale: false,
  });
  const handleValue = (e) => {
    const { name, value, type, checked, files } = e.target;
    setEdit((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", edit.name);
    formData.append("description", edit.description);
    formData.append("price", edit.price);
    formData.append("image", edit.image);
    formData.append("sale", edit.sale);
    const res = await api("/addProduct", formData);
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <form
          onSubmit={handleForm}
          className="w-90 flex flex-col gap-2 border p-4 rounded max-md:w-full"
        >
          <div>
            <h1>Name</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border w-full caret-amber-700 p-1 font-mono"
              value={edit.name}
              onChange={handleValue}
            />
          </div>
          <div>
            <h1>Description</h1>
            <input
              type="text"
              placeholder="Name"
              name="description"
              className="border w-full caret-amber-700 p-1 font-mono"
              value={edit.description}
              onChange={handleValue}
            />
          </div>
          <div>
            <h1>Price</h1>
            <input
              type="number"
              placeholder="Name"
              name="price"
              className="border w-full caret-amber-700 p-1 font-mono"
              value={edit.price}
              onChange={handleValue}
            />
          </div>
          <div>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-amber-500"
                name="sale"
                value={edit.sale}
                onChange={handleValue}
              />
              <span className="text-gray-600">Sale</span>
            </label>
          </div>
          <div>
            <input type="file" name="file" />
          </div>
          <div>
            <button className="bg-amber-600 w-full hover:cursor-pointer">
              Add
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
