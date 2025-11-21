import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="w-full h-screen  p-5">
        <Navbar />
        <section className="w-full h-full flex bg-linear-to-tl to-black from-gray-800 p-5">
          <div className="w-[50%] h-full  flex flex-col justify-center gap-10">
            <h1 className="text-white">Premium Restaurant</h1>
            <h1 className="text-white font-bold text-9xl">
              Anida <br />
              Dedelay
            </h1>

            <p className="text-white">
              best healthy salad served in our Restaurant
            </p>
            <button className="w-28 p-2 bg-green-600 text-white hover:bg-green-600 transition-all duration-200  cursor-pointer hover:scale-105">
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
        <section className="w-full h-100 bg-gray-800 flex p-5">
          <div className="w-[50%] h-full flex  flex-col justify-around">
            <h1 className="text-5xl uppercase font-bold">orange benefit</h1>
            <div className="flex gap-8">
              <div>
                <Image
                  src="/orange.png"
                  alt="orange"
                  width={100}
                  height={100}
                  className="w-48"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-3">
                <p>
                  Rich in Vitamin C to boost immunity and keep you energized
                  every day
                </p>
                <Link href="#" className="w-28 bg-green-600 p-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <Image
              src="/orange1.png"
              alt="orange"
              width={100}
              height={100}
              className="w-100"
            />
          </div>
        </section>
      </main>
    </>
  );
}
