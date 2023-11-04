const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/HxQDQhn/bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-6 text-3xl lg:text-7xl font-bold">
              Hunger Relief Communities <br />{" "}
              <span className="text-2xl lg:text-5xl text-orange-200">
                One Shared Meal at a Time
              </span>
            </h1>
            <p className="w-3/4 mx-auto mb-5">
              Hunger Relief is a transformative food sharing initiative
              committed to reducing <br />
              food waste and ensuring no one goes hungry. Our platform connects
              surplus food with those in need, fostering a community united by
              generosity and care.
            </p>
            <div className="w-1/2 m-auto flex items-center justify-center gap-5 ">
              <button className="btn btn-accent">Join with us</button>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
