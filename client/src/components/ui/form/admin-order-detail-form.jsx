import { adminOrderDetailFormControls } from "@/config/form-control";
import CommonForm from "./utils/common-form";

export default function AdminOrderDetailForm({
  formData,
  onFormChange,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  const handleValueChange = (name) => (value) => {
    onFormChange({ ...formData, [name]: value });
  };

  return (
    <CommonForm
      formControl={adminOrderDetailFormControls}
      formData={formData}
      onFormChange={handleValueChange}
      onSubmit={onSubmit}
      buttonText={buttonText}
      isBtnDisabled={isBtnDisabled}
    />
  );
}
