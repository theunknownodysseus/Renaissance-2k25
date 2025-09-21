import { useState } from "react";
import { GraffitiBox } from "./graffiti-box";
import { EventModal } from "./event-modal";
import line from "../assets/line.png";

// Event Logos
import face1 from "../assets/face - 1.png";
import face2 from "../assets/face - 2.png";
import face3 from "../assets/face - 3.png";
import face4 from "../assets/face - 4.png";

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

const events = [
  {
    time: "09:00 AM – 10:30 AM",
    title: "Paper & Project",
    description: "Paper Presentation • Project Presentation",
    side: "left",
    logo: face1,
    detailedEvents: [
      { name: " Word Spark", description: "Focus on Innovation | Clarity | Technical Content", poster: poster1, registerLink: "https://forms.gle/767S2bcn4gc2W1bW8" },
      { name: "Idea Quest", description: "Showcase your Prototype, Research & Simulation with Confidence", poster: poster2, registerLink: "https://forms.gle/AV2hcJm9bq9ebQYQ8" },
    ],
  },
  {
    time: "10:45 AM – 12:15 PM",
    title: "Technical Events",
    description: "Design Sprints • Quiz • Web Designing • Fragments",
    side: "right",
    logo: face2,
    detailedEvents: [
      { name: "Sprint-o-Mania", description: "Generate four ideas, design one, and impress the judges with creativity. Create memes and present with style. For 2–3 participants.", poster: poster3, registerLink: "https://forms.gle/E8iAh8THy7EqCANQ8" },
      { name: " Quiztron", description: "Includes apps, logos, program-based questions, ASCII-to-words, crosswords, image sequences, and a buzzer quiz with negative marking; teams of 2.", poster: poster4, registerLink: "https://forms.gle/VXBz12bbGkQG2cdMA" },
      { name: "Web Weave", description: "One-hour challenge to design a three-page desktop web app inspired by the UNSDGs, in teams of two.", poster: poster5, registerLink: "https://forms.gle/9DCwkGKPYwnDiU6b9" },
      { name: " Decrypt-o-thon", description: "Decrypt the chaos, discover the statement, and dominate the stage through 4 strategic stages with teams of 5.", poster: poster6, registerLink: "https://forms.gle/QnMZqxhmJEWuZbED7" },
    ],
  },
  {
    time: "10:45 AM – 12:15 PM",
    title: "Coding Events",
    description: "2nd Years – Code Rush • 3rd Years – Spinathon",
    side: "left",
    logo: face3,
    detailedEvents: [
      { name: "Code Rush (2nd Years)", description: "One problem, two coders, alternating turns to crack it together; teams of 2.", poster: poster7, registerLink: "https://forms.gle/nRefsL97v7DvXz9E8" },
      { name: "Spinathon (3rd Years)", description: "Spin the wheel, face the challenge, and race the clock—only the fastest coder survives; solo play.", poster: poster8, registerLink: "https://forms.gle/PPcofVrGxcgRmnoy8" },
    ],
  },
  {
    time: "01:15 PM – 03:15 PM",
    title: "Non-Technical Events",
    description: "Video Editing • Escape Room • Scrambled Words • Mafia",
    side: "right",
    logo: face4,
    detailedEvents: [
      { name: "Cut & Groove", description: "Mix clips, music, and your edits to create killer trailers; solo event.", poster: poster9, registerLink: "https://forms.gle/N7DViYc5i2hBHq5B8" },
      { name: "Phantoms Within", description: "Solve the puzzle and escape the Phantom within 7 minutes; teams of four participants.", poster: poster10, registerLink: "https://forms.gle/gxDPJmFmz1JTSC9T8" },
      { name: "Word Whirl", description: "Engage in a battle of wit and strategy, decode clues, and compete for the crown; teams of three.", poster: poster11, registerLink: "https://forms.gle/95QfSztc8qYg57j37" },
      { name: "Twisted Trust", description: "Employ strategy, deception, and observation to outsmart opponents; solo participation.", poster: poster12, registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMz4_uab25AtTFWSoXb4CB0bLBoyc9bTbrL3CTKaVIzPGj4A/viewform" },
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
