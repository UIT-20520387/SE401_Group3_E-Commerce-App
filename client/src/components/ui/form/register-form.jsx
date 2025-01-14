import { registerFormControls } from "@/config/form-control";
import { Link } from "react-router-dom";
import { Button } from "../button";
import FormFactory from "./utils/form-factory";
import { HashLoader } from "react-spinners";

export default function RegisterForm({
  isLoading,
  formData,
  onFormChange,
  onSubmit,
}) {
  const handleInputChange = (name) => (value) => {
    onFormChange({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 text-start">
        {registerFormControls.map((field, index) => (
          <FormFactory
            key={index}
            field={field}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {isLoading ? <HashLoader color="white" size={12} /> : "Register"}
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
