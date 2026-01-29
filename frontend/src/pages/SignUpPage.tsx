import { useState } from "react"
import { RegisterCard } from "../components/RegisterCard"
import "../styles/pages/AuthPage.css"
import type { RegisterForm } from "../types/pages/RegisterForm"
import { authApi } from "../api/authApi"
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
    const navigator = useNavigate();
    const [form, setForm] = useState<RegisterForm>({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleRegister = async (e: React.SubmitEvent) => {
        try {
            e.preventDefault();
            console.log(form);
            await authApi.register(form.name, form.email, form.password);
            navigator("/profile", { replace: true });
        }   
        catch (err) {
            console.error("Error registering user", err);
        }
    }

    return (
        <div className="auth-container">
            <RegisterCard form={form} onChange={handleChange} onSubmit={handleRegister}/>
        </div>
    )
}