import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <Image
        src="https://rb.gy/ogau5a"
        height={60}
        width={60}
        alt="logo-twitter"
      />
      <div className="pt-5">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group pt-2"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                SignIn with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
