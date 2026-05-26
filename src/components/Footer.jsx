import { BiMailSend } from "react-icons/bi";
export default function Footer() {
  return (
    <footer className=" bg-white z-50 px-6 md:px-8 lg:px-12 pt-6 pb-12 ">
      <section className="border-t">
        <div className=" flex flex-col md:flex-row pt-2 pb-4">
          <div className=" md:w-[300px] text-center w-full md:text-start space-y-2">
            <h1 className="text-blue-900 text-lg font-semibold">Lumina Shop</h1>
            <p className="text-base text-wrap text-gray-600 mb-3">
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
