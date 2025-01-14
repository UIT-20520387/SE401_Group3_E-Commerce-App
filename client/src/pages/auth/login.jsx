import LoginForm from "@/components/ui/form/login-form";
import { useDebounceFunction } from "@/hook/useDebounce";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};
export default function AuthLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const isValid = Object.values(formData).every((value) => value !== "");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      toast.info("Please fill all the fields");
      return;
    }
    setIsLoading(true);

    dispatch(loginUser(formData))
      .then((data) => {
        if (data?.payload?.success) toast.success(data?.payload?.message);
        else toast.error(data?.payload?.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleFormChange = useDebounceFunction(
    (formData) => setFormData(formData),
    100
  );
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="text-center space-y-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <LoginForm
          isLoading={isLoading}
          formData={formData}
          onFormChange={handleFormChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
