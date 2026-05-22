import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import loginUser from "../../services/auth/loginUser";
export default function LoginForm() {
  const [isHidden, setIsHidden] = useState(true);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    policy: false,
  });
  const handleChangeValue = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginUser(formData);
      console.log(user);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };
  const navigator = useNavigate();
  return (
    <div className="w-[400px] bg-blue-50 rounded-lg p-8">
      <h1 className="text-center text-blue-900 text-xl font-semibold">
        Welcome Back
      </h1>
      <p className="text-center leading-none text-gray-600">
        Join Lumina shop for premium experiences
      </p>
      <form
        className="mt-4 border-b pb-4 border-gray-300"
        onSubmit={handleSubmit}
      >
        <div className="input-group my-1">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
            Email
          </label>

          <div className="flex items-center space-x-1 bg-blue-100 p-2 rounded  border-2 border-blue-200 focus-within:border-blue-600">
            <User size={16} className="text-blue-900" />
            <input
              required
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChangeValue}
              placeholder="Jonh Doe"
              className="grow bg-transparent text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 placeholder:text-sm "
            />
          </div>
        </div>
        <div className="input-group my-1">
          <label
            htmlFor="password"
            className="block text-sm text-gray-600 mb-2"
          >
            Password
          </label>

          <div className="flex items-center space-x-1 bg-blue-100 p-2 rounded  border-2 border-blue-200 focus-within:border-blue-600">
            <Lock size={16} className="text-blue-900" />
            <input
              type={isHidden ? "password" : "text"}
              required
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChangeValue}
              placeholder="johndoe12345"
              className="grow bg-transparent text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 placeholder:text-sm "
            />
            <button
              type="button"
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              className="text-blue-900"
            >
              {isHidden ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </div>

        <div className="input-group my-2 flex items-start justify-start">
          <input
            type="checkbox"
            required
            name="policy"
            onChange={handleChangeValue}
            id="policy"
            className="mt-1"
          />
          <h1 className="ms-2 leading-none tracking-tight text-gray-600 grow">
            I agree to the Terms, Conditions and Privacy policy{" "}
          </h1>
        </div>
        <button
          type="submit"
          className=" mt-4 w-full p-2 rounded-lg text-center bg-blue-200 text-blue-900/90 font-semibold"
        >
          Sign In
        </button>
      </form>
      <div className="text-center mt-2">
        <span>Don't have an account?</span>
        <span
          onClick={() => {
            navigator("/auth/register");
          }}
          className="px-1 text-blue-900 font-bold hover:underline cursor-pointer"
        >
          Register
        </span>
        <p className="px-1 text-blue-900 font-bold hover:underline cursor-pointer">
          Forgot password?
        </p>
      </div>
    </div>
  );
}
