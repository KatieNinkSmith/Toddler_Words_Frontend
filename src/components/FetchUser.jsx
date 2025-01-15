import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getUser } from "../utilities/users-services";

function FetchUser() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser();
      setUser(userData);
      setLoading(false);
    }

    if (location.state?.user) {
      setUser(location.state.user);
      setLoading(false);
    } else {
      fetchUser();
    }
  }, [location]);

  return { user, loading };
}

export default FetchUser;
