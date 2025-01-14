import { cn } from "@/lib/utils";
import { Input } from "../../input";

export default function InputForm({
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
      <Input
        name={field.name}
        placeholder={field.placeholder}
        id={field.name}
        type={field.type}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </div>
  );
}
