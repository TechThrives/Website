import { IconWorldCode, IconRocket, IconDeviceMobileCode } from "@tabler/icons-react";
import { ServiceCard } from "@/components/ui/cards";
import { TextGenerateEffect } from "@/components/ui/text-effects";

const services = [
  {
    title: "Web App Development",
    description: [
      "Modern, scalable, and secure web applications.",
      "Responsive design, fast performance, full-stack solutions.",
      "Perfect for SaaS, dashboards, and business tools.",
    ],
    icon: <IconWorldCode className="w-8 h-8 text-slate-700 dark:text-slate-300" />,
  },
  {
    title: "Mobile App Development",
    description: [
      "Cross-platform apps for iOS & Android.",
      "Native-like performance using Flutter or React Native.",
      "Optimized for speed, usability, and user retention.",
    ],
    icon: <IconDeviceMobileCode className="w-8 h-8 text-slate-700 dark:text-slate-300" />,
  },
  {
    title: "MVP Launch",
    description: [
      "Validate your idea with a working MVP fast.",
      "Lean builds with only what matters.",
      "Designed for growth, feedback, and iteration.",
    ],
    icon: <IconRocket className="w-8 h-8 text-slate-700 dark:text-slate-300" />,
  },
];

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mx-6 w-full" id="services">
      <h1 className="my-6 mx-auto text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
        Our Services
      </h1>
      <TextGenerateEffect
        className="text-center text-md max-w-2xl"
        words="From strategy to scalable code, we design and develop world-class web apps, mobile apps, and MVPs — fast, clean, and with impact."
      />
      <div className="flex flex-wrap gap-8 my-12 items-center justify-center mx-6 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
