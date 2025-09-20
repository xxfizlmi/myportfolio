import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I am an enthusiastic undergraduate student pursuing a Bachelor’s
                degree in Informatics Engineering. As a graduate of an
                Associate’s degree in Information Technology with a strong
                background in software development,{" "}
                <span className="font-bold text-white">
                  I aspire to become a Full Stack Developer.
                </span>
              </p>
              <p className="text-white">
                My skills include proficiency in HTML, CSS, and JavaScript, and
                I am continuously expanding my knowledge to build a successful
                career in full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
