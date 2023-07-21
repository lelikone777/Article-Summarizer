import { logo } from "../assets";
import React from "react";

const Hero = () => {
  return (
    <header className="flex w-full items-center justify-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/lelikone777", "_blank");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        {" "}
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into
        clear and concise summaries
      </h2>
      <h3 className="text-gray-500">Powered by OpenAI</h3>
    </header>
  );
};

export default Hero;
