const BASE_URL = "http://localhost:5000/api/admin";

/* ========================= */
/* USERS */
/* ========================= */

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const createUser = async (data) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateUser = async (id, data) => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

export const toggleUserStatus = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}/status`, {
    method: "PATCH",
  });

  return res.json();
};

/* ========================= */
/* RESTAURANTS */
/* ========================= */

export const getRestaurants = async () => {
  const res = await fetch(`${BASE_URL}/restaurants`);
  return res.json();
};

export const createRestaurant = async (data) => {
  const res = await fetch(`${BASE_URL}/restaurants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateRestaurant = async (id, data) => {
  const res = await fetch(`${BASE_URL}/restaurants/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteRestaurant = async (id) => {
  const res = await fetch(`${BASE_URL}/restaurants/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

/* ========================= */
/* DRIVERS */
/* ========================= */

export const getDrivers = async () => {
  const res = await fetch(`${BASE_URL}/deliveries`);
  return res.json();
};

export const toggleDriverStatus = async (id) => {
  const res = await fetch(`${BASE_URL}/deliveries/${id}/status`, {
    method: "PATCH",
  });

  return res.json();
};

export const deleteDriver = async (id) => {
  const res = await fetch(`${BASE_URL}/deliveries/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

export const updateDriver = async (id, data) => {
  const res = await fetch(`${BASE_URL}/deliveries/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

/* ========================= */
/* DASHBOARD */
/* ========================= */

export const getDashboard = async () => {
  const res = await fetch(`${BASE_URL}/dashboard`);
  return res.json();
};

/* ========================= */
/* PROFILE */
/* ========================= */

export const getProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const updateProfile = async (token, data) => {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};