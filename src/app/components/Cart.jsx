import Image from "next/image";
import React from "react";

export default function Cart() {
  return (
    <>
      <section>
        <table className="border w-full">
          <thead>
            <tr>
              <th className="border">No</th>
              <th className="border">Name</th>
              <th className="border">Price</th>
              <th className="border">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border p-2">1</td>
              <td className="border p-2">
                <div className="flex justify-around items-center gap-5">
                  <Image
                    src="/p2.png"
                    alt="image"
                    width={100}
                    height={100}
                    className="w-20"
                  />
                  <h1>Pizza</h1>
                </div>
              </td>
              <td>1999 PKR</td>
              <td className="border p-2">
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-2  absolute bottom-2 right-2">
          <h1 className="text-2xl">Total 1999</h1>
          <button className="border-white border-2  p-2 text-white rounded hover:cursor-pointer hover:text-amber-700 hover:bg-white transition-all duration-300">
            Check Out
          </button>
        </div>
      </section>
    </>
  );
}
