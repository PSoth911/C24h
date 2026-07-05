import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";
import SubscriptionSteps from "../../components/userComponent/MonthlyMealComponent/SubscriptionSteps";
import { mealTimeOptions, deliveryDayOptions } from "../../data/monthlyMealData";
import { getDraft, saveDraft } from "../../utils/subscriptionStorage";
import { PATH } from "../../path";

const MEAL_ICONS = { lunch: faSun, dinner: faMoon, supper: faMoon };

const tomorrowISO = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

const MonthlyDeliveryTimePage = () => {
  const navigate = useNavigate();
  const [draft] = useState(() => getDraft());
  const [enabledMeals, setEnabledMeals] = useState({ lunch: true, dinner: true, supper: false });
  const [days, setDays] = useState(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
  const [startDate, setStartDate] = useState(tomorrowISO());

  useEffect(() => {
    if (!draft?.planId) navigate(PATH.USER.MonthlyMeal);
  }, [draft, navigate]);

  if (!draft?.planId) return null;

  const toggleMeal = (id) => setEnabledMeals((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleDay = (day) =>
    setDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));

  const handleContinue = () => {
    const mealTimes = mealTimeOptions.filter((m) => enabledMeals[m.id]).map((m) => m.label);
    saveDraft({ mealTimes, deliveryDays: days, startDate });
    navigate(PATH.USER.MonthlyMealConfirm);
  };

  const canContinue = days.length > 0 && Object.values(enabledMeals).some(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-15 py-5">
        <Navbar />

        <div className="mt-8 mb-8">
          <SubscriptionSteps currentStep={3} />
        </div>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-[#004953]">Set Up Delivery Time</h1>
          <p className="text-gray-500 mt-1 mb-6">Choose when you want to receive your meals.</p>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="font-bold text-gray-800 mb-4">Select Meal Times</h3>
            <div className="space-y-3">
              {mealTimeOptions.map((meal) => (
                <div key={meal.id} className="flex items-center justify-between p-3 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[#004953]/10 text-[#004953] flex items-center justify-center">
                      <FontAwesomeIcon icon={MEAL_ICONS[meal.id]} />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">{meal.label}</p>
                      <p className="text-xs text-gray-400">{meal.window}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleMeal(meal.id)}
                    className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${
                      enabledMeals[meal.id] ? "bg-[#004953]" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        enabledMeals[meal.id] ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6 mt-6">
            <h3 className="font-bold text-gray-800 mb-4">Select Delivery Days</h3>
            <div className="flex flex-wrap gap-2">
              {deliveryDayOptions.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                    days.includes(day)
                      ? "bg-[#004953] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6 mt-6">
            <h3 className="font-bold text-gray-800 mb-4">Start Date</h3>
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
              <FontAwesomeIcon icon={faCalendarDay} className="text-[#004953]" />
              <input
                type="date"
                value={startDate}
                min={tomorrowISO()}
                onChange={(e) => setStartDate(e.target.value)}
                className="flex-1 focus:outline-none text-gray-700"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">Your first meal box will arrive on this date.</p>
          </div>

          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className="w-full mt-6 py-3.5 rounded-xl bg-[#004953] text-white font-semibold hover:bg-[#003940] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        </div>
      </div>

      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default MonthlyDeliveryTimePage;
