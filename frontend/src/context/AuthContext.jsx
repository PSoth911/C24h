import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = sessionStorage.getItem("token");

        console.log("TOKEN:", token);

        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }

        const res = await fetch(
          "http://localhost:5000/api/admin/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();

        console.log("STATUS:", res.status);
        console.log("DATA:", data);

        // ✅ only set user if request success
        if (res.ok) {
          setUser(data);
        } else {
          console.log("Auth error:", data?.message);
          setUser(null);
        }
      } catch (err) {
        console.log("Fetch error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);