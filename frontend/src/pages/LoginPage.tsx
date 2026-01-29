import { useState } from "react"
import { LoginCard } from "../components/LoginCard"
import "../styles/pages/AuthPage.css"
import type { LoginForm } from "../types/pages/LoginForm"
import { authApi } from "../api/authApi"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const navigator = useNavigate();
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleLogin = async (e: React.SubmitEvent) => {
        try {
            e.preventDefault();
            console.log(form);
            await authApi.login(form.email, form.password);
            navigator("/profile", { replace: true });
        }   
        catch (err) {
            console.error("Error registering user", err);
        }
    }

    return (
        <div className="auth-container">
            <LoginCard form={form} onChange={handleChange} onSubmit={handleLogin}/>
        </div>
    )
}