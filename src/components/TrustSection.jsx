import React, { useEffect, useState, useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ShieldCheck, CheckCircle } from "lucide-react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";

/* ---------------------------
   DATA
---------------------------- */
const stats = [
  { label: "Policies Sold", value: "5 Crores+" },
  { label: "Vehicles Insured", value: "4 Crores+" },
  { label: "Lives Insured", value: "2.5 Crores+" },
  { label: "Claims Settled", value: "22 Lacs+" },
  { label: "Paid-in Claims", value: "8500 Crores+" },
];

/* ---------------------------
   COUNT UP COMPONENT
---------------------------- */
function CountUp({ value, start }) {
  const number = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.\s]/g, "");

  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(motionValue, number, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });

    return controls.stop;
  }, [start, number, motionValue]);

  return (
    <span>
      {displayValue} {suffix}
    </span>
  );
}

/* ---------------------------
   MAIN SECTION
---------------------------- */
export default function TrustSection() {
  const statsRef = useRef(null);

  const isInView = useInView(statsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="w-full bg-white py-20">
      <MaxWidthWrapper>
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why{" "}
            <span className="text-primary">7 Crore+ Customers</span>{" "}
            trust Digit Insurance?
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary/20" />
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Illustration */}
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="relative flex aspect-video w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-blue-50">
              <div className="absolute inset-0 -translate-x-1/2 skew-x-12 bg-blue-100/50" />
              <ShieldCheck
                size={120}
                className="relative z-10 text-blue-500/20"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/50 bg-white/80 p-4 backdrop-blur shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">
                      Super Fast Claims
                    </p>
                    <p className="text-xs text-slate-500">
                      Settled in minutes, not days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid w-full grid-cols-2 gap-4 lg:w-1/2"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="
                  rounded-2xl border border-gray-200 bg-white p-6
                  transition-all duration-300 ease-out
                  hover:border-[#F9BD3C]
                  hover:shadow-[0_6px_10px_rgba(249,189,60,0.35)]
                "
              >
                <h3 className="mb-1 text-3xl font-bold text-slate-800">
                  <CountUp
                    value={stat.value}
                    start={isInView}
                  />
                </h3>
                <p className="font-semibold text-slate-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
