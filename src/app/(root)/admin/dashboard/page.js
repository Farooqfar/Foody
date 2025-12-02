import Admin_Nav from "@/app/components/Admin_Nav";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Admin_Nav />
      <section className="w-full h-full">
        <div className="w-full flex justify-end items-center p-8">
          <Link href="addProduct" className="w-20 bg-amber-600">
            Add +
          </Link>
        </div>
        <div className="w-full flex justify-center items-center p-10">
          <table class="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-amber-600">
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Active</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              <tr className="odd:bg-gray-800 text-center">
                <td className="p-2">1</td>
                <td className="p-2">Pizza</td>
                <td className="p-2">1000</td>
                <td className="p-2">sale</td>
                <td className="p-2">
                  <button>deactive</button>
                </td>
                <td className="p-2">
                  <Link
                    href="#"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    edit
                  </Link>
                </td>
                <td className="p-2 text-red-600 underline">
                  <Link href="#">delete</Link>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 text-center">
                <td className="p-2">1</td>
                <td className="p-2">Pizza</td>
                <td className="p-2">1000</td>
                <td className="p-2">sale</td>
                <td className="p-2">
                  <button>deactive</button>
                </td>
                <td className="p-2">
                  <Link
                    href="#"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    edit
                  </Link>
                </td>
                <td className="p-2 text-red-600 underline">
                  <Link href="#">delete</Link>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 text-center">
                <td className="p-2">1</td>
                <td className="p-2">Pizza</td>
                <td className="p-2">1000</td>
                <td className="p-2">sale</td>
                <td className="p-2">
                  <button>deactive</button>
                </td>
                <td className="p-2">
                  <Link
                    href="#"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    edit
                  </Link>
                </td>
                <td className="p-2 text-red-600 underline">
                  <Link href="#">delete</Link>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 text-center">
                <td className="p-2">1</td>
                <td className="p-2">Pizza</td>
                <td className="p-2">1000</td>
                <td className="p-2">sale</td>
                <td className="p-2">
                  <button>deactive</button>
                </td>
                <td className="p-2">
                  <Link
                    href="#"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    edit
                  </Link>
                </td>
                <td className="p-2 text-red-600 underline">
                  <Link href="#">delete</Link>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 text-center">
                <td className="p-2">1</td>
                <td className="p-2">Pizza</td>
                <td className="p-2">1000</td>
                <td className="p-2">sale</td>
                <td className="p-2">
                  <button>deactive</button>
                </td>
                <td className="p-2">
                  <Link
                    href="#"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    edit
                  </Link>
                </td>
                <td className="p-2 text-red-600 underline">
                  <Link href="#">delete</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
