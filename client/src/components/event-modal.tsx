import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventDetails {
  name: string;
  description: string;
  poster?: string;
  registerLink?: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventTime: string;
  events: EventDetails[];
}

export function EventModal({ isOpen, onClose, eventTitle, eventTime, events }: EventModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));

  const currentEvent = events && events.length > 0 ? events[currentIndex] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-full z-50"
      >
        <X size={32} />
      </Button>

      <div
        className="relative w-full max-w-6xl max-h-[80vh] bg-transparent flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {currentEvent ? (
          <div className="flex flex-col h-full w-full overflow-y-auto">
            {/* Left Content */}
            <div className="w-full flex flex-col justify-center px-8 space-y-4 relative z-10 min-w-0">
              <h2 className="text-4xl md:text-5xl text-primary mb-2 transform -rotate-1 pt-6">
                {eventTitle}
              </h2>
              <p className="text-lg font-semibold text-white mb-4">{eventTime}</p>
              <h2
                className="text-4xl md:text-5xl text-primary mb-2 transform -rotate-1"
                style={{ fontFamily: "var(--font-title)" }}
              >
                {currentEvent.name}
              </h2>

              <p className="text-lg text-white leading-relaxed">{currentEvent.description}</p>

              <div className="flex mt-4 items-center space-x-4 flex-nowrap pt-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors mr-2"
                  aria-label="Previous event"
                >
                  <ChevronLeft size={28} />
                </button>

                {currentEvent.registerLink ? (
                  <a href={currentEvent.registerLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold py-3 px-6 rounded-lg transform -rotate-1 transition-transform hover:rotate-0">
                      REGISTER
                    </Button>
                  </a>
                ) : (
                  <Button disabled className="bg-gray-500 text-white py-3 px-6 rounded-lg flex-shrink-0">
                    Coming Soon
                  </Button>
                )}

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
                  aria-label="Next event"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>

            {/* Poster below the text content */}
            <div className="w-full mt-8 flex justify-center">
              {currentEvent.poster && (
                <img
                  src={currentEvent.poster}
                  alt={`${currentEvent.name} Poster`}
                  className="max-h-[60vh] object-contain transform transition-transform duration-300 hover:scale-110 z-[9999]"
                />
              )}
            </div>
          </div>
        ) : (
          <p className="text-white text-center w-full h-full flex items-center justify-center">
            No events available
          </p>
        )}
      </div>
    </div>
  );
}
