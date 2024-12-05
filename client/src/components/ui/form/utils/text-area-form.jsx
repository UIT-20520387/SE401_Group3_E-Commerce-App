import { cn } from "@/lib/utils";
import { Textarea } from "../../textarea";

export default function TextAreaForm({
  field,
  defaultValue,
  onChange,
  className,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={cn("grid w-full gap-1.5", className)} key={field.name}>
      <label className="mb-1">{field.label}</label>
      <Textarea
        name={field.name}
        placeholder={field.placeholder}
        id={field.id}
        value={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
}
