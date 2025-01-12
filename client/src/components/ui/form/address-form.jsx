import { addressFormControls } from "@/config/form-control";
import CommonForm from "./utils/common-form";

export default function AddressForm({
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
      formData={formData}
      formControl={addressFormControls}
      onFormChange={handleValueChange}
      onSubmit={onSubmit}
      buttonText={buttonText}
      isBtnDisabled={isBtnDisabled}
    />
  );
}
