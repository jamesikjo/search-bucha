import Balancer from "react-wrap-balancer";

const Headline = () => {
  return (
    <div className="mb-6">
      <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
        <Balancer>
          Kombucha{" "}
          <span className="inline font-bold tracking-tight text-amber-600">
            Finder
          </span>
        </Balancer>
      </h1>
      <h2 className="text-lg sm:text-xl">
        <Balancer>Discover different types of kombucha and flavors</Balancer>
      </h2>
    </div>
  );
};

export default Headline;
