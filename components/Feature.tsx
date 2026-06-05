import {
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Milk,
} from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={52} strokeWidth={1.2} />,
    title: "UNCOMPROMISED",
    subtitle: "PURITY",
  },
  {
    icon: <Leaf size={52} strokeWidth={1.2} />,
    title: "100% NATURAL:",
    subtitle: "NO PRESERVATIVES",
  },
  {
    icon: <ShieldCheck size={52} strokeWidth={1.2} />,
    title: "FINEST",
    subtitle: "QUALITY",
  },
  {
    icon: <Milk size={52} strokeWidth={1.2} />,
    title: "FRESH,",
    subtitle: "PASTEURIZED MILK",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#f4f0e3] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-[#0096d6] text-5xl italic font-serif mb-20">
          Since 2026, we&apos;ve been dedicated to delivering
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 border">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-[#0096d6] mb-5">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-[#0096d6] text-sm font-bold tracking-widest uppercase leading-5">
                {item.title}
              </h3>

              <p className="text-[#0096d6] text-sm font-bold tracking-widest uppercase leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;