"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const [fade, setFade] = useState(false);
  const fullText =
    "Our AI-powered solution will transform your content production process. In seconds, you can easily produce interesting and high-quality copy. This application is ideal for writers, marketers, and bloggers since it simplifies your workflow and boosts your creativity.";

  const router = useRouter();

  useEffect(() => {
    let index = 0;
    setFade(false);
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setFade(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [fullText]);

  const handleButtonClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex items-start justify-start">
      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="Background"
        fill
        className="object-cover w-full h-full absolute inset-0 z-0"
        priority
      />
      {/* Soft gradient  */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-fuchsia-900/20 to-black/80 z-10" />

      {/* Logo  */}
      <div className="fixed top-6 left-6 z-30 drop-shadow-lg">
        <Image src="/logo.svg" alt="Logo" width={110} height={36} priority />
      </div>

      {/* Floating Glass Card  */}
      <div
        className="
          relative z-30
          mt-28 ml-20
          w-full max-w-md
          py-12 px-10 sm:px-10
          bg-white/40
          backdrop-blur-2xl
          rounded-3xl
          shadow-2xl
          border border-fuchsia-200/30
          flex flex-col items-start
          space-y-7
          animate-[fadeInCard_0.9s_ease-out]
        "
        style={{
          boxShadow:
            "0 8px 36px 0 rgba(110,35,150,0.10), 0 1.5px 10px 3px rgba(182,96,205,0.09)",
        }}
      >
        <h1 className="font-black text-3xl sm:text-5xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-violet-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Gen-Content
        </h1>
        <p
          className={`
            font-medium text-base sm:text-lg min-h-[85px] sm:min-h-[110px]
            text-slate-800 dark:text-slate-200
            whitespace-pre-line
            transition-opacity duration-400
            ${fade ? "opacity-100" : "opacity-80"}
            animate-[fadeInText_0.3s_ease-in]
          `}
          style={{
            textShadow: "0 2px 18px rgba(182,96,205,0.10)",
            letterSpacing: ".01em",
            lineHeight: "1.5",
          }}
        >
          {text}
        </p>

        {/* Centered button */}
        <div className="w-full flex justify-center">
          <button
            className="
              bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 
              text-white font-semibold py-3 px-8 
              rounded-xl text-lg shadow-xl
              hover:scale-105 hover:from-purple-700 hover:to-pink-600 
              transition-transform focus:outline-none focus:ring-4 focus:ring-fuchsia-300
              flex items-center justify-center
            "
            onClick={handleButtonClick}
          >
            <span className="inline-block animate-pulse mr-2">🚀</span>
            Get Started
          </button>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInText {
          from {
            opacity: 0.75;
            filter: blur(2px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes fadeInCard {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
