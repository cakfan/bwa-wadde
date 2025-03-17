export const Contact = () => {
  return (
    <section className="border-foreground/20 mt-14 flex flex-col justify-center border-b pt-[39px] pb-[120px]">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-center text-[56px] leading-[62px] font-bold tracking-tight capitalize">
          Accelerate Your Business Growth
        </h2>
        <p className="text-foreground/60 mx-auto max-w-[618px] text-center text-xl leading-7 font-normal tracking-[0.6px]">
          FramerBite supplies the key components for assembling a top-tier
          website tailored to your SaaS needs.
        </p>
        <form className="group bg-foreground/5 focus-within:ring-foreground hover:ring-foreground mx-auto mt-3.5 flex w-[478px] items-center justify-between rounded-full border border-[#BFBFC5] transition-all duration-300 focus-within:ring hover:ring">
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder-foreground/40 h-[26px] flex-1 px-7 text-lg leading-[16px] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary my-[3px] mr-1 w-fit rounded-full px-7 py-3 text-[16px] leading-6 font-medium"
          >
            Email me
          </button>
        </form>
      </div>
    </section>
  );
};
