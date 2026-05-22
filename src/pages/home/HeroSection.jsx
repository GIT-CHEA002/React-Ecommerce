import NavLinkTab from "../../components/shared/NavLinkTab";

export default function HeroSection() {
  return (
    <div className="px-6 md:px-8 lg:px-12 block md:flex h-screen bg-blue-50 items-center pt-12">
      <div className=" w-full md:w-[50%] space-y-2 py-12 ">
        <h1 className="text-wrap text-4xl tracking-wide text-blue-900 font-medium">
          Elevated Living, Curated for You.
        </h1>
        <p className="text-wrap text-gray-600 pb-5">
          Discover a sanctuary of quality products designed to bring serenity
          and sophistication to your everyday life.
        </p>
        <NavLinkTab
          title={"Explore Collection"}
          widthStyle={"w-auto"}
          path={"/product"}
        />
      </div>
      <div className=" w-full md:w-[50%] h-[280px] rounded-3xl overflow-hidden ">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6f3Z5wv5XMpqH1gcY-629C1qAhOdeecb3x8zNK1ipKorpOLjZhG0yaLufg-SJX3LfjzLxqknlyTAdb_nPn0G7vPa6qshEMg8RwO_Gd_Aq9k_2dgOuGaxDkBOuxMlkTg7haXPpgLh7FF55yzLppDgijFt6r8AGlAvTi3L3KTOEPQ0N2QK3rStf4BnL5FkGdjkLeVZiEolaICOGWW4jYKDoxI-2rGGNZbg2TWABZRiW74iLm-kahGGFlcgJ7bECCFpGYe5LCa9DJhc"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
