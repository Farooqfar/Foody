import Image from "next/image";
import Navbar from "./components/Navbar";

export default function page() {
  return (
    <>
      <main className="w-full h-screen  p-5">
        <Navbar />
        <section className="w-full h-full flex bg-linear-to-tr to-black from-gray-800">
          <div className="w-[50%] h-full  flex flex-col justify-center gap-10">
            <h1 className="text-white">Premium Restaurant</h1>
            <h1 className="text-white font-bold text-9xl">
              Anida <br />
              Dedelay
            </h1>

            <p className="text-white">
              best healthy salad served in our Restaurant
            </p>
            <button className="w-28 p-2 bg-amber-600 text-white ">
              Learn More
            </button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <Image
              src="/salads.png"
              width={100}
              height={100}
              className="w-[97%]"
            />
          </div>
        </section>
      </main>
    </>
  );
}
