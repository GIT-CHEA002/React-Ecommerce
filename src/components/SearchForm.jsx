import Button from "./shared/Button";
export default function SearchForm() {
  return (
    <section className="md:px-32 lg:px-64 text-gray-600  py-16">
      <h1 className="text-center text-blue-900 text-xl font-semibold">
        Join Lumina Circle
      </h1>
      <p className="text-center text-base  py-3">
        Subscribe to recieves curated updated, early access to new collections,
        and serene inspiration delivered your inbox
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
  );
}
