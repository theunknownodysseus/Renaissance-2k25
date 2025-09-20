import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set event date to January 31, 2025
    const eventDate = new Date('2025-09-23T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className="title-font text-2xl md:text-3xl mb-4 text-center">TIME LEFT TO REGISTER</h2>
      <div className="flex justify-center space-x-4">
        <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-days">
          <div className="text-3xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-sm text-white">DAYS</div>
        </div>
        <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-hours">
          <div className="text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-sm text-white">HRS</div>
        </div>
        <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-minutes">
          <div className="text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-sm text-white">MINs</div>
        </div>
        <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-seconds">
          <div className="text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-sm text-white">SEC</div>
        </div>
      </div>
      </>
  );
}
