import { Calendar } from "@/components/ui/calendar";

type DatePickerProps = {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
};

export default function DatePicker({ selected, onSelect }: DatePickerProps) {
  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={onSelect}
      initialFocus
    />
  );
}
