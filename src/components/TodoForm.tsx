import Button from "./Button";
import CustomInput from "./CustomInput";

export default function TodoForm() {
  const handleAdd = () => {
    console.log("Add button clicked");
  };

  const handleClear = () => {
    console.log("Clear button clicked");
  };

  return (
    <form className="w-[600px] items-center">
      <div className="flex flex-col border gap-2 p-4">
        <CustomInput label="Title" />
        <CustomInput label="Description" />
        <div className="flex items-center justify-center gap-8">
          <Button onClick={handleAdd} label="Add" />
          <Button className="!bg-white !text-black !border" onClick={handleClear} label="Clear" />
        </div>
      </div>
    </form>
  );
}
