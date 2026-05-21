import { Eye, EyeOff, Lock, Mail, Shield, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import registerUser from "../../services/auth/registerUser";
export default function RegisterForm() {
  const [isHidden, setIsHidden] = useState(true);
  const [isConfirmHidden, setIsConfirmHidden] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });
  const handleChangeValue = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const user = registerUser(formData);
      console.log(user);
      navigator("/checkout");
    } catch (error) {
      console.log(error);
    }
  };
  const navigator = useNavigate();
  return (
    <div className="w-[400px]  h-fit bg-blue-50 rounded-lg p-8">
      <h1 className="text-center text-blue-900 text-xl font-semibold">
        Create Account
      </h1>
      <p className="text-center leading-none text-gray-600">
        Join Lumina shop for premium experiences
      </p>
      <form
        className="mt-4 border-b pb-4 border-gray-300"
        onSubmit={handleSubmit}
      >
        <div className="input-group my-1">
          <label
            htmlFor="firstName"
            className="block text-sm text-gray-600 mb-2"
          >
            First Name
          </label>

          <div className="flex items-center space-x-1 bg-blue-100 p-2 rounded  border-2 border-blue-200 focus-within:border-blue-600">
            <User size={16} className="text-blue-900" />
            <input
              type="text"
              required
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChangeValue}
              placeholder="Jonh"
              className="grow bg-transparent text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 placeholder:text-sm "
            />
          </div>
        </div>
        <div className="input-group my-1">
          <label
            htmlFor="lastName"
            className="block text-sm text-gray-600 mb-2"
          >
            Last Name
          </label>

          <div className="flex items-center space-x-1 bg-blue-100 p-2 rounded  border-2 border-blue-200 focus-within:border-blue-600">
            <User size={16} className="text-blue-900" />
            <input
              type="text"
              required
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChangeValue}
              placeholder="Doe"
              className="grow bg-transparent text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 placeholder:text-sm "
            />
          </div>
        </div>
        <div className="input-group my-1">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
            Email
          </label>

          <div className="flex items-center space-x-1 bg-blue-100 p-2 rounded  border-2 border-blue-200 focus-within:border-blue-600">
            <Mail size={16} className="text-blue-900" />
            <input
              type="email"
              required
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChangeValue}
              placeholder="jonhdoe@example.com"
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
        <div className="input-group my-1">
          <label
            htmlFor="confirmPassword"
            className="block text-sm text-gray-600 mb-2"
          >
            confirm Password
          </label>
          {/* input section */}
          <div className="flex items-center space-x-1 bg-blue-100 p-2 rounded  border-2 border-blue-200 focus-within:border-blue-600">
            <Shield size={16} className="text-blue-900" />
            <input
              type={isConfirmHidden ? "password" : "text"}
              required
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChangeValue}
              placeholder="johndoe12345"
              className="grow bg-transparent text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 placeholder:text-sm "
            />
            <button
              type="button"
              onClick={() => {
                setIsConfirmHidden(!isConfirmHidden);
              }}
              className="text-blue-900"
            >
              {isConfirmHidden ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </div>
        <div className="input-group my-2 flex items-start justify-start">
          <input
            type="checkbox"
            required
            name="policy"
            id="policy"
            value={formData.policy}
            onChange={handleChangeValue}
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
          Create Account
        </button>
      </form>
      <div className="text-center">
        <span>Already have an account?</span>
        <span
          onClick={() => {
            navigator("/auth/login");
          }}
          className="px-1 text-blue-900 font-bold hover:underline cursor-pointer"
        >
          Sign In
        </span>
      </div>
    </div>
  );
}
