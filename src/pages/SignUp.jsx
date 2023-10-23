import React, { useEffect } from 'react';

const SignUp = () => {
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
          Sign Up
        </h1>
        <form className=" flex flex-col mt-4 gap-4  border-2 shadow-[0_0_5px_#666666] rounded-lg p-8">
          {/* USERNAME */}
          <div className={inputContainerStyle}>
            <label>Username:</label>
            <input type="text" placeholder="username" className={inputStyle} />
          </div>

          {/* SCHOOL_NAME */}
          <div className={inputContainerStyle}>
            <label>School name:</label>
            <input
              type="text"
              placeholder="school name"
              className={inputStyle}
            />
          </div>
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
          {/* CONFIRM_PASSWORD */}
          <div className={inputContainerStyle}>
            <label>Confirm password:</label>
            <input
              type="text"
              placeholder="confirm password"
              className={inputStyle}
            />
          </div>
          <button className=" bg-primaryGreen hover:bg-primaryGreenHover text-white rounded-sm py-1 font-medium">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
