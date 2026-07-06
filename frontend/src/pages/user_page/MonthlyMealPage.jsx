import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faLocationDot, faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";
import { monthlyMealRestaurants, plansByRestaurant } from "../../data/monthlyMealData";
import { PATH } from "../../path";

const CUISINES = ["All", ...new Set(monthlyMealRestaurants.map((r) => r.cuisine))];

const MonthlyMealPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [sort, setSort] = useState("rating");

  const startingPrice = plansByRestaurant.plans[0].price;

  const filtered = useMemo(() => {
    return monthlyMealRestaurants
      .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
      .filter((r) => cuisine === "All" || r.cuisine === cuisine)
      .sort((a, b) => (sort === "rating" ? b.rating - a.rating : a.name.localeCompare(b.name)));
  }, [search, cuisine, sort]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-15 py-5">
        <Navbar />

        <div className="mt-10 mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#004953]">Monthly Meal Restaurants</h1>
            <p className="text-gray-500 mt-2">Subscribe to daily meals from your favorite restaurants.</p>
          </div>
          <p className="text-sm text-gray-400">{filtered.length} active plans</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <div className="relative flex-1 min-w-64 max-w-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-[#004953] transition"
            />
          </div>

          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm font-medium text-gray-600 focus:outline-none focus:border-[#004953] cursor-pointer"
          >
            {CUISINES.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "Cuisine: All" : c}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm font-medium text-gray-600 focus:outline-none focus:border-[#004953] cursor-pointer"
          >
            <option value="rating">Sort by: Rating</option>
            <option value="name">Sort by: A-Z</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-32 text-gray-500 text-lg">No monthly meal restaurants found.</div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {filtered.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative">
                  <img src={r.image} alt={r.name} className="w-full h-40 object-cover" />
                  <span className="absolute top-3 left-3 bg-[#004953] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Monthly Meal
                  </span>
                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faHeart} className="text-gray-300" />
                  </button>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-[#004953] truncate">{r.name}</h2>
                    <span className="flex items-center gap-1 text-sm font-semibold text-amber-500 shrink-0">
                      <FontAwesomeIcon icon={faStar} />
                      {r.rating}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mt-1 line-clamp-1">{r.tagline}</p>

                  <div className="flex items-center gap-3 text-gray-400 text-xs mt-3">
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} /> {r.prepTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} /> {r.distance}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-2">From ${startingPrice}/30 days</p>

                  <button
                    onClick={() => navigate(PATH.USER.MonthlyMealPlan(r.id))}
                    className="mt-4 w-full py-2.5 rounded-xl bg-[#004953] text-white hover:bg-[#003940] transition font-semibold"
                  >
                    View Plans
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default MonthlyMealPage;
