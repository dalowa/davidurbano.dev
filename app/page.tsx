"use client"

import Image from "next/image";

export default function Home() {
  return (

    <>
      <section className="flex flex-col w-[75vw] min-h-[80vh] justify-center items-center gap-[1vh] text-white-dalowa mb-[10vh]">
        <div className="glowing-bg">
          <Image src="/dalowaclear.png" alt="David Urbano" priority width={300} height={300} className="" />
        </div>
        
        <h1 className="text-center font-extrabold text-4xl texto-background">David Urbano</h1>
        <p className="text-base leading-relaxed text-center font-light max-w-xs">
          A software engineering student who found a personal passion in programming, always curious and always learning. 
          I am a firm believer that we can make a better world through software.
        </p>
      </section>
      
      <section className="border-2 border-red-dalowa flex flex-col min-h-[80vh] w-[75vw] p-8 text-white justify-center">

      </section>
    </>
  );
}
