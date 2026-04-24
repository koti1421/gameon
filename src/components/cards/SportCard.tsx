import { cn } from "@/lib/utils";

export function SportCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
      "hover:shadow-md hover:border-accent transition-all cursor-pointer",
      "dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-400"
    )}>
      <span className="text-4xl">{icon}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
}
