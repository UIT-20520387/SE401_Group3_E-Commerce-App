import LoginForm from "@/components/ui/form/login-form";
import { useDebounceFunction } from "@/hook/useDebounce";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
export default function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  // const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    // dispatch(loginUser(formData)).then((data) => {
    //   if (data?.payload?.success) toast.success(data?.payload?.message);
    //   else toast.error(data?.payload?.message);
    // });
  };

  const handleFormChange = useDebounceFunction(
    (formData) => setFormData(formData),
    500
  );
  console.log("login");

  return (
    <div className="mx-auto h-full w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          {"Don't have an account"}
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <LoginForm
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
