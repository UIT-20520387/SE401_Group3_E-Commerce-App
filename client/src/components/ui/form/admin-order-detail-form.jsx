import { Button } from "../button";
import FormFactory from "./utils/form-factory";

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
        {formControls.map((field, index) => (
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
