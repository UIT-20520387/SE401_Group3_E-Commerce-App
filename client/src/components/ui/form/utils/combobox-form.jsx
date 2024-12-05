import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";

export default function ComboboxForm({
  field,
  defaultValue,
  onChange,
  className,
}) {
  const handleChange = (value) => {
    onChange(value);
  };
  return (
    <div className={cn("grid w-full gap-1.5", className)} key={field.name}>
      <label className="mb-1">{field.label}</label>
      <Select onValueChange={handleChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={field.label} />
        </SelectTrigger>
        <SelectContent>
          {field.options && field.options.length > 0
            ? field.options.map((optionItem) => (
                <SelectItem key={optionItem.id} value={optionItem.id}>
                  {optionItem.label}
                </SelectItem>
              ))
            : null}
        </SelectContent>
      </Select>
    </div>
  );
}
