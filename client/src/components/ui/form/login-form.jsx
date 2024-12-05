import { loginFormControls } from "@/config/form-control";
import { Link } from "react-router-dom";
import { Button } from "../button";
import InputForm from "./utils/input-form";

export default function LoginForm({ formData, onFormChange, onSubmit }) {
  const handleInputChange = (name) => (value) => {
    onFormChange({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 text-start">
        {loginFormControls.map((field) => {
          const value = formData[field.name];
          return (
            <InputForm
              key={field.name}
              field={field}
              defaultValue={value}
              onChange={handleInputChange(field.name)}
            />
          );
        })}
      </div>
      <Button type="submit" className="mt-2 w-full">
        Sign In
      </Button>
      <p className="mt-2">
        {"Don't have an account"}
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/register"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
