import { Link } from "react-router-dom";
import GreaterThanIcon from '../../assets/GreaterThan.svg';

function Index() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-full w-[80%] p-4 flex items-center justify-center">

        <div className="bg-white p-6">
          <h1 className="text-4xl font-semibold mb-4">
            <span>Welcome to</span>
            <span className="text-[#507623]"> Ölevo</span>
          </h1>
          <p className="text-gray-700 mb-4">
          Ölevo connects olive oil lovers with detailed profiles, tasting notes, and personalized recommendations. Discover, track, and explore oils and pairings in one place.
          </p>
          <Link
              to="/scan"
              className="bg-[#507623] text-white px-6 py-3 w-45 rounded-full flex items-center justify-center gap-2 hover:bg-[#3e5e20] transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="text-[18px] font-semibold">Get Started</span>  
              <img src={GreaterThanIcon} alt="Greater Than Icon" />
            </Link>
        </div>

      </div>
    </div>
  );
}

export default Index;
