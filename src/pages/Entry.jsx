import React from "react";
import { FcGoogle } from "react-icons/fc";

const Entry = () => {
  return (
    <div className="flex max-md:justify-center max-w-3xl m-auto mt-10 ">
      <div className="w-[55%] h-[581px] relative max-md:hidden">
        <div className="w-[380.312px] h-[581.146px] bg-url(home-phons-2x.png)">
          <img src="home-phones-2x-removebg.png" className="w-full h-full" alt="img" />
        </div>
        <div className="absolute top-6 right-[59px] ">
          <img src="screenshot4-2x.png" className="w-[253px] h-[539.833px]" alt="img2" />
        </div> 
      </div>
      <div className="w-[45%] max-sm:w-full max-md:w-[400px] ">
        <div className="flex flex-col border-[1px] border-gray-200 rounded-sm pb-3 max-sm:border-none max-sm:w-full">
          <div className="flex justify-center my-8 pt-3 max-sm:w-full">
            <h1 className="font-abc font-normal text-5xl">Instagram</h1>
          </div>
          <div className="flex flex-col items-center gap-4 pt-8 max-sm:w-full ">
            <div className="flex justify-center flex-col gap-2 max-sm:w-[80%]  items-center">
              <input
                type="text"
                placeholder="Phone, username or email"
                name="username"
                className="p-2 outline-none rounded-sm bg-gray-300 max-[370px]:w-full w-72 bg-opacity-15 border-gray-300 border-[1px] text-black text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="p-2 outline-none rounded-sm bg-gray-300 max-[370px]:w-full w-72 bg-opacity-15  border-gray-300 border-[1px] text-black text-sm"
              />
            </div>
            <button className="flex justify-center bg-sky-400 max-[370px]:w-[80%] text-white font-semibold rounded-md w-72 p-1">
              Log in
            </button>
            <div className="flex justify-between items-center w-72 max-[370px]:w-[80%]">
              <hr className="w-[120px] max-[350px]:w-[80px] bg-gray-700" />
              <p className="max-[350px]:text-sm">OR</p>
              <hr className="w-[120px] max-[350px]:w-[80px] bg-gray-700" />
            </div>
            <button className="flex max-w-72 justify-evenly items-center gap-2 pt-2">
              <span>
                <FcGoogle className="text-2xl" />
              </span>
              <span className="font-semibold text-red-600 text-sm">
                Log in with Google
              </span>
            </button>
            <div className="flex pb-3 pl-3">
              <h3 className="text-xs text-slate-600">Forget password ?</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 border-[1px] border-gray-200 rounded-sm">
          <div className=" flex py-5 gap-2 items-center">
            <h2 className="text-sm">Don't have an account ? </h2>
            <button className="font-semibold text-blue-400 text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
