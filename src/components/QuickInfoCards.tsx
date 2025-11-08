import { Calendar, DollarSign, FileText } from "lucide-react";

const infoCards = [
  {
    icon: Calendar,
    label: "Key Dates",
    value: "View Timeline",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: DollarSign,
    label: "Commission",
    value: "Calculate",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: FileText,
    label: "Status",
    value: "Standard Transaction",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export function QuickInfoCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {infoCards.map((card) => (
        <div
          key={card.label}
          className={`${card.bgColor} rounded-xl p-6 border border-transparent hover:border-border hover:shadow-md transition-all cursor-pointer`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg bg-white ${card.iconColor}`}>
              <card.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">
                {card.label}
              </div>
              <div className="text-base font-semibold text-foreground">
                {card.value}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
