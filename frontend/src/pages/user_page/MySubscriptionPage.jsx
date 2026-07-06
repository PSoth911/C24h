import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPen } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";
import CancelSubscriptionModal from "../../components/userComponent/MonthlyMealComponent/CancelSubscriptionModal";
import { dailyMealMenu } from "../../data/monthlyMealData";
import { getActiveSubscription, normalizeSubscription } from "../../service/subscriptionService";
import { PATH } from "../../path";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

const daysBetween = (a, b) => Math.floor((b - a) / (1000 * 60 * 60 * 24));

const MySubscriptionPage = () => {
  const navigate = useNavigate();
  const [sub, setSub] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const refreshSubscription = () => {
    getActiveSubscription()
      .then(({ data }) => setSub(normalizeSubscription(data.subscription)))
      .catch(() => setSub(null))
      .finally(() => setLoaded(true));
  };

  useEffect(() => {
    refreshSubscription();
  }, []);

  if (!loaded) return null;

  if (!sub) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="px-15 py-5">
          <Navbar />
          <div className="text-center py-32">
            <h1 className="text-2xl font-bold text-[#004953]">No Active Subscription</h1>
            <p className="text-gray-500 mt-2">Subscribe to a monthly meal plan to see it here.</p>
            <button
              onClick={() => navigate(PATH.USER.MonthlyMeal)}
              className="mt-6 px-6 py-3 rounded-xl bg-[#004953] text-white font-semibold hover:bg-[#003940] transition"
            >
              Browse Monthly Meals
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const today = new Date();
  const start = new Date(sub.startDate);
  const elapsed = Math.min(Math.max(daysBetween(start, today) + 1, 0), sub.duration);
  const percent = Math.round((elapsed / sub.duration) * 100);
  const totalMeals = sub.duration * sub.mealsPerDay;
  const remainingMeals = Math.max(totalMeals - elapsed * sub.mealsPerDay, 0);

  const upcoming = [
    { label: "TODAY", name: "Signature Salmon Rice Bowl", window: sub.mealTimes?.[0] || "Lunch", status: "Preparing", editable: false },
    { label: "TOMORROW", name: dailyMealMenu.lunch[2].name, window: sub.mealTimes?.[0] || "Lunch", status: "Scheduled", editable: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-15 py-5">
        <Navbar />

        <div className="mt-8 mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#004953]">My Subscription</h1>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            ● {sub.status === "paused" ? "Paused" : "Active"}
          </span>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs text-gray-400">Restaurant</p>
              <p className="font-bold text-gray-800">{sub.restaurantName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Plan Type</p>
              <p className="font-bold text-gray-800">{sub.planName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Billing Cycle</p>
              <p className="font-bold text-gray-800">{formatDate(sub.startDate)} - {formatDate(sub.endDate)}</p>
            </div>
            <div className="min-w-48">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Day {elapsed} of {sub.duration}</span>
                <span>{percent}% Complete</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#004953] rounded-full" style={{ width: `${percent}%` }} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800">Upcoming Meals</h2>
              <button
                onClick={() => navigate(PATH.USER.DailyMealChoice)}
                className="text-sm font-semibold text-[#004953] hover:underline"
              >
                View full calendar →
              </button>
            </div>

            <div className="space-y-4">
              {upcoming.map((meal) => (
                <div key={meal.label} className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#004953]/10 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-[#004953]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-400">{meal.label}</p>
                    <p className="font-semibold text-gray-800">{meal.name}</p>
                    <p className="text-xs text-gray-400">{meal.window}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
                      meal.status === "Preparing" ? "bg-amber-50 text-amber-600" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {meal.status}
                  </span>
                  <button
                    onClick={() => navigate(PATH.USER.DailyMealChoice)}
                    disabled={!meal.editable}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border shrink-0 transition ${
                      meal.editable
                        ? "border-[#004953] text-[#004953] hover:bg-[#004953] hover:text-white"
                        : "border-gray-200 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <FontAwesomeIcon icon={faPen} className="text-[10px]" />
                    Change Meal
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="font-bold text-gray-800 mb-4">Manage Plan</h3>

              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Remaining Meals</span>
                <span className="font-bold text-[#004953] text-lg">{remainingMeals}</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-500">Delivery Days</span>
                <span className="font-semibold text-gray-700 text-right">{sub.deliveryDays?.join(", ")}</span>
              </div>

              <button
                onClick={() => navigate(PATH.USER.MonthlyMeal)}
                className="w-full py-3 rounded-xl bg-[#004953] text-white font-semibold hover:bg-[#003940] transition mb-2"
              >
                Renew / Upgrade Plan ⤴
              </button>
              <button
                onClick={() => navigate(PATH.USER.PauseSubscription)}
                className="w-full py-3 rounded-xl border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition mb-2"
              >
                Pause Subscription
              </button>
              <button
                onClick={() => setShowCancel(true)}
                className="w-full py-2 text-sm font-semibold text-red-500 hover:text-red-600 transition"
              >
                Cancel Subscription ✕
              </button>

              <p className="text-xs text-gray-400 mt-3">
                Want to change your delivery window? Updates take 24 hours to process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15">
        <Footer />
      </div>

      {showCancel && (
        <CancelSubscriptionModal
          subscription={sub}
          remainingMeals={remainingMeals}
          onClose={() => setShowCancel(false)}
          onCancelled={() => {
            setShowCancel(false);
            refreshSubscription();
          }}
        />
      )}
    </div>
  );
};

export default MySubscriptionPage;
