export const Contact = () => {
  return (
    <section className="mt-14 flex flex-col justify-center border-b border-foreground/20 pt-[39px] pb-[120px]">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-center line-clamp-1 capitalize">
          Accelerate Your Business Growth
        </h2>
        <p className="section mx-auto text-center w-[618px]">
          FramerBite supplies the key components for assembling a top-tier
          website tailored to your SaaS needs.
        </p>
        <form className="group transition-all duration-300 mt-3.5 mx-auto bg-foreground/5 flex items-center justify-between w-[478px] rounded-full border border-[#BFBFC5] focus-within:ring focus-within:ring-foreground hover:ring hover:ring-foreground">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-7 h-[26px] placeholder-foreground/40 leading-[16px] text-lg focus:outline-none"
          />
          <button type="submit" className="btn primary sm mr-1 my-[3px]">
            Email me
          </button>
        </form>
      </div>
    </section>
  );
};
