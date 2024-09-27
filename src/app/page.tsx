import React from "react";
import RecurringDatePicker from "../components/features/RecurringDatePicker";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center px-24 py-10">
      <div className="mx-auto max-w-60 w-full">
        <h2 className="text-left">Recurrence Date Picker </h2>
        <RecurringDatePicker />
      </div>
    </main>
  );
}
