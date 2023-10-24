import React, { useEffect } from 'react';

const Login = () => {
  const inputContainerStyle =
    ' flex flex-col gap-1 text-slate-700 font-medium font-poppings';
  const inputStyle =
    ' font-normal py-1 pl-4 w-72 rounded-sm focus:outline-none';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-slate-100 pt-[72px] w-full h-screen flex items-center  justify-center">
      <div>
        <h1 className="  text-center text-4xl font-semibold text-slate-700">
          Log In
        </h1>
        <form className=" flex flex-col mt-4 gap-4  border-2 shadow-[0_0_5px_#666666] rounded-lg p-8">
          {/* EMAIL */}
          <div className={inputContainerStyle}>
            <label>Email:</label>
            <input type="email" placeholder="email" className={inputStyle} />
          </div>
          {/* PASSWORD */}
          <div className={inputContainerStyle}>
            <label>Password:</label>
            <input type="text" placeholder="password" className={inputStyle} />
          </div>
          <div>
            <button className=" text-sm text-primaryBlue hover:underline">
              Forgot password ?
            </button>
          </div>

          <button className=" bg-primaryGreen hover:bg-primaryGreenHover text-white rounded-sm py-1 font-medium">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
