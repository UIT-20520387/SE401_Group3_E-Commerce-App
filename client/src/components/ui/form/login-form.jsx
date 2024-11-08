import { loginFormControls } from "@/config/form-control";
import { Input } from "../input";
import { Button } from "../button";

export default function LoginForm({ formData, onFormChange, onSubmit }) {
  const handleInputChange = (name) => (event) => {
    onFormChange({ ...formData, [name]: event.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
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
                value={value}
                onChange={handleInputChange(field.name)}
              />
            </div>
          );
        })}
      </div>
      <Button type="submit" className="mt-2 w-full">
        Sign In
      </Button>
    </form>
  );
}
