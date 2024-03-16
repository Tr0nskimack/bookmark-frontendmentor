import React, { useState } from "react";

const App = () => {
  const [mostrar, setMostrar] = useState(false);
  const [flecha, setFlecha] = useState(true);
  const [linea, setLinea] = useState(true);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const ExpansionFlecha = () => {
    setMostrar(!mostrar);
    setFlecha(!flecha);
    setLinea(!linea);
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(emailPattern.test(inputEmail));
  };
  
  const handleValidate = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  }

  return (
    <div className="container mx-auto mt-[65px] w-[1440px] flex flex-col transition-all duration-500">
      <header className="flex justify-between items-center">
        <div>
          <img src="logo-bookmark.svg" alt="" />
        </div>
        <nav>
          <ul className="flex space-x-6 items-center ">
            <li className="uppercase tracking-tight hover:text-rojoBtn cursor-pointer">
              features
            </li>
            <li className="uppercase tracking-tight hover:text-rojoBtn cursor-pointer">
              princing
            </li>
            <li className="uppercase tracking-tight hover:text-rojoBtn cursor-pointer">
              contact
            </li>
            <li className="">
              <button className="bg-rojoBtn py-2 px-6 rounded-md uppercase tracking-tight text-white font-semibold hover:bg-white hover:border-rojoBtn border-[1px] hover:shadow-lg hover:text-letra transition-all duration-500">
                login
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className=" mt-[100px] flex ">
        <div className="w-1/2 px-20 mt-[90px]">
          <div className="">
            <h1 className="capitalize text-5xl font-bold">
              a simple bookmark manager
            </h1>
            <p className="mt-5 leading-6 text-xl text-letra">
              A crean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          {/* buttons */}
          <div className="flex space-x-3">
            <button className="shadow-md mt-[50px] py-3 px-5 rounded-md bg-azulBtn text-white hover:text-azulBtn hover:bg-white hover:border-azulBtn border-[1px] hover:shadow-lg">
              Get it on Chrome
            </button>
            <button className="shadow-lg mt-[50px] py-3 px-5 rounded-md bg-grisBtn text-letra font-semibold hover:bg-white hover:text-black hover:border-black border-[1px] hover:shadow-lg">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="illustration-hero.svg" alt="" />
        </div>
      </section>
      {/* features */}
      <div className="flex flex-col items-center mt-[120px]">
        <h1 className="text-3xl font-bold">Features</h1>
        <p className="text-letra text-xl mt-6 px-[440px] text-center">
          Our aims is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          thern on the go
        </p>
      </div>

      {/* tab */}
      <div className="container mx-auto flex justify-around w-[760px] mt-[70px] text-lg transition-all duration-300">
        <div>
          <p className="text-underline-offset: 2px cursor-pointer hover:text-rojoBtn hover:border-b-4 pb-1  border-rojoBtn ">
            Simple Bookmarking
          </p>
        </div>
        <div>
          <h1 className="cursor-pointer hover:text-rojoBtn hover:border-b-4 pb-1 border-rojoBtn">
            Speedy Searching
          </h1>
        </div>
        <div>
          <h1 className="cursor-pointer hover:text-rojoBtn hover:border-b-4 pb-1 border-rojoBtn">
            Easy Sharing
          </h1>
        </div>
      </div>
      <hr className="w-[750px] mx-auto border-[1px]" />

      <div className="flex w-[1440px] justify-center items-center mt-[80px] px-[170px]">
        <div className="w-1/2">
          <img src="illustration-features-tab-1.svg" alt="" />
        </div>
        <div className="w-1/2">
          <div className="pl-[110px] ">
            <h1 className="text-3xl font-semibold">Bookmark in one click</h1>
            <p className="text-letra text-[18px] leading-7 [30px] py-6">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="shadow-md py-3 px-6 rounded-md bg-azulBtn text-white">
              More info
            </button>
          </div>
        </div>
      </div>
      {/* download */}
      <div>
        <div className="flex justify-center flex-col items-center mt-[250px] w-[540px] mx-auto ">
          <h1 className="text-3xl font-semibold">Download the extension</h1>
          <p className="mt-[20px] text-letra text-[17px]">
            {" "}
            We've got more browsers in the pipeline. Please do let us know of
            you've got a favourite you'd like us to prioritize
          </p>
        </div>
        <div className="flex mt-[50px] w-[900px] justify-between h-[420px] mx-auto">
          {/* card 1*/}
          <div className="flex flex-col items-center justify-between shadow-lg p-6 rounded-xl self-start">
            <img
              src="logo-chrome.svg"
              className="hover: transform-gpu cursor-pointer"
              alt=""
            />
            <h1 className="mt-10 text-xl font-semibold">Add to Chrome</h1>
            <p className="mt-2 text-letra">Minimum version 62</p>
            <button className="shadow-md mt-[50px] py-3 px-7 rounded-md bg-azulBtn text-white">
              Add & Install Extension
            </button>
          </div>
          {/* card 2*/}
          <div className="flex flex-col items-center justify-between shadow-lg p-6 rounded-xl self-center">
            <img src="logo-firefox.svg" alt="" />
            <h1 className="mt-10 text-xl font-semibold">Add to Firefox</h1>
            <p className="mt-2 text-letra">Minimum version 55</p>
            <button className="shadow-md mt-[50px] py-3 px-7 rounded-md bg-azulBtn text-white">
              Add & Install Extension
            </button>
          </div>
          {/* card 3*/}
          <div className="flex flex-col items-center justify-between shadow-lg p-6 rounded-xl self-end">
            <img src="logo-opera.svg" alt="" />
            <h1 className="mt-10 text-xl font-semibold">Add to Chrome</h1>
            <p className="mt-2 text-letra">Minimum version 62</p>
            <button className="shadow-md mt-[50px] py-3 px-7 rounded-md bg-azulBtn text-white">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div>
        <div className="flex justify-center flex-col items-center mt-[250px] w-[540px] mx-auto  ">
          <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
          <p className="mt-[20px] text-letra text-center text-[18px]">
            {" "}
            Here are some of our FAQs. If tou have any other questions you'd
            like answered please feel free to email us.
          </p>
          {/* tab */}
          <div className="w-full">
            <hr className="w-[538px] border-[#f2f2f2] border-[1px] mt-8  " />
            {/* 1 */}
            <div className="flex justify-between items-center ">
              <p className=" text-[18px] my-5 hover:text-rojoBtn cursor-pointer">
                {" "}
                What is Bookmark?
              </p>
              <img src="icon-arrow.svg" className="cursor-pointer" alt="" />
            </div>

            {/* 2 */}
            <hr className="w-[538px] border-[#f2f2f2] border-[1px]  " />
            <div
              className="flex justify-between items-center"
              onClick={ExpansionFlecha}
            >
              <p className=" text-[18px] my-5 hover:text-rojoBtn cursor-pointer">
                {" "}
                How can I request a new browser?
              </p>
              {flecha ? (
                <img src="icon-arrow.svg" className="cursor-pointer " alt="" />
              ) : (
                <img
                  src="icon-arrow-red.svg"
                  className="cursor-pointer"
                  alt=""
                />
              )}
            </div>

            {linea ? (
              <hr className="w-[538px] border-[#f2f2f2] border-[1px]" />
            ) : (
              <hr className="w-[538px] border-[#f2f2f2] border-[1px] hidden" />
            )}
            {mostrar && (
              <div>
                <div className="mt-5">
                  <p className="text-letra leading-8">
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdie
                    tVivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                  </p>
                  <hr className="w-[538px] border-[#f2f2f2] border-[1px] mt-5" />
                </div>
              </div>
            )}
            <div>
              {/* 3 */}
              <div className="flex justify-between items-center ">
                <p className=" text-[18px] my-5 hover:text-rojoBtn cursor-pointer">
                  Is there a mobile app?
                </p>
                <img src="icon-arrow.svg" className="cursor-pointer" alt="" />
              </div>
              <hr className="w-[538px] border-[#f2f2f2] border-[1px]" />
              {/* 4 */}
              <div className="flex justify-between items-center">
                <p className=" text-[18px] my-5 hover:text-rojoBtn cursor-pointer">
                  {" "}
                  What about other Chromium brosers
                </p>
                <img src="icon-arrow.svg" className="cursor-pointer" alt="" />
              </div>
              <hr className="w-[538px] border-[#f2f2f2] border-[1px]  " />
            </div>
            <div className="text-center mt-20">
              <button className="shadow-md py-3 px-6 rounded-md bg-azulBtn text-white">
                More info
              </button>
            </div>
          </div>
          {/* Footer */}
          <div className=" mt-[140px]">
            <div className="bg-azulBtn w-[1440px] h-[360px] text-center">
              <p className="font semibold text-white uppercase tracking-[3px] text-[15px] py-[55px]">
                35.000+ already joined
              </p>
              <p className="text-3xl text-white font-semibold">
                Stay up-to-date with what <br />
                we're doing
              </p>
              <div className="text-center mt-10 space-x-3 ">
                <div className="w-[305px] bg-rojoBtn py-1 mx-auto rounded-md">
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-[300px] py-4 rounded-md px-5 text-xs font-light focus:outline-none  "
                    placeholder="example@email.com"
                  />
                  {isValid ? (
                    <p className="bg-rojoBtn text-[10px] py-1 hidden  text-white w-[305px] rounded-b-md italic">
                      Whoops, make sure it's an email
                    </p>
                  ) : (
                    <div className="text-start">
                      <p className="bg-rojoBtn text-[10px] py-1 px-3 text-white w-[305px] rounded-b-md italic">
                        Whoops, make sure it's an email
                      </p>
                    </div>
                  )}
                </div>
                <button
                  className="bg-rojoBtn hover:border-rojoBtn border-rojoBtn
                 border-[1px] py-3 px-6 rounded-md mt-4 tracking-tight text-white hover:bg-white hover:text-rojoBtn hover:font-semibold transition-all duration-300"
                 onClick={handleValidate}
                >
                  contact Us
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* footer 2 */}
            <div className="bg-footer w-[1440px] h-[90px] flex items-center justify-around">
              <div className="flex ">
                {/* 1 */}
                <div className="w-[200px] ">
                  <img
                    src="logo-bookmark-blanco.svg"
                    className="cursor-pointer"
                    alt=""
                  />
                </div>
                {/* 2 */}
                <div className="flex gap-[25px] text-white text-[14px]">
                  <h1 className="uppercase font-light hover:text-rojoBtn cursor-pointer tracking-wider">
                    features
                  </h1>
                  <h1 className="uppercase font-light hover:text-rojoBtn cursor-pointer tracking-wider">
                    pricing
                  </h1>
                  <h1 className="uppercase font-light hover:text-rojoBtn cursor-pointer tracking-wider">
                    contact
                  </h1>
                </div>
              </div>
              {/* 3 */}
              <div className="flex gap-8">
                <img
                  src="icon-facebook.svg"
                  className="cursor-pointer hover:bg-rojoBtn"
                  alt=""
                />
                <img
                  src="icon-twitter.svg"
                  className="cursor-pointer hover:text-rojoBtn"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
