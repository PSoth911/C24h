export const formatRole = (role) => ({
  admin: "Admin",
  customer: "Customer",
  driver: "Driver",
  restaurant_owner: "Restaurant Owner",
}[role] ?? role);