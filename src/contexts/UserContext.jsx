import { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "../utilities/users-services";
// Create a User Context
const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext);
};

// Provider component to wrap your app with user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser(); // Fetch user data on component mount
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
