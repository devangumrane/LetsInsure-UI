import React, { useEffect, useState, useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

const slides = [
  { id: 1, gradient: "from-indigo-200 to-indigo-400" },
  { id: 2, gradient: "from-purple-200 to-purple-400" },
  { id: 3, gradient: "from-orange-200 to-orange-400" },
  { id: 4, gradient: "from-pink-200 to-pink-400" },
  { id: 5, gradient: "from-sky-200 to-sky-400" },
];

const AUTO_SLIDE_DELAY = 2000;

export default function AppCTA() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  /* Auto slide */
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section className="bg-[#F2F2F2] py-20">
      <MaxWidthWrapper>
        {/* FIXED HEIGHT STAGE */}
        <div
          className="relative h-[420px] flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="relative flex items-center gap-10">
            {slides.map((slide, index) => {
              const isActive = index === active;
              const isLeft = index === active - 1;
              const isRight = index === active + 1;

              if (!isActive && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={slide.id}
                  animate={{
                    width: isActive ? 700 : 398,
                    height: isActive ? 336 : 241,
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="
                    rounded-3xl bg-white shadow-xl
                    flex items-center justify-between
                    px-10
                    cursor-pointer
                  "
                  onClick={() => setActive(index)}
                >
                  {/* Left Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">
                      Check Vehicle PUC
                    </h3>
                    <p className="text-slate-500">
                      Only on LetsInsure app
                    </p>

                    <div className="w-28 h-28 bg-gray-600 text-white flex items-center justify-center text-xs rounded-lg">
                      QR CODE
                    </div>
                  </div>

                  {/* Phone Mock */}
                  <div
                    className={`w-40 h-72 rounded-2xl bg-gradient-to-b ${slide.gradient} shadow-lg`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="absolute bottom-[-12px] flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition
                  ${
                    i === active
                      ? "bg-yellow-400"
                      : "bg-yellow-400/40"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
