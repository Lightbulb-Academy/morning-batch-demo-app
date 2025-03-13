interface CustomInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

export default function CustomInput(props: CustomInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input">{props.label}</label>
      <input placeholder={props.placeholder} className="border px-2 py-1 rounded" name="input" type={props.type} />
    </div>
  );
}

// a component is a reusable block of code
// Export types: default export and named export
// Component name should always be in PascalCase
// A component returns JSX element
// props
