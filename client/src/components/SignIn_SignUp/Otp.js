import { LockClosedIcon, BellIcon } from "@heroicons/react/solid";
import React from "react";
import spinner from "../../images/SpinnerWhite.gif";

export default function Otp(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClick();
  };

  return (
    <>
      <div className="flex text-center justify-center">
        <span>
          <BellIcon className="h-5 w-5 mx-1 text-red-500 group-hover:text-indigo-400" />
        </span>
        {props.colorChange === 0 && (
          <p
            className={"mb-10 text-center text-sm font-semibold text-[#6F8BD6]"}
          >
            {props.msg}
          </p>
        )}
        {props.colorChange === 1 && (
          <p
            className={"mb-10 text-center text-sm font-semibold text-[#FC4F4F]"}
          >
            {props.msg}
          </p>
        )}
        {props.colorChange === 2 && (
          <p
            className={"mb-10 text-center text-sm font-semibold text-[#39962d]"}
          >
            {props.msg}
          </p>
        )}
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="mb-2 rounded shadow-sm -space-y-px">
          <div>
            <label htmlFor="otp" className="sr-only">
              OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              autoComplete="otp"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-[rgb(39,17,162)] focus:border-[rgb(39,17,162)] focus:z-10 sm:text-sm"
              placeholder="OTP"
              onChange={props.updateOTP}
            />
          </div>
        </div>
        
        <div className="mb-2 rounded shadow-sm -space-y-px">
          <div>
            <label htmlFor="password" className="sr-only">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-[rgb(39,17,162)] focus:border-[rgb(39,17,162)] focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={props.updatePass}
            />
          </div>
        </div>

        <div className="mb-2 rounded shadow-sm -space-y-px">
          <div>
            <label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="confirm-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-[rgb(39,17,162)] focus:border-[rgb(39,17,162)] focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
              onChange={props.updateCnfPass}
            />
          </div>
        </div>

        <div className="mb-6 text-sm text-right items-end">
          <a
            href="#"
            className="font-medium text-[rgb(39,17,162)] hover:text-[rgb(39,17,162)]"
            onClick={props.resendOTP}  >
            Resend OTP?
          </a>
        </div>

        <div>
          {!props.isLoading ? (
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[rgb(39,17,162)] hover:bg-[rgb(39,17,162)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(39,17,162)]"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-[rgb(39,17,162)] group-hover:text-[rgb(39,17,162)]"
                  aria-hidden="true"
                />
              </span>
              Validate
            </button>
          ) : (
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(39,17,162)]"
              type="button"
              disabled
            >
              <div className="w-20 h-5">
                <img className="h-5 w-5 mx-auto" alt="spinner" src={spinner} />
              </div>
            </button>
          )}
        </div>
      </form>
    </>
  );
}
