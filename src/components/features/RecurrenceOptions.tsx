import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RecurrenceType } from "@/lib/utils";
import WeekdaySelector from "./WeekdaySelector";
import MonthlySelector from "./MonthlySelector";

type RecurrenceOptionsProps = {
  recurrenceType: RecurrenceType;
  interval: number;
  selectedDays: number[];
  nthDay: number;
  onRecurrenceTypeChange: (type: RecurrenceType) => void;
  onIntervalChange: (interval: number) => void;
  onSelectedDaysChange: (days: number[]) => void;
  onNthDayChange: (day: number) => void;
};

export default function RecurrenceOptions({
  recurrenceType,
  interval,
  selectedDays,
  nthDay,
  onRecurrenceTypeChange,
  onIntervalChange,
  onSelectedDaysChange,
  onNthDayChange,
}: RecurrenceOptionsProps) {
  return (
    <>
      <div>
        <Label htmlFor="recurrence-type">Recurrence</Label>
        <Select onValueChange={onRecurrenceTypeChange} value={recurrenceType}>
          <SelectTrigger id="recurrence-type">
            <SelectValue placeholder="Select recurrence type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="interval">Every</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="interval"
            type="number"
            min={1}
            value={interval}
            onChange={(e) => onIntervalChange(parseInt(e.target.value))}
            className="w-20"
          />
          <span>
            {recurrenceType === "daily"
              ? "days"
              : recurrenceType === "weekly"
              ? "weeks"
              : recurrenceType === "monthly"
              ? "months"
              : "years"}
          </span>
        </div>
      </div>
      {recurrenceType === "weekly" && (
        <WeekdaySelector
          selectedDays={selectedDays}
          onToggle={onSelectedDaysChange}
        />
      )}
      {recurrenceType === "monthly" && (
        <MonthlySelector nthDay={nthDay} onNthDayChange={onNthDayChange} />
      )}
    </>
  );
}
