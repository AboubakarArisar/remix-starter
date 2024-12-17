import type { MetaFunction } from "@remix-run/node";
import Header from "~/Header";
import Footer from "~/Footer";
import FeatureCard from "~/FeatureCard";

export const meta: MetaFunction = () => {
  return [
    { title: "First Remix app" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const features = [
  {
    title: "Fast Loading Times",
    description: "Optimized data fetching and streaming for speed.",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*jgOAO3wP44o5dCHU.jpg",
  },
  {
    title: "Simplified Data Management",
    description: "No need for complex APIs or state libraries.",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*jgOAO3wP44o5dCHU.jpg",
  },
  {
    title: "SEO-Friendly",
    description: "Server-rendered pages for better SEO.",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*jgOAO3wP44o5dCHU.jpg",
  },
  {
    title: "Web Standards",
    description: "Built with modern web standards in mind.",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*jgOAO3wP44o5dCHU.jpg",
  },
];

export default function Index() {
  return (
    <div className='flex min-h-screen bg-black relative items-center justify-center flex-col'>
      <div className='absolute top-0 w-full h-30 py-4 bg-slate-800 shadow'>
        <Header />
      </div>
      <div className=' mt-20 md:mt-0 md:absolute md:top-20'>
        <h1 className=' md:text-3xl text-center font-semibold text-yellow-300'>
          Welcome to the Remix application
        </h1>
      </div>
      <div className='p-4 mt-12'>
        <h1 className='md:text-3xl text-orange-400 font-bold text-center'>
          Why Choose Remix?
        </h1>
        <div className='flex flex-col md:flex-row w-full mb-12 md:mb-0 p-4 gap-4'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-30 py-4 bg-slate-800 shadow'>
        <Footer />
      </div>
    </div>
  );
}
