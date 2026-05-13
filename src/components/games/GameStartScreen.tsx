import React, { KeyboardEvent, MouseEvent, useCallback } from "react";
import { useGameStartedContext } from "./GameContext";
import trackAnalyticsEvent from "../../config/analytics";

type GameStartProps = {
  name: string;
  background: string;
  compact?: boolean;
  analyticsEventName?: string;
  analyticsParams?: Record<string, string | number | boolean | undefined>;
};

const GameStartScreen = ({
  name,
  background,
  compact = false,
  analyticsEventName,
  analyticsParams,
}: GameStartProps) => {
  const { getIsGameStarted, setIsGameStarted } = useGameStartedContext();

  const toggleGameStarted = useCallback(() => {
    if (!getIsGameStarted && analyticsEventName) {
      trackAnalyticsEvent(analyticsEventName, analyticsParams);
    }
    setIsGameStarted(!getIsGameStarted);
  }, [analyticsEventName, analyticsParams, getIsGameStarted, setIsGameStarted]);

  const handleContainerKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleGameStarted();
      }
    },
    [toggleGameStarted]
  );

  const handleButtonClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      toggleGameStarted();
    },
    [toggleGameStarted]
  );

  const containerPadding = compact ? "p-6 sm:p-0" : "p-11 sm:p-0";
  const bgHeights = compact
    ? "h-[240px] sm:h-[360px] md:h-[420px]"
    : "h-[260px] sm:h-[620px] md:h-[700px]";
  const titleSizes = compact
    ? "text-[32px] xs:text-[36px] sm:text-[56px] md:text-[64px]"
    : "text-[28px] xs:text-[32px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[128px]";

  return (
    <div
      className={`bg-white h-full rounded-xl shadow-lg my-10 ${containerPadding} pointer-events-auto sm:pointer-events-none`}
      onClick={toggleGameStarted}
      onKeyDown={handleContainerKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={`bg-no-repeat bg-center bg-contain w-full ${bgHeights} ${background}`}>
        <div className="h-full flex flex-col">
          <h1 className={`font-bold text-titansDarkBlue w-fit h-fit ${titleSizes} mt-auto mx-auto`}>
            {name}
          </h1>
          <button
            type="button"
            className="pointer-events-auto hidden sm:block text-[14px] bg-titansBrightPink text-white font-bold w-56 h-14 rounded-full mb-4 md:mb-10 mt-auto mx-auto shadow-lg shadow-[#d1426740] transition hover:-translate-y-0.5"
            onClick={handleButtonClick}
            data-testid="game-begin"
          >
            BEGIN
          </button>
          <p className="sm:hidden text-[14px] text-titansDarkBlue font-medium text-center w-44 h-11 rounded-full mb-12 mx-auto">
            Press to begin
          </p>
        </div>
      </div>
    </div>
  );
};

GameStartScreen.defaultProps = {
  analyticsEventName: undefined,
  analyticsParams: undefined,
  compact: false,
};

export default GameStartScreen;
