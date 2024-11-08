import { registerFormControls } from "@/config/form-control";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Input } from "../input";

export default function RegisterForm({ formData, onFormChange, onSubmit }) {
  const handleInputChange = (name) => (event) => {
    onFormChange({ ...formData, [name]: event.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 text-start">
        {registerFormControls.map((field) => {
          const value = formData[field.name];
          return (
            <div className="grid w-full gap-1.5" key={field.name}>
              <label className="mb-1">{field.label}</label>
              <Input
                name={field.name}
                placeholder={field.placeholder}
                id={field.name}
                type={field.type}
                value={value}
                onChange={handleInputChange(field.name)}
              />
            </div>
          );
        })}
      </div>
      <Button type="submit" className="mt-2 w-full">
        Register
      </Button>
      <p className="mt-2">
        Already have an account
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
