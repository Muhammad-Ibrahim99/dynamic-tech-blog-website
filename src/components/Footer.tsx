import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-50">

      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src="/images/my-pic.png"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <span className="ml-3 text-xl">Muhammad Ibrahim</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 Dynamic Blog —
          <a
            href="https://www.linkedin.com/in/muhammad-ibrahim-65b78a2bb/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank">
            @Muhammad Ibrahim
          </a>
        </p>

        {/* Social Links  */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-500 hover:text-blue-600"
              href="https://www.facebook.com/profile.php?id=100051797282643"
              target="blank"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>

            <a
              className="ml-3 text-gray-500 hover:text-red-500"
              href="https://www.instagram.com/999_muhammad_ibrahim"
              target="blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>

            <a
              className="ml-3 text-gray-500 hover:text-blue-600"
              href="https://www.linkedin.com/in/muhammad-ibrahim-65b78a2bb"
              target="blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>


    </footer>
  );
}

export default Footer;
