"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";
import { generateRecurringDates, RecurrenceType } from "@/lib/utils";
import DatePicker from "./DatePicker";
import RecurrencePreview from "./RecurrencePreview";
import RecurrenceOptions from "./RecurrenceOptions";
import React from "react";

export default function RecurringDatePicker() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [recurrenceType, setRecurrenceType] = useState<RecurrenceType>("daily");
  const [interval, setInterval] = useState(1);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [nthDay, setNthDay] = useState<number>(1);

  const previewDates = generateRecurringDates(
    startDate,
    recurrenceType,
    interval,
    selectedDays,
    nthDay
  );

  return (
    <div className="w-full max-w-sm">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? startDate.toDateString() : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <DatePicker selected={startDate} onSelect={setStartDate} />

          <div className="p-4 space-y-4">
            <RecurrenceOptions
              recurrenceType={recurrenceType}
              interval={interval}
              selectedDays={selectedDays}
              nthDay={nthDay}
              onRecurrenceTypeChange={setRecurrenceType}
              onIntervalChange={setInterval}
              onSelectedDaysChange={setSelectedDays}
              onNthDayChange={setNthDay}
            />
          </div>

          <RecurrencePreview dates={previewDates} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
