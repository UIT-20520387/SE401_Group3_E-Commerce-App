import { Button } from "../../button";
import FormFactory from "./form-factory";

export default function CommonForm({
  formControl,
  formData,
  onFormChange,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControl.map((field, index) => (
          <FormFactory
            key={index}
            field={field}
            formData={formData}
            handleInputChange={onFormChange}
          />
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
