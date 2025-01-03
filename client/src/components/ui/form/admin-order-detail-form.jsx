import InputForm from "./utils/input-form";
import TextAreaForm from "./utils/text-area-form";
import { Button } from "../button";
import ComboboxForm from "./utils/combobox-form";

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
  console.log("form data: ", formData);

  const formControls = [
    {
      label: "Order Status",
      name: "status",
      componentType: "select",
      options: [
        { id: "pending", label: "Pending" },
        { id: "inProcess", label: "In Process" },
        { id: "inShipping", label: "In Shipping" },
        { id: "delivered", label: "Delivered" },
        { id: "rejected", label: "Rejected" },
      ],
    },
  ];
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((field, index) => {
          const value = formData[field.name];
          console.log("Value: ", value);
          console.log("Field: ", field);
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
