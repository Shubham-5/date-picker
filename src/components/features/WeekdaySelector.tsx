import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type WeekdaySelectorProps = {
  selectedDays: number[];
  onToggle: (days: number[]) => void;
};

export default function WeekdaySelector({
  selectedDays,
  onToggle,
}: WeekdaySelectorProps) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleToggle = (index: number) => {
    const newSelectedDays = selectedDays.includes(index)
      ? selectedDays.filter((day) => day !== index)
      : [...selectedDays, index];
    onToggle(newSelectedDays);
  };

  return (
    <div>
      <Label>Repeat on</Label>
      <div className="flex justify-between mt-2">
        {days.map((day, index) => (
          <Button
            key={day}
            variant={selectedDays.includes(index) ? "default" : "outline"}
            className="w-10 h-10 p-0"
            onClick={() => handleToggle(index)}
          >
            {day}
          </Button>
        ))}
      </div>
    </div>
  );
}
