export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 p-1">
        <h1 className="m-0 text-[26px] font-semibold tracking-[-0.015em] text-[#1F1C1E]">
          Settings
        </h1>
        <span className="text-[14px] text-[#6B6560]">
          Manage your organization and dashboard preferences
        </span>
      </div>

      <div className="flex-1 bg-white border border-[#E2DDD8] rounded-xl p-5 flex flex-col gap-4 min-w-0">
        <p className="text-[14px] text-[#6B6560]">
          Configuration options will appear here.
        </p>
      </div>
    </div>
  );
}
