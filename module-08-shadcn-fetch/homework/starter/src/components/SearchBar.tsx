// TODO: Import Input from shadcn
// TODO: Import Search icon from lucide-react

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      {/* TODO: Add Search icon positioned absolutely on the left */}

      {/* TODO: Replace with shadcn Input component */}
      {/* Add left padding (pl-10) to make room for the icon */}
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-md"
      />
    </div>
  );
}
