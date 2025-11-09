import { Calendar, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Closing - 456 Maple Ave",
    date: "Dec 12",
    time: "2:00 PM",
    location: "Title Office",
    type: "closing",
  },
  {
    title: "Open House - 789 Pine St",
    date: "Dec 14",
    time: "1:00 PM - 4:00 PM",
    location: "789 Pine St",
    type: "showing",
  },
  {
    title: "Client Meeting - Anderson Family",
    date: "Dec 15",
    time: "10:00 AM",
    location: "Office",
    type: "meeting",
  },
  {
    title: "Property Inspection - 321 Elm Dr",
    date: "Dec 16",
    time: "9:00 AM",
    location: "321 Elm Dr",
    type: "inspection",
  },
];

export function UpcomingEvents() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Events</h3>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
              <span className="text-xs font-medium text-primary uppercase">
                {event.date.split(' ')[0]}
              </span>
              <span className="text-lg font-bold text-primary">
                {event.date.split(' ')[1]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-semibold text-foreground">{event.title}</h4>
                <Badge variant="outline" className="shrink-0 text-xs">
                  {event.type}
                </Badge>
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
