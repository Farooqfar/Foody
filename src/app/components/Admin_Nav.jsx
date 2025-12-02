import Image from "next/image";
import React from "react";

export default function Admin_Nav() {
  return (
    <>
      <nav className="w-full bg-gray-900 p-1 mt-1">
        <ul className="flex items-center justify-end gap-3 ">
          <li>
            <Image
              src="/profile.jpg"
              width={100}
              height={100}
              alt="profile"
              className="rounded-full w-10"
            />
          </li>
          <li>Admin</li>
          <li>
            <button className="bg-amber-600 p-1 rounded hover:cursor-pointer ">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
