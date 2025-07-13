import {
  IconCloudUpload,
  IconCode,
  IconDeviceMobileCode,
  IconLayoutDashboard,
  IconRocket,
  IconServerCog,
  IconStack,
  IconUsers,
} from "@tabler/icons-react";
import { TextGenerateEffect } from "@/components/ui/text-effects";
import { About } from "@/components/ui/cards";

export default function FeaturesSection() {
  const abouts = [
    {
      title: "Custom Product Development",
      description:
        "We turn your ideas into fully functional web and mobile applications — tailored to your business needs.",
      icon: <IconCode />,
    },
    {
      title: "Full-Stack Expertise",
      description: "From backend architecture to sleek frontends — our team handles the entire tech stack.",
      icon: <IconStack />,
    },
    {
      title: "Cross-Platform Apps",
      description: "Build once, run everywhere. We create seamless experiences across iOS, Android, and the web.",
      icon: <IconDeviceMobileCode />,
    },
    {
      title: "Agile Collaboration",
      description: "Work closely with our team using agile methods, rapid iterations, and constant feedback.",
      icon: <IconUsers />,
    },
    {
      title: "Scalable Architecture",
      description: "We engineer systems built to grow — whether you’re serving 100 users or 100,000.",
      icon: <IconServerCog />,
    },
    {
      title: "UI/UX Design Focused",
      description: "Intuitive interfaces meet engaging experiences — designed with your users in mind.",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, cloud infrastructure, and stress-free launches — handled by us.",
      icon: <IconCloudUpload />,
    },
    {
      title: "Startup Friendly",
      description: "Whether you're MVP-ing or scaling fast, we’re the right tech partner at every stage.",
      icon: <IconRocket />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-6 w-full" id="about">
      <h1 className="mt-6 mx-auto text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
        About Tech Thrives
      </h1>
      <TextGenerateEffect
        className="text-center text-md max-w-2xl"
        words="We’re a product-focused development studio helping startups and businesses bring their tech ideas to life. From concept to deployment — we craft scalable, beautiful, and high-performing applications across web and mobile platforms."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {abouts.map((feature, index) => (
          <About key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}
