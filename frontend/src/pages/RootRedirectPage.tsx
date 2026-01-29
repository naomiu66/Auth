import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";

export const RootRedirectPage = () => {
  const navigate = useNavigate();


  // TODO: add global state for user data
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await authApi.getProfile();
        navigate("/profile", { replace: true });
      } catch {
        navigate("/login", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  // TODO: add loader here
  return null;
};
