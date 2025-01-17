import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getUser } from "../utilities/users-services";

function FetchUser() {
  const location = useLocation();
  const [user, setUser] = useState(null); // Initialize with null or a default value.
  // console.log(user);
  const [loading, setLoading] = useState(true); // Initially, loading should be true.

  useEffect(() => {
    async function fetchUser() {
      setLoading(true); // Set loading to true when starting to fetch
      try {
        const userData = await getUser(); // Fetch user data from API
        setUser(userData); // Set user data in state
      } catch (error) {
        console.error("Failed to fetch user:", error); // Error handling
      } finally {
        setLoading(false); // Set loading to false after fetching (either success or failure)
      }
    }

    if (location.state?.user) {
      setUser(location.state.user); // If user is passed via location state
      setLoading(false); // Set loading to false immediately
    } else {
      fetchUser(); // Otherwise, fetch user data from API
    }
  }, [location]);
  // console.log(user);
  return { user, loading }; // Return the state variables
}

export default FetchUser;
