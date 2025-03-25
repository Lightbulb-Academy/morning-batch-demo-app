interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  type?: string;
}

export default function CustomInput(props: CustomInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input">{props.label}</label>
      <input
        placeholder={`Enter ${props.name}`}
        className="border px-2 py-1 rounded"
        {...props}
      />
    </div>
  );
}

// a component is a reusable block of code
// Export types: default export and named export
// Component name should always be in PascalCase
// A component returns JSX element
// props
