import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type MonthlySelectorProps = {
  nthDay: number;
  onNthDayChange: (day: number) => void;
};

export default function MonthlySelector({
  nthDay,
  onNthDayChange,
}: MonthlySelectorProps) {
  return (
    <div>
      <Label htmlFor="nth-day">On the</Label>
      <Select
        onValueChange={(value) => onNthDayChange(parseInt(value))}
        value={nthDay.toString()}
      >
        <SelectTrigger id="nth-day">
          <SelectValue placeholder="Select day of month" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <SelectItem key={day} value={day.toString()}>
              {day}
              {getOrdinalSuffix(day)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
