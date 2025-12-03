"use client";
import React, { useState } from "react";

export default function page() {
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    price: "",
    sale: false,
  });
  const handleValue = (e) => {
    const { name, value } = e.target;
    setEdit((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e) => {
    e.preventdefault();
    console.log(edit);
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <from
          className="w-90 flex flex-col gap-2 border p-4 rounded max-md:w-full"
          onSubmit={handleForm}
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
            <label class="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                class="w-5 h-5 accent-amber-500"
                name="sale"
                value={edit.sale}
                onChange={handleValue}
              />
              <span class="text-gray-700">Sale</span>
            </label>
          </div>
          <div>
            <button className="bg-amber-600 w-full hover:cursor-pointer">
              Edit
            </button>
          </div>
        </from>
      </section>
    </>
  );
}
