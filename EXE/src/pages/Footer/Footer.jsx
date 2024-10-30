import facebook from "../../assets/img/fb.png";
import instagram from "../../assets/img/ins.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 Your Bakery. All rights reserved.</p>
      <div className="space-x-4">
        <div>
          <a href="#" className="inline-block mx-8">
            <img src={facebook} className="w-10" />
          </a>
          <a href="#" className="inline-block mx-3">
            <img src={instagram} className="w-10" />
          </a>
        </div>
        <div>
          <a
            className="text-blue-500 underline underline-offset-1 mx-2.5 border-r border-white pr-2"
            href="#terms"
          >
            Terms of Service
          </a>
          <a
            className="text-blue-500 underline underline-offset-1 pr-6"
            href="#privacy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
