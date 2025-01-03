import React from "react"

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Muhammad Ibrahim: Navigating the Secrets of Technology in Tech Chronicles Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100 ">
          Welcome to my blog! As a front-end web developer, I share insights, tutorials, and innovations in tech, focusing on AI, ML, and modern web frameworks like Next.js. Whether you're a developer or tech enthusiast, you'll find inspiration and knowledge here. Let's explore the future of the web together!
          </p>

          <div className="mx-auto max-w-7xl px-5">
            <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Categories</h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in">
            {[
              "Technology",
              "Artificial Intelligence",
              "Web Development",
              "Next JS",
              "TypeScript",
              "UI/UX Design",
            ].map((category, index) => (
              <div key={index}
              className="relative group p-6 bg-white text-neutral-600 rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center">
                <p className="text-center text-lg font-semibold">{category}</p>
              </div>
            ))}

          </div>

 
          </div>
      </section>
    </div>
  )
}
