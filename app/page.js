import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-[25px] md:mx-[100px]">
      <Hero />
      <div className="bg-accent w-full rounded-xl px-10 py-7 md:px-15 md:py-5">
        <h2 className="text-[var(--notBlack)] text-left md:text-center font-[humane] text-[60px] md:text-[80px] font-bold leading-tight">
          About
        </h2>
        <p className="text-[var(--notBlack)] text-lg md:text-xl">
          Hi, I’m Rahul, a Computer Science student passionate about developing
          user-friendly applications and enhancing digital experiences. With a
          strong interest in modern technologies, I focus on creating solutions
          that make a difference. I love working on projects that combine
          creativity with problem-solving, always aiming to deliver meaningful
          results.
        </p>
      </div>
    </div>
  );
}
