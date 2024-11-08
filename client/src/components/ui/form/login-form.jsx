import { loginFormControls } from "@/config/form-control";
import { Input } from "../input";
import { Button } from "../button";
import { Link } from "react-router-dom";

export default function LoginForm({ formData, onFormChange, onSubmit }) {
  const handleInputChange = (name) => (event) => {
    onFormChange({ ...formData, [name]: event.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 text-start">
        {loginFormControls.map((field) => {
          const value = formData[field.name];
          return (
            <div className="grid w-full gap-1.5" key={field.name}>
              <label className="mb-1">{field.label}</label>
              <Input
                name={field.name}
                placeholder={field.placeholder}
                id={field.name}
                type={field.type}
                defaultValue={value}
                onChange={handleInputChange(field.name)}
              />
            </div>
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
