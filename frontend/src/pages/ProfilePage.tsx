import { useEffect, useState } from "react";
import { ProfileCard } from "../components/ProfileCard";
import type { User } from "../types/User";
import { authApi } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import "../styles/pages/ProfilePage.css";

export const ProfilePage = () => {
  const navigator = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await authApi.getProfile();
        if (!user) navigator("/login", { replace: true });
        setUser(user);
      } catch {
        navigator("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigator]);

  const handleLogout = async () => {
    try {
      await authApi.logout();
      navigator("/login", { replace: true });
    }
    catch (err) {
      console.error("Failed to logout", err);
    }
  }

  if (loading) {
    return null;
  }
  return (
    <div className="body-container">
      <div className="profile-container">
        {user ? <ProfileCard data={user} onPress={handleLogout}/> : null}
      </div>
    </div>
  );
};
