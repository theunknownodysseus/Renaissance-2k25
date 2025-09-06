import { useState } from "react";
import { GraffitiBox } from "./graffiti-box";
import { EventModal } from "./event-modal";
import line from "../assets/line.png";

// Event Logos
import face1 from "../assets/face - 1.png";
import face2 from "../assets/face - 2.png";
import face3 from "../assets/face - 3.png";
import face4 from "../assets/face - 4.png";
import face5 from "../assets/face - 5.png";

// Posters for inner events
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";
import poster4 from "../assets/poster4.png";
import poster5 from "../assets/poster5.png";
import poster6 from "../assets/poster6.png";
import poster7 from "../assets/poster7.png";
import poster8 from "../assets/poster8.png";
import poster9 from "../assets/poster9.png";
import poster10 from "../assets/poster10.png";
import poster11 from "../assets/poster11.png";
import poster12 from "../assets/poster12.png";
import poster13 from "../assets/poster13.png";

const events = [
  {
    time: "09:00 AM – 10:30 AM",
    title: "Paper & Project",
    description: "Paper Presentation • Project Presentation",
    side: "left",
    logo: face1,
    detailedEvents: [
      { name: "Paper Presentation", description: "Present your research papers.", poster: poster1, registerLink: "https://forms.gle/abc123" },
      { name: "Project Presentation", description: "Show your technical projects.", poster: poster2, registerLink: "https://forms.gle/abc123" },
    ],
  },
  {
    time: "10:45 AM – 12:15 PM",
    title: "Technical Events",
    description: "Design Sprints • Quiz • Web Designing • Fragments",
    side: "right",
    logo: face2,
    detailedEvents: [
      { name: "Design Sprints", description: "Fast-paced design challenges.", poster: poster3, registerLink: "https://forms.gle/abc123" },
      { name: "Quiz", description: "Test your knowledge.", poster: poster4, registerLink: "https://forms.gle/abc123" },
      { name: "Web Designing", description: "Create stunning websites.", poster: poster5, registerLink: "https://forms.gle/abc123" },
      { name: "Fragments", description: "Debug code fragments.", poster: poster6, registerLink: "https://forms.gle/abc123" },
    ],
  },
  {
    time: "10:45 AM – 12:15 PM",
    title: "Coding Events",
    description: "2nd Years – Code Rush • 3rd Years – Spinathon",
    side: "left",
    logo: face3,
    detailedEvents: [
      { name: "Code Rush (2nd Years)", description: "High-intensity coding competition.", poster: poster7, registerLink: "https://forms.gle/abc123" },
      { name: "Spinathon (3rd Years)", description: "Advanced coding marathon.", poster: poster8, registerLink: "https://forms.gle/abc123" },
    ],
  },
  {
    time: "01:15 PM – 03:15 PM",
    title: "Non-Technical Events",
    description: "Video Editing • Escape Room • Scrambled Words • Mafia",
    side: "right",
    logo: face4,
    detailedEvents: [
      { name: "Video Editing", description: "Create compelling video content.", poster: poster9, registerLink: "https://forms.gle/abc123" },
      { name: "Escape Room + Finding", description: "Solve puzzles in teams.", poster: poster10, registerLink: "https://forms.gle/abc123" },
      { name: "Scrambled Words", description: "Unscramble technical terms.", poster: poster11, registerLink: "https://forms.gle/abc123" },
      { name: "Mafia", description: "Social deduction game.", poster: poster12, registerLink: "https://forms.gle/abc123" },
    ],
  },
  {
    time: "All Day",
    title: "CCC Workshop",
    description: "Hands-on technical sessions and training",
    side: "left",
    logo: face5,
    detailedEvents: [
      { name: "CCC Workshop", description: "Comprehensive hands-on sessions.", poster: poster13, registerLink: "https://forms.gle/abc123" },
    ],
  },
];

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl relative px-4">
        <h2 className="title-font text-4xl md:text-6xl text-center mb-16 text-primary transform rotate-1">
          Events
        </h2>

        {/* Central Timeline Streak */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-8 md:w-20"
          style={{
            backgroundImage: `url(${line})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
          }}
        ></div>

        <div className="space-y-16">
          {events.map((event, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center">
                {event.side === "left" ? (
                  <>
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right mb-8 md:mb-0">
                      <GraffitiBox
                        className="inline-block bg-card cursor-pointer hover:bg-card/80 transition-colors w-full md:max-w-[15rem] mx-auto md:mx-0"
                        data-testid={`event-box-${index}`}
                        onClick={() => handleEventClick(event)}
                      >
                        <img
                          src={event.logo}
                          alt={`${event.title} Logo`}
                          className="w-full max-w-[240px] h-auto object-contain mx-auto md:mx-0"
                        />
                        <h3 className="title-font text-xl text-primary mb-2">{event.time}</h3>
                        <h4 className="content-font font-bold text-lg mb-2">{event.title}</h4>
                        <p className="content-font text-sm text-muted-foreground">{event.description}</p>
                        <p className="content-font text-xs text-primary mt-2 font-semibold">
                          Click to view events →
                        </p>
                      </GraffitiBox>
                    </div>
                    <div className="w-full md:w-1/2 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 hidden md:block"></div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-8 text-center md:text-left mb-8 md:mb-0">
                      <GraffitiBox
                        className="inline-block bg-card cursor-pointer hover:bg-card/80 transition-colors w-full md:max-w-[15rem] mx-auto md:mx-0"
                        data-testid={`event-box-${index}`}
                        onClick={() => handleEventClick(event)}
                      >
                        <img
                          src={event.logo}
                          alt={`${event.title} Logo`}
                          className="w-full max-w-[240px] h-auto object-contain mx-auto md:mx-0"
                        />
                        <h3 className="title-font text-xl text-primary mb-2">{event.time}</h3>
                        <h4 className="content-font font-bold text-lg mb-2">{event.title}</h4>
                        <p className="content-font text-sm text-muted-foreground">{event.description}</p>
                        <p className="content-font text-xs text-primary mt-2 font-semibold">
                          Click to view events →
                        </p>
                      </GraffitiBox>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventTitle={selectedEvent?.title || ""}
        eventTime={selectedEvent?.time || ""}
        events={selectedEvent?.detailedEvents || []}
      />
    </section>
  );
}
