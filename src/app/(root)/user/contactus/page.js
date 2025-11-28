import React from "react";

export default function page() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <form className=" p-2 flex flex-col gap-3">
          <div>
            <h1>Name</h1>
            <input
              type="text"
              required
              className="w-100 border p-1 caret-amber-500"
              placeholder="Name"
            />
          </div>
          <div>
            <h1>Phone No</h1>
            <input
              type="number"
              required
              className="w-100 border p-1 caret-amber-500"
              placeholder="Phone no"
            />
          </div>
          <div>
            <h1>What use want</h1>
            <textarea
              className="w-100 border p-1 caret-amber-500 resize-none h-40"
              placeholder="Ask a Question"
            ></textarea>
          </div>
          <div>
            <button className="bg-amber-600 w-28 text-center cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
