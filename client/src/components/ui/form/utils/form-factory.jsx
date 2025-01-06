import ComboboxForm from "./combobox-form";
import InputForm from "./input-form";
import TextAreaForm from "./text-area-form";

export default function FormFactory({ field, formData, handleInputChange }) {
  const { componentType } = field;
  const value = formData[field.name];
  switch (componentType) {
    case "input":
      return (
        <InputForm
          field={field}
          defaultValue={value}
          onChange={handleInputChange(field.name)}
        />
      );
    case "textarea":
      return (
        <TextAreaForm
          field={field}
          defaultValue={value}
          onChange={handleInputChange(field.name)}
        />
      );
    case "select":
      return (
        <ComboboxForm
          field={field}
          defaultValue={value}
          onChange={handleInputChange(field.name)}
        />
      );

    default:
      return InputForm;
  }
}
