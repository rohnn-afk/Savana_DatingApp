import { useState, useEffect, useCallback } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";


const CountUpTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const updateTimer = useCallback(() => {
    if (isRunning) {
      setElapsedTime((prev) => prev + 1);
    }
  }, [isRunning]);

  useEffect(() => {
    const intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, [updateTimer]);

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(true);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const time = formatTime(elapsedTime);

  return (
    <div
      className={` flex flex-col items-center justify-center transition-colors duration-500 `}
    >
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-3 rounded-full transition-colors duration-300 hover:bg-opacity-20 hover:bg-white"
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <MdLightMode className="w-6 h-6" />
        ) : (
          <MdDarkMode className="w-6 h-6" />
        )}
      </button>

      <div className="text-center space-y-8">
        <div className="grid grid-cols-4 gap-4 p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg shadow-xl">
          <TimeUnit label="Days" value={time.days} />
          <TimeUnit label="Hours" value={time.hours} />
          <TimeUnit label="Minutes" value={time.minutes} />
          <TimeUnit label="Seconds" value={time.seconds} />
        </div>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center justify-center p-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-lg"
            aria-label={isRunning ? "Pause Timer" : "Start Timer"}
          >
            {isRunning ? (
              <FaPause className="w-6 h-6" />
            ) : (
              <FaPlay className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center justify-center p-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-lg"
            aria-label="Reset Timer"
          >
            <FaRedo className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-6xl font-bold mb-2 transition-all duration-300 transform hover:scale-110">
      {value}
    </div>
    <div className="text-sm uppercase tracking-wider opacity-80">{label}</div>
  </div>
);

export default CountUpTimer;
