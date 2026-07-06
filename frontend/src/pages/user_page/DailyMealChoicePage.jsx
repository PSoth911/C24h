import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";
import { dailyMealMenu } from "../../data/monthlyMealData";
import {
  getActiveSubscription,
  normalizeSubscription,
  getMealChoicesRange,
  saveMealChoice,
} from "../../service/subscriptionService";
import { PATH } from "../../path";

const buildWeek = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return {
      key: d.toISOString().split("T")[0],
      label: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      date: d.getDate(),
    };
  });
};

const DailyMealChoicePage = () => {
  const navigate = useNavigate();
  const [sub, setSub] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const week = useMemo(() => buildWeek(), []);
  const [selectedDay, setSelectedDay] = useState(week[0].key);
  const [choices, setChoices] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getActiveSubscription()
      .then(async ({ data }) => {
        const normalized = normalizeSubscription(data.subscription);
        setSub(normalized);

        const { data: choicesData } = await getMealChoicesRange(normalized.subscription_id);
        const map = {};
        choicesData.choices.forEach((c) => {
          map[c.choice_date] = { lunch: c.lunch_item_id, dinner: c.dinner_item_id };
        });
        setChoices(map);
      })
      .catch(() => setSub(null))
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded && !sub) navigate(PATH.USER.MonthlyMeal);
  }, [loaded, sub, navigate]);

  if (!sub) return null;

  const dayChoice = choices[selectedDay] || { lunch: dailyMealMenu.lunch[1].id, dinner: dailyMealMenu.dinner[0].id };

  const pick = (meal, id) => {
    setSaved(false);
    setChoices((prev) => ({ ...prev, [selectedDay]: { ...dayChoice, [meal]: id } }));
  };

  const lunchName = dailyMealMenu.lunch.find((m) => m.id === dayChoice.lunch)?.name;
  const dinnerName = dailyMealMenu.dinner.find((m) => m.id === dayChoice.dinner)?.name;

  const handleSave = async () => {
    await saveMealChoice(sub.subscription_id, selectedDay, dayChoice);
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-15 py-5">
        <Navbar />

        <div className="mt-8 mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#004953]">Choose Your Meals</h1>
            <p className="text-gray-500 mt-1">Pick your favorite dish for each day before 9:00 PM for next-day delivery.</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full shrink-0">
            <FontAwesomeIcon icon={faClock} /> 9:00 PM Cutoff
          </span>
        </div>

        <div className="flex gap-2 mb-8">
          {week.map((day) => (
            <button
              key={day.key}
              onClick={() => setSelectedDay(day.key)}
              className={`w-16 py-3 rounded-2xl text-center font-semibold transition-colors cursor-pointer ${
                selectedDay === day.key ? "bg-[#004953] text-white" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <p className="text-[10px]">{day.label}</p>
              <p className="text-lg">{day.date}</p>
            </button>
          ))}
        </div>

        <MealSection
          title="Lunch Choice"
          icon="☀️"
          options={dailyMealMenu.lunch}
          selectedId={dayChoice.lunch}
          onSelect={(id) => pick("lunch", id)}
        />

        <MealSection
          title="Dinner Choice"
          icon="🌙"
          options={dailyMealMenu.dinner}
          selectedId={dayChoice.dinner}
          onSelect={(id) => pick("dinner", id)}
        />

        <div className="bg-white rounded-2xl shadow-md p-4 mt-8 flex items-center justify-between sticky bottom-4">
          <p className="text-sm text-gray-500">
            Selected: <span className="font-semibold text-gray-800">{lunchName} (Lunch)</span>,{" "}
            <span className="font-semibold text-gray-800">{dinnerName} (Dinner)</span>
            <br />
            <span className="text-xs text-gray-400">You can change this until 9:00 PM today</span>
          </p>
          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-xl bg-[#004953] text-white font-semibold hover:bg-[#003940] transition shrink-0"
          >
            {saved ? "Saved ✓" : "Save Meal Choice"}
          </button>
        </div>
      </div>

      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
};

const MealSection = ({ title, icon, options, selectedId, onSelect }) => (
  <div className="mb-8">
    <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
      <span>{icon}</span> {title}
    </h2>
    <div className="grid grid-cols-3 gap-5">
      {options.map((opt) => {
        const isSelected = opt.id === selectedId;
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`bg-white rounded-2xl overflow-hidden text-left border-2 transition-colors cursor-pointer ${
              isSelected ? "border-[#004953]" : "border-transparent hover:border-gray-200"
            }`}
          >
            <div className="relative">
              <img src={opt.image} alt={opt.name} className="w-full h-32 object-cover" />
              {isSelected && (
                <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#004953] text-white flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="text-xs" />
                </span>
              )}
            </div>
            <div className="p-3">
              <p className="font-semibold text-gray-800 text-sm">{opt.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{opt.tag}</p>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

export default DailyMealChoicePage;
