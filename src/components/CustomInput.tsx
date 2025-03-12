interface CustomInputProps {
  label: string;
  type?: string;
}

export default function CustomInput({ label, type = "text" }: CustomInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input">{label}</label>
      <input placeholder={label} className="border px-2 py-1 rounded" name="input" type={type} />
    </div>
  );
}

// a component is a reusable block of code
// Export types: default export and named export
// Component name should always be in PascalCase
// A component returns JSX element
// props
