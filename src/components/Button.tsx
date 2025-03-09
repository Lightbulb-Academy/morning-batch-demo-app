// props - label, onClick
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        width: 120,
        height: 40,
        padding: "4px 8px",
        cursor: "pointer",
        borderRadius: 8,
        fontSize: 16,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
