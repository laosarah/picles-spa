import { forwardRef, Ref, SelectHTMLAttributes } from "react";
import styless from "./Select.module.css";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    value: string;
    text: string;
  }[];
}

function FowardedSelect(
  { label, options, ...rest }: ISelect,
  ref: Ref<HTMLSelectElement>
) {
  return (
    <div className={styless.selectGroup}>
      <label>{label}</label>
      <select className={styless.selectBase} ref={ref} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

const Select = forwardRef(FowardedSelect);
export { Select };
