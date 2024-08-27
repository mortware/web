import { useDebounce } from "../hooks/use-debounce";
import Icon from "./Icon";
import { InputHTMLAttributes, useEffect, useState } from "react";

type SearchBarProps = {
  debounce?: number;
  value?: string;
  onChange: (selected: string) => void;
  onReset?: () => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export function SearchBar({
  debounce = 300,
  value = "",
  onChange,
  onReset,
  ...props
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(value ?? "");
  const debouncedSearchValue = useDebounce(searchValue, debounce);

  useEffect(() => {
    onChange(debouncedSearchValue);
  }, [debouncedSearchValue, onChange]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onChange(searchValue);
    }
  };

  const handleOnReset = () => {
    setSearchValue("");
    onReset?.();
  };
  return (
    <div className="flex gap-1">
      <Icon icon="search" />
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        {...props}
      />
      <button onClick={handleOnReset}>x</button>
    </div>
  );
}
