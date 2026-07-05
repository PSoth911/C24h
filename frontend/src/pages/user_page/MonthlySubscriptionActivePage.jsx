import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";
import { getActiveSubscription } from "../../utils/subscriptionStorage";
import { suggestedRestaurants } from "../../data/monthlyMealData";
import { PATH } from "../../path";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit" });

const MonthlySubscriptionActivePage = () => {
  const navigate = useNavigate();
  const [sub] = useState(() => getActiveSubscription());

  useEffect(() => {
    if (!sub) navigate(PATH.USER.MonthlyMeal);
  }, [sub, navigate]);

  if (!sub) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-15 py-5">
        <Navbar />

        <div className="max-w-2xl mx-auto text-center mt-10">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto animate-bounce">
            <FontAwesomeIcon icon={faCheck} className="text-3xl text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-[#004953] mt-6">Subscription Active!</h1>
          <p className="text-gray-500 mt-2">Your monthly meal subscription is now active.</p>

          <div className="bg-white rounded-3xl shadow-md p-6 mt-8 flex items-center justify-between text-left">
            <div>
              <h3 className="font-bold text-[#004953] text-lg">{sub.restaurantName}</h3>
              <p className="text-xs text-gray-400">{sub.planName}</p>
              <div className="flex gap-6 mt-3 text-sm">
                <div>
                  <p className="text-xs text-gray-400">Duration</p>
                  <p className="font-semibold text-gray-800">{sub.duration} Days</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Period</p>
                  <p className="font-semibold text-gray-800">
                    {formatDate(sub.startDate)} - {formatDate(sub.endDate)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="font-semibold text-emerald-600">● Active</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <button
                onClick={() => navigate(PATH.USER.MySubscription)}
                className="px-5 py-2.5 rounded-xl bg-[#004953] text-white text-sm font-semibold hover:bg-[#003940] transition"
              >
                Go to My Subscription
              </button>
              <button
                onClick={() => navigate(PATH.USER.HOME)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#004953]">Suggested Monthly Meal Restaurants</h2>
            <button
              onClick={() => navigate(PATH.USER.MonthlyMeal)}
              className="text-sm font-semibold text-[#004953] hover:underline"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {suggestedRestaurants.map((r) => (
              <div
                key={r.id}
                onClick={() => navigate(PATH.USER.MonthlyMealPlan(r.id))}
                className="bg-white rounded-3xl shadow-md overflow-hidden flex gap-4 p-4 cursor-pointer hover:shadow-xl transition"
              >
                <img src={r.image} alt={r.name} className="w-28 h-28 rounded-2xl object-cover shrink-0" />
                <div>
                  <h3 className="font-bold text-[#004953]">{r.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">${r.price} / mo</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {r.tags.map((t) => (
                      <span key={t} className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default MonthlySubscriptionActivePage;
