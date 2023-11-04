const About = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="lg:w-3/4 text-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold">How You Can Help</h1>
        <p className="mt-6 mb-10 lg:w-3/4 lg:mx-auto">
          Your support is essential in our mission to create a better world.
          Explore the ways you can make a difference through financial
          contributions, volunteering, or spreading the word. Join us in our
          journey to bring positive change, one act of kindness at a time.
        </p>
      </div>

      <div className="lg:w-3/4 lg:mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="card bg-base-100 shadow-xl">
          <figure className="">
            <img
              src="https://i.ibb.co/KVsjKQQ/donation.jpg"
              alt="donation-image"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Donations</h2>
            <p>
              Thank you for your willingness to contribute to our cause! Your
              support is greatly appreciated. To make a donation, please follow
              the simple steps on our website to select your preferred donation
              amount and method. Your generosity will help us continue our vital
              work and bring positive change to those in need.
            </p>
            <div className="card-actions">
              <button className="btn btn-warning">Make a donation</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="">
            <img
              src="https://i.ibb.co/MSdkvh6/volunteer.jpg"
              alt="volunteer-image"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Volunteering</h2>
            <p>
              We welcome passionate individuals to join our volunteer team. Your
              commitment can help us make a real impact in the community. As a
              volunteer, you will have the opportunity to contribute your time
              and skills to meaningful projects. Let is work together to create
              a brighter future for those we serve.
            </p>
            <div className="card-actions">
              <button className="btn btn-error text-white">
                apply to volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
