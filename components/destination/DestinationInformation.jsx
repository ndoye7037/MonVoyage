export function DestinationInformation({ label, value }) {
  return (
    <div className="rounded-lg border p-5">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold">
        {value}
      </p>

    </div>
  );
}

