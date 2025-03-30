interface AvatarProps {
  src?: string;
  name: string;
  email: string;
  className?: string;
}

export default function Avatar({ src, name, email, className }: AvatarProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-gray-300 object-contain"
          height={64}
          width={64}
        />
      ) : (
        <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 font-bold">{name.slice(0, 1)}</span>
        </div>
      )}
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-400">{email}</p>
      </div>
    </div>
  );
}
