import { addProductForm } from "@/config/form-control";
import { Button } from "../button";
import FormFactory from "./utils/form-factory";

export default function AdminProductForm({
  formData,
  onFormChange,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  const handleValueChange = (name) => (value) => {
    onFormChange({ ...formData, [name]: value });
  };
  console.log("form data: ", formData);
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {addProductForm.map((field, index) => (
          <FormFactory
            key={index}
            field={field}
            formData={formData}
            handleInputChange={handleValueChange}
          />
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
