import RegisterForm from "@/components/ui/form/register-form";
import { useDebounceFunction } from "@/hook/useDebounce";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const initialState = {
  userName: "",
  email: "",
  password: "",
};
export default function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) toast.success(data?.payload?.message);
      else toast.error(data?.payload?.message);
    });
  };

  const handleFormChange = useDebounceFunction(
    (formData) => setFormData(formData),
    500
  );
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <RegisterForm
          formData={formData}
          onFormChange={handleFormChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
