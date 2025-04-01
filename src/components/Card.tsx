import { PencilIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

interface CardProps {
  id: number;
  title: string;
  description: string;
  status?: boolean;
  handleDelete: () => void;
  handleEdit: () => void;
  isSelected: boolean;
}

export default function Card({
  id,
  title,
  description,
  status = false,
  handleDelete,
  handleEdit,
  isSelected,
}: CardProps) {
  const [todoStaus, setTodoStatus] = useState(status);
  const handleStatusUpdate = () => {
    setTodoStatus((prev) => !prev);
    // similar to edit API
    // send updated status value in the payload
  };

  return (
    <div className={`card ${isSelected ? "border-2 border-amber-300" : ""}`}>
      <div
        className={`card-title flex justify-between items-center ${
          todoStaus ? "bg-gray-400 " : "bg-yellow-500"
        } `}
      >
        <input onClick={handleStatusUpdate} type="checkbox" />
        <h3>{title}</h3>
        <div className="flex gap-2">
          <PencilIcon
            className="cursor-pointer text-green-600"
            onClick={handleEdit}
          />
          <Trash2Icon
            className="cursor-pointer text-red-600"
            onClick={handleDelete}
          />
        </div>
      </div>
      <p className="card-desc">{description}</p>
    </div>
  );
}

// dynamic content should be passed as props in the component
