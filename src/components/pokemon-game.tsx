import { useState, useEffect } from "react";
import { GraffitiBox } from "./graffiti-box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import kmlImage from "../assets/kml.png";
import kml2Image from "../assets/kml2.png";
import { X } from "lucide-react";

export function PokemonGame() {
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showResultText, setShowResultText] = useState(false);

  const correctAnswer = "kamala kannan";

  const checkGuess = () => {
    const normalizedGuess = guess.toLowerCase().trim();

    if (normalizedGuess === correctAnswer) {
      setIsCorrect(true);
      setShowPopup(true);

      // Show result text after image fade-in
      setTimeout(() => setShowResultText(true), 1200);

      // Auto-reset everything after 10 seconds
      setTimeout(() => {
        setIsCorrect(false);
        setShowPopup(false);
        setShowResultText(false);
        setGuess("");
      }, 10000);
    } else if (normalizedGuess.length > 0) {
      setGuess(""); // reset input for wrong guess
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") checkGuess();
  };

  return (
    <section className="py-20 px-4" id="side-quest">
      <div className="container mx-auto max-w-md relative z-10">
        <GraffitiBox className="text-center relative z-10">
          <h3 className="title-font text-3xl text-primary mb-6">Side Quest</h3>
          <h4 className="content-font text-xl font-bold mb-6">
            Solve the Mystery
          </h4>

          {/* Silhouette inside card */}
          <div className="relative mb-6 flex justify-center">
            <img
              src={kml2Image}
              alt="Silhouette"
              className="w-48 h-auto object-contain"
            />
          </div>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Type the name"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-3 border-2 border-primary rounded-lg text-center font-semibold"
            />
            <Button
              onClick={checkGuess}
              className="w-full bg-primary text-primary-foreground p-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Submit
            </Button>
          </div>
        </GraffitiBox>
      </div>

      {/* Full-Screen Popup on correct guess */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          {/* Centered image */}
          <div className="relative flex flex-col items-center">
            <img
              src={kml2Image}
              alt="Silhouette"
              className={`absolute w-48 h-auto object-contain transition-opacity duration-1000 ${
                isCorrect ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={kmlImage}
              alt="KML Reveal"
              className={`w-64 h-auto object-contain transition-opacity duration-1000 ${
                isCorrect ? "opacity-100" : "opacity-0"
              }`}
            />

            {showResultText && (
              <p className="content-font text-white text-center mt-6 px-4">
                ✅ Take a screenshot and show it to <strong>Varun</strong> to
                avail your prize! First to rush gets it.
              </p>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              setShowPopup(false);
              setIsCorrect(false);
              setShowResultText(false);
              setGuess("");
            }}
            className="absolute top-4 right-4 text-white hover:text-red-500"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
