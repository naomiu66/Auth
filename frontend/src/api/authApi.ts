import type { ApiMessage } from "../types/api/ApiResult";
import type { UserApiResponse } from "../types/api/IUserApiResponse";
import type { User } from "../types/User";
import { API_BASE_URL, apiCall } from "./http";

const mapApiResponseToUser = (data: UserApiResponse): User => {
  return {
    id: data._id,
    name: data.name,
    email: data.email,
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};

export const authApi = {
  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<ApiMessage> {
    const payload = { name, email, password };

    return await apiCall<ApiMessage>(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });
  },

  async login(email: string, password: string): Promise<ApiMessage> {
    const payload = {
      email,
      password,
    };

    return await apiCall<ApiMessage>(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });
  },

  async logout(): Promise<ApiMessage> {
    return await apiCall<ApiMessage>(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  },

  async getProfile(): Promise<User> {
    const response = await apiCall<UserApiResponse>(
      `${API_BASE_URL}/auth/profile`,
      {
        credentials: "include",
      },
    );

    return mapApiResponseToUser(response);
  },
};
