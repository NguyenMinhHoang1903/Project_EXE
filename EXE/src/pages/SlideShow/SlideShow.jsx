import slideimg from "../../assets/img/1.jpg";
import slideimg1 from "../../assets/img/2.jpg";
import slideimg2 from "../../assets/img/3.jpg";

const SlideShow = () => {
  return (
    <div className="mt-28 relative">
      <div className="w-full h-96 overflow-hidden">
        <img src={slideimg} className="w-full object-cover shadow-lg h-full" />
        <img src={slideimg1} className="w-full object-cover shadow-lg h-full" />
        <img src={slideimg2} className="w-full object-cover shadow-lg h-full" />
      </div>
      <button className="absolute top-1/2 left-5 text-white font-bold bg-black bg-opacity-50 p-3 rounded hover:bg-blue-500 transform -translate-y-1/2">
        &#10094;
      </button>
      <button className="absolute top-1/2 right-5 text-white font-bold bg-black bg-opacity-50 p-3 rounded hover:bg-blue-500 transform -translate-y-1/2">
        &#10095;
      </button>
    </div>
  );
};

export default SlideShow;
