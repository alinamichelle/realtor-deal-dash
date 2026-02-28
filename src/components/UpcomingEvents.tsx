import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Closing - 456 Maple Ave", date: "Dec 12", time: "2:00 PM", location: "Title Office", type: "closing" },
  { title: "Open House - 789 Pine St", date: "Dec 14", time: "1:00 PM", location: "789 Pine St", type: "showing" },
  { title: "Client Meeting - Anderson", date: "Dec 15", time: "10:00 AM", location: "Office", type: "meeting" },
  { title: "Inspection - 321 Elm Dr", date: "Dec 16", time: "9:00 AM", location: "321 Elm Dr", type: "inspection" },
];

const typeDot = (t: string) => {
  if (t === "closing") return "bg-success";
  if (t === "showing") return "bg-info";
  if (t === "meeting") return "bg-caution";
  return "bg-muted-foreground";
};

export function UpcomingEvents() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-sub">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Upcoming</span>
        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <div className="divide-y divide-border-sub">
        {events.map((event, i) => (
          <div key={i} className="flex gap-3 px-4 py-3 cursor-pointer">
            <div className="flex flex-col items-center justify-center bg-surface-cream rounded-lg px-2.5 py-1.5 min-w-[48px] shrink-0">
              <span className="text-[9px] font-semibold text-muted-foreground uppercase">
                {event.date.split(' ')[0]}
              </span>
              <span className="text-base font-semibold text-foreground">
                {event.date.split(' ')[1]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${typeDot(event.type)}`} />
                <h4 className="text-[13px] font-medium text-foreground truncate">{event.title}</h4>
              </div>
              <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                <span>{event.time}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}