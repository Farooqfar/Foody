import Admin_Nav from "@/app/components/Admin_Nav";
import React from "react";

export default function page() {
  return (
    <>
      <Admin_Nav />
      <section className="w-full h-full">
        <div className="w-full flex justify-end items-center p-8">
          <button className="w-20 bg-amber-600">Add + </button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td className="border">No</td>
                <td>Name</td>
                <td>Price</td>
                <td>Sale</td>
                <td>Active/Not</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
          </table>
        </div>
      </section>
    </>
  );
}
