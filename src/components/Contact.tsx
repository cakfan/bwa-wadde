export const Contact = () => {
  return (
    <section className="mt-14 flex flex-col justify-center border-b border-foreground/20 pt-[39px] pb-[120px]">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-center leading-[62px] text-[56px] tracking-tight font-bold capitalize">
          Accelerate Your Business Growth
        </h2>
        <p className="leading-7 text-xl font-normal tracking-[0.6px] text-foreground/60 mx-auto text-center max-w-[618px]">
          FramerBite supplies the key components for assembling a top-tier
          website tailored to your SaaS needs.
        </p>
        <form className="group transition-all duration-300 mt-3.5 mx-auto bg-foreground/5 flex items-center justify-between w-[478px] rounded-full border border-[#BFBFC5] focus-within:ring focus-within:ring-foreground hover:ring hover:ring-foreground">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-7 flex-1 h-[26px] placeholder-foreground/40 leading-[16px] text-lg focus:outline-none"
          />
          <button
            type="submit"
            className="leading-6 w-fit font-medium text-[16px] bg-primary rounded-full py-3 px-7 mr-1 my-[3px]"
          >
            Email me
          </button>
        </form>
      </div>
    </section>
  );
};
