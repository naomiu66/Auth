import type { LoginForm } from "../pages/LoginForm";

export type LoginCardProps = {
    form: LoginForm,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.SubmitEvent) => void;
}