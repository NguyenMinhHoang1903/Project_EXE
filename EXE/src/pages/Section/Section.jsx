import logo from "../../assets/img/logo.png";
const Section = () => {
  return (
    <section className="flex items-center w-full px-5 justify-between bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <div>
          <img className="h-80" src={logo} />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are passionate about delivering quality and excellence...
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-500 text-white rounded px-6 py-2 hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
