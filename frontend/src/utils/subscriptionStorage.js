const DRAFT_KEY = "monthlySubscriptionDraft";
const ACTIVE_KEY = "activeMonthlySubscription";

export const getDraft = () => {
  try {
    return JSON.parse(sessionStorage.getItem(DRAFT_KEY)) || null;
  } catch {
    return null;
  }
};

export const saveDraft = (partial) => {
  const next = { ...(getDraft() || {}), ...partial };
  sessionStorage.setItem(DRAFT_KEY, JSON.stringify(next));
  return next;
};

export const clearDraft = () => sessionStorage.removeItem(DRAFT_KEY);

export const getActiveSubscription = () => {
  try {
    return JSON.parse(localStorage.getItem(ACTIVE_KEY)) || null;
  } catch {
    return null;
  }
};

export const saveActiveSubscription = (sub) => {
  localStorage.setItem(ACTIVE_KEY, JSON.stringify(sub));
  return sub;
};

export const updateActiveSubscription = (partial) => {
  const next = { ...(getActiveSubscription() || {}), ...partial };
  saveActiveSubscription(next);
  return next;
};

export const clearActiveSubscription = () => localStorage.removeItem(ACTIVE_KEY);

const MEAL_CHOICES_KEY = "monthlyMealChoices";

export const getMealChoices = () => {
  try {
    return JSON.parse(localStorage.getItem(MEAL_CHOICES_KEY)) || {};
  } catch {
    return {};
  }
};

export const saveMealChoice = (dayKey, choice) => {
  const all = { ...getMealChoices(), [dayKey]: choice };
  localStorage.setItem(MEAL_CHOICES_KEY, JSON.stringify(all));
  return all;
};
