import { BiMailSend } from "react-icons/bi";
import Button from "../components/Button";
export default function Footer() {
  return (
    <footer className=" bg-white z-50 px-6 md:px-8 lg:px-12 pt-6 pb-12 ">
      {/* join sections */}
      <section className="md:px-32 lg:px-64 text-gray-600  py-16">
        <h1 className="text-center text-blue-900 text-xl font-semibold">
          Join Lumina Circle
        </h1>
        <p className="text-center text-base  py-3">
          Subscribe to recieves curated updated, early access to new
          collections, and serene inspiration delivered your inbox
        </p>
        <div className=" block md:flex md:space-x-3 space-y-3 md:space-y-0">
          <input
            type="text"
            name="subscribe-email"
            id="subscribe-email"
            placeholder="Your Email Address"
            className="outline-none border-2 md:flex-1 w-full  px-4 py-1 rounded-lg border-gray-500 hover:border-blue-900 text-gray-600"
          />
          <Button title={"Subscribe Now"} widthStyle={"md:w-fit w-full"} />
        </div>
      </section>
      {/* navigation links */}
      <section className="border-t">
        <div className=" block  md:flex pt-2 pb-4">
          <div className=" w-fit md:w-[300px] text-center md:text-start space-y-2">
            <h1 className="text-blue-900 text-lg font-semibold">Lumina Shop</h1>
            <p className="text-base text-wrap text-gray-600">
              Create a serence shopping experiences with quality products that
              inspire
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-5 ">
            <div>
              <h1 className="font-bold text-blue-900 pb-2">Shop</h1>
              <ul className="text-gray-600 space-y-1">
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Electronic</a>
                </li>
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Jewelery</a>
                </li>
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Men's Clothings</a>
                </li>
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Women's Clothings</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-blue-900 pb-2">Company</h1>
              <ul className="text-gray-600 space-y-1">
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">About us</a>
                </li>
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Contact</a>
                </li>
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Privacy</a>
                </li>
                <li className="hover:text-blue-900 hover:scale-[1.02] transition-all duration-300">
                  <a href="#">Shipping Info</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-blue-900 pb-2">New Sletter</h1>
              <p>Stay updated with our latest offers </p>
              <button
                type="button"
                className="p-2 bg-blue-100 rounded-full mt-3"
              >
                <BiMailSend className="text-lg text-blue-900" />
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm">
          &copy; 2026 Lumina Shop Alright reserved
        </p>
      </section>
    </footer>
  );
}
