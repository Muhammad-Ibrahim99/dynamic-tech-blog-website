import React from "react";
import BlogCard from "../components/BlogCard";

export default function Mega() {

  const posts = [


    {
      id: "1",
      title: "The Role of AI in Web Development",
      description: "Discover how artificial intelligence is revolutionizing front-end development with smarter tools, automated testing, and personalized user experiences.",
      date: "2024-12-31",
      imageUrl: "images/p1-ai.webp",
    },

    {
      id: "2",
      title: "TypeScript: The Backbone of Scalable Web Projects",
      description: "Discover how TypeScript enhances JavaScript by providing type safety and scalability for large front-end applications.",
      date: "2024-12-20",
      imageUrl: "images/p2-typescript.jpg",
    },

    {
      id: "3",
      title: "The Rise of Static Site Generators",
      description: "Learn why static site generators like Next.js are gaining popularity for creating fast, secure, and SEO-friendly websites.",
      date: "2024-12-13",
      imageUrl: "images/p3-nextjs.jpg",
    },

    {
      id: "4",
      title: "Machine Learning in Personalized Web Experiences",
      description: "Learn how machine learning algorithms tailor web content to individual users by analyzing browsing behavior and preferences.",
      date: "2024-12-5",
      imageUrl: "images/p4-ml.webp",
    },

    {
      id: "5",
      title: "The Future of Web Design: Leveraging AR and VR",
      description: "Explore how augmented and virtual reality are transforming web design, creating immersive experiences for e-commerce, education, blogs, and more.",
      date: "2024-11-29",
      imageUrl: "images/p5-vr.webp",
    },

    {
      id: "6",
      title: "Serverless Architectures for Scalable Web Apps",
      description: "An overview of how serverless technology simplifies front-end development by offloading server management to cloud providers.",
      date: "2024-9-22",
      imageUrl: "images/p6-web-apps.jpg",
    },

    {
      id: "7",
      title: "AI-Powered Design Tools: Shaping the Future of UI/UX",
      description: "Delve into AI-based design tools like Figma's AI plugins, which are simplifying complex design workflows for developers.",
      date: "2024-9-10",
      imageUrl: "images/p7-designer.jpg",
    },

    {
      id: "8",
      title: "Progressive Web Apps (PWAs): Bridging the Gap Between Web and Mobile",
      description: "Understand how PWAs combine the best of web and mobile apps, offering offline functionality and native app-like experiences.",
      date: "2024-8-28",
      imageUrl: "images/p8-laptop-phone.jpg",
    },

    {
      id: "9",
      title: "The Impact of AI on Code Quality and Debugging",
      description: "See how AI-driven tools like GitHub Copilot and ChatGPT are changing the game for writing cleaner, bug-free code.",
      date: "2024-8-19",
      imageUrl: "images/p9-developer.jpg",
    },

    {
      id: "10",
      title: "Web3 and the Front-End: Decentralized Web Development",
      description: "Explore how blockchain technology and decentralized apps (dApps) are reshaping the future of front-end development.",
      date: "2024-7-26",
      imageUrl: "images/p10-web3.jpg",
    },


  ];

  return (
      <div className="my-8">
        <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change"> Exploring the World of AI and Technology</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div className="fade-in" key={post.id}>
              <div className="blog-card">
                <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
