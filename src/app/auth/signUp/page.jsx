"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (
      user.username === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmpassword === ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignUp = async (e) => {
    e.preventDefault();
    console.log("api called", user);
    true;
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signUp", user);
      console.log(response.data);
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a href="#" className="mb-6 flex items-center text-2xl font-semibold">
          <img
            className="mr-2 h-8 w-8"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full rounded-lg bg-gray-800 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Create account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium "
                >
                  Your Username
                </label>
                <input
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  type="text"
                  name="username"
                  id="username"
                  className="focus:ring-primary-600 focus:border-primary-600  block w-full rounded-lg border border-gray-300 p-2.5 sm:text-sm"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium "
                >
                  Your email
                </label>
                <input
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600  block w-full rounded-lg border border-gray-300 p-2.5 sm:text-sm"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium "
                >
                  Password
                </label>
                <input
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="focus:ring-primary-600 focus:border-primary-600  block w-full rounded-lg border border-gray-300 p-2.5 sm:text-sm"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="mb-2 block text-sm font-medium "
                >
                  Confirm Password
                </label>
                <input
                  value={user.confirmpassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmpassword: e.target.value })
                  }
                  type="confirmpassword"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  className="focus:ring-primary-600 focus:border-primary-600  block w-full rounded-lg border border-gray-300 p-2.5 sm:text-sm"
                  required={true}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">
                      I accept the{" "}
                      <a
                        href="#"
                        className="text-primary-600 font-medium hover:underline"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={(e) => onSignUp(e)}
                disabled={!buttonDisabled}
                className={`${
                  !buttonDisabled && "cursor-not-allowed"
                } btn btn-primary w-full`}
              >
                Sign Up
              </button>
              <p className="text-sm font-light">
                Already have an account?
                <Link
                  href="/auth/login"
                  className="text-primary-600 font-medium hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
