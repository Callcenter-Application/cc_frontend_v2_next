export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4 h-full min-h-0">
      <div className="flex flex-col gap-1 p-1">
        <h1 className="m-0 text-[26px] font-semibold tracking-[-0.015em] text-[#10273D]">
          Settings
        </h1>
        <span className="text-[14px] text-[#50677D]">
          Manage your organization and dashboard preferences
        </span>
      </div>

      <div className="flex-1 min-h-0 bg-white border border-[#D6E4F0] rounded-xl p-5 flex flex-col gap-4 min-w-0">
        <p className="text-[14px] text-[#50677D]">
          Configuration options will appear here.
        </p>
      </div>
    </div>
  );
}
