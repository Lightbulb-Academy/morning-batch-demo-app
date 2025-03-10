// props - label, onClick
interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: ButtonProps) {
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
      className={className}

      onClick={onClick}
    >
      {label}
    </button>
  );
}
