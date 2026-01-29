import type { RegisterForm } from "../pages/RegisterForm";

export type RegisterCardProps = {
    form: RegisterForm,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.SubmitEvent) => void;
}