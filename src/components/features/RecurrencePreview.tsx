import { Label } from "@/components/ui/label";

type RecurrencePreviewProps = {
  dates: Date[];
};

export default function RecurrencePreview({ dates }: RecurrencePreviewProps) {
  return (
    <div className="p-4 border-t">
      <Label>Recurrence Preview</Label>
      <div className="mt-2 text-sm">
        {dates.map((date, index) => (
          <div key={index}>{date.toDateString()}</div>
        ))}
      </div>
    </div>
  );
}
