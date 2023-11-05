const Testimonial = () => {
  const testimonialData = [
    {
      name: "John Doe",
      description:
        "I am so grateful for this Hunger Relief website. It has made it easy for me to find and access food assistance when I needed it the most. Thank you for your valuable service!",
      imgUrl: "https://i.ibb.co/g69x6rR/good-Education.png",
    },
    {
      name: "Jane Smith",
      description:
        "Hunger is a pressing issue, and this website is a beacon of hope. It brings together those in need and those willing to help. I've had a positive experience volunteering and making a difference.",
      imgUrl: "https://i.ibb.co/ZHCkhrF/man3.jpg",
    },
    {
      name: "Alice Johnson",
      description:
        "I'm impressed by the dedication and hard work put into this Hunger Relief website. It's not just about providing food; it's about restoring hope and dignity to those facing hunger. Kudos to the team!",
      imgUrl: "https://i.ibb.co/VtpSfDq/bg.png",
    },
    {
      name: "Bob Brown",
      description:
        "The Hunger Relief website is a fantastic resource for those who require assistance. The easy-to-use platform and compassionate community have made a big difference in my life.",
      imgUrl: "https://i.ibb.co/vV4nx08/instructor.jpg",
    },
    {
      name: "Ella Davis",
      description:
        "I've witnessed the positive impact of this Hunger Relief website firsthand. It connects people in need with local organizations and food banks, ensuring that no one goes hungry. A great initiative!",
      imgUrl: "https://i.ibb.co/Np6sTG0/man4.jpg",
    },
    {
      name: "Mike Wilson",
      description:
        "This Hunger Relief website has been a lifeline for my family during tough times. The information and resources provided are incredibly helpful, and the volunteers are so kind and supportive.",
      imgUrl: "https://i.ibb.co/SR9QRHQ/man.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10 lg:my-20">
      <h1 className="text-center text-2xl font-bold lg:text-4xl mb-3">
        What People Say
      </h1>
      <hr className="w-28 lg:w-40 h-1 bg-red-900 m-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {testimonialData.map((item, idx) => (
          <div key={idx} className="border-2 border-orange-600 p-4 rounded-lg">
            <div className="flex justify-center items-center w-28 h-28 text-center m-auto">
              <img
                src={item.imgUrl}
                alt=""
                className="w-full h-full rounded-[50%] object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl text-center mt-5 mb-2 font-medium">
                {item.name}
              </h2>
              <p className="text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonial;
