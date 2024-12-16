import { addressFormControls } from "@/config/form-control";
import { Button } from "../button";
import ComboboxForm from "./utils/combobox-form";
import InputForm from "./utils/input-form";
import TextAreaForm from "./utils/text-area-form";

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
  console.log("form data: ", formData);
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {addressFormControls.map((field, index) => {
          const value = formData[field.name];
          if (field.componentType === "input")
            return (
              <InputForm
                key={index}
                field={field}
                defaultValue={value}
                onChange={handleValueChange(field.name)}
              />
            );
          else if (field.componentType === "textarea")
            return (
              <TextAreaForm
                key={index}
                field={field}
                defaultValue={value}
                onChange={handleValueChange(field.name)}
              />
            );
          else if (field.componentType === "select")
            return (
              <ComboboxForm
                key={index}
                field={field}
                defaultValue={value}
                onChange={handleValueChange(field.name)}
              />
            );
        })}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
