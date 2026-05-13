/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchNutrientActivity } from "../../../api/FirebaseAPI";
import {
  ChallengeCategory,
  NutrientActivityCard,
  NutrientActivityDocument,
} from "../../../data/NutrientActivityData";

type ZoneKey = "bank" | ChallengeCategory;

type Placements = Record<ZoneKey, string[]>;

const zoneMeta: Record<ChallengeCategory, { label: string; accent: string; hint: string }> = {
  role: {
    label: "Role in health",
    accent: "#2464A5",
    hint: "Drop cards that describe what this nutrient does for the body.",
  },
  symptom: {
    label: "Symptoms of deficiency",
    accent: "#D14267",
    hint: "Drop cards that explain signs of not getting enough.",
  },
  source: {
    label: "Important sources",
    accent: "#1F7A62",
    hint: "Drop food or intake cards that are real sources of this nutrient.",
  },
  false: {
    label: "Not related / trick cards",
    accent: "#A66A00",
    hint: "Use this area for the false cards that do not belong to this nutrient.",
  },
};

const shuffleCards = <T,>(items: T[]) => {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
};

const formatPathLabel = (value?: string) => {
  if (!value) return "";

  const spaced = value.replace(/([A-Z])/g, " $1").trim();
  return spaced.replace("Macro And Micro Nutrients", "Macro & Micro Nutrients");
};

const createInitialPlacements = (cards: NutrientActivityCard[]): Placements => ({
  bank: shuffleCards(cards.map((card) => card.id)),
  role: [],
  symptom: [],
  source: [],
  false: [],
});

const cardStyle: React.CSSProperties = {
  boxShadow: "0 14px 34px rgba(36,100,165,0.12)",
};

const sectionShell =
  "rounded-[2rem] border border-white/70 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[3px]";

const SectionTitle = ({ title, accent }: { title: string; accent: string }) => (
  <div className="flex items-center gap-3">
    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />
    <h2 className="text-xl font-extrabold tracking-[-0.02em] text-[#16367A]">{title}</h2>
  </div>
);

const SortableCard = ({
  card,
  isChecked,
  isCorrect,
}: {
  card: NutrientActivityCard;
  isChecked: boolean;
  isCorrect: boolean;
}) => {
  let statusClass = "border-white/80 bg-white";

  if (isChecked) {
    statusClass = isCorrect ? "border-[#2C8B6D] bg-[#EAF9F3]" : "border-[#D14267] bg-[#FFF0F4]";
  }

  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", card.id);
      }}
      className={`rounded-[1.5rem] border px-4 py-4 text-left text-[#173B7A] transition-transform hover:-translate-y-0.5 ${statusClass}`}
      style={cardStyle}
    >
      <div className="flex items-start gap-3">
        {card.emoji && (
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4FAFF] text-2xl">
            {card.emoji}
          </span>
        )}
        <div className="flex-1">
          <p className="text-base font-semibold leading-snug">{card.text}</p>
          {isChecked && (
            <p className={`mt-2 text-xs font-semibold ${isCorrect ? "text-[#2C8B6D]" : "text-[#D14267]"}`}>
              {isCorrect ? "Correct placement" : "Wrong placement"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const NutrientCardPage = () => {
  const { nutrientName, nutritionName } = useParams<{
    nutrientName: string;
    nutritionName: string;
  }>();
  const [nutrient, setNutrient] = useState<NutrientActivityDocument | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [placements, setPlacements] = useState<Placements>({
    bank: [],
    role: [],
    symptom: [],
    source: [],
    false: [],
  });
  const [hasCheckedAnswers, setHasCheckedAnswers] = useState(false);

  useEffect(() => {
    if (!nutrientName) return;

    setIsLoading(true);

    fetchNutrientActivity(nutrientName)
      .then((activity) => {
        setNutrient(activity);
      })
      .catch(() => {
        setNutrient(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [nutrientName]);

  useEffect(() => {
    if (!nutrient) return;

    setPlacements(createInitialPlacements(nutrient.cards));
    setHasCheckedAnswers(false);
  }, [nutrient]);

  if (isLoading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-xl font-semibold text-titansDarkBlue">Loading nutrient...</p>
      </div>
    );
  }

  if (!nutrient) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-xl font-semibold text-titansDarkBlue">Nutrient not found.</p>
      </div>
    );
  }

  const challengeCards = nutrient.cards;
  const cardMap = Object.fromEntries(challengeCards.map((card) => [card.id, card])) as Record<
    string,
    NutrientActivityCard
  >;
  const parentNutritionLabel = formatPathLabel(nutritionName);

  const moveCard = (cardId: string, targetZone: ZoneKey) => {
    setPlacements((current) => {
      const nextEntries = Object.entries(current).map(([zone, cardIds]) => [
        zone,
        cardIds.filter((id) => id !== cardId),
      ]) as [ZoneKey, string[]][];

      const next = Object.fromEntries(nextEntries) as Placements;
      next[targetZone] = [...next[targetZone], cardId];
      return next;
    });
  };

  const handleDrop = (targetZone: ZoneKey, event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    if (!cardId) return;

    moveCard(cardId, targetZone);
  };

  const handleReset = () => {
    setPlacements(createInitialPlacements(challengeCards));
    setHasCheckedAnswers(false);
  };

  const placedCount =
    placements.role.length +
    placements.symptom.length +
    placements.source.length +
    placements.false.length;
  const totalCount = challengeCards.length;
  const correctCount = (
    ["role", "symptom", "source", "false"] as ChallengeCategory[]
  ).reduce(
    (total, zone) =>
      total +
      placements[zone].filter((cardId) => cardMap[cardId]?.category === zone).length,
    0,
  );

  return (
    <div
      className="min-h-[calc(100vh-64px)]"
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0) 28%), linear-gradient(160deg, #D6EDF8 0%, #EAF5FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#33538F]">
          <NavLink className="transition hover:text-[#16367A]" to="/FoodAndNutrition">
            Food & Nutrition
          </NavLink>
          <span className="text-[#D14267]">{">"}</span>
          <NavLink
            className="transition hover:text-[#16367A]"
            to={`/FoodAndNutrition/Nutrition/${nutritionName}`}
          >
            {parentNutritionLabel}
          </NavLink>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
          <aside className={`${sectionShell} h-fit p-5 xl:sticky xl:top-6`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1F7A62]">Card bank</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[#16367A]">
                  Sort the cards
                </h1>
                <p className="mt-2 text-sm leading-6 text-[#33538F]">
                  {nutrient.instructions}
                </p>
              </div>
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-extrabold text-white"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${nutrient.symbolBg}CC, ${nutrient.symbolBg})`,
                  boxShadow: "0 14px 32px rgba(10,36,114,0.16)",
                }}
              >
                {nutrient.symbol}
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/80 bg-white/70 px-4 py-4">
              <p className="text-lg font-bold text-[#16367A]">{nutrient.label}</p>
              <p className="mt-1 text-sm text-[#33538F]">{nutrient.symbolEmoji} Interactive sorting activity prototype</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-[#16367A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#102B61]"
                onClick={() => setHasCheckedAnswers(true)}
              >
                Check answers
              </button>
              <button
                type="button"
                className="rounded-full border border-[#16367A]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#16367A] transition hover:bg-white"
                onClick={handleReset}
              >
                Reset board
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-[1.4rem] bg-white/70 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6A7FAE]">Placed</p>
                <p className="mt-1 text-2xl font-extrabold text-[#16367A]">{placedCount}/{totalCount}</p>
              </div>
              <div className="rounded-[1.4rem] bg-white/70 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6A7FAE]">Score</p>
                <p className="mt-1 text-2xl font-extrabold text-[#16367A]">
                  {hasCheckedAnswers ? `${correctCount}/${totalCount}` : "--"}
                </p>
              </div>
            </div>

            <div
              className="mt-5 min-h-[420px] rounded-[1.75rem] border border-dashed border-[#16367A]/20 bg-white/45 p-4"
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => handleDrop("bank", event)}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <SectionTitle title="Available cards" accent="#16367A" />
                <span className="rounded-full bg-[#EAF5FF] px-3 py-1 text-xs font-bold text-[#2464A5]">
                  {placements.bank.length}
                </span>
              </div>
              <div className="grid gap-3">
                {placements.bank.length > 0 ? (
                  placements.bank
                    .filter((cardId) => Boolean(cardMap[cardId]))
                    .map((cardId) => (
                      <SortableCard
                        key={cardId}
                        card={cardMap[cardId]}
                        isChecked={false}
                        isCorrect={false}
                      />
                    ))
                ) : (
                  <div className="rounded-[1.5rem] border border-dashed border-[#2464A5]/25 bg-white/60 px-4 py-8 text-center text-sm text-[#5670A5]">
                    Drop cards back here if you want to try again before checking.
                  </div>
                )}
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <section className={`${sectionShell} p-5 sm:p-6`}>
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D14267]">
                    Interactive board
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-[#16367A]">
                    Place each card in the right area
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#33538F]">
                    This layout is designed for a later Firebase-backed activity.
                    Each card already has a correct category, so the data can map
                    directly to stored quiz items.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-white/80 bg-white/70 px-5 py-4 text-sm text-[#33538F]">
                  <p className="font-semibold text-[#16367A]">Prototype flow</p>
                  <p className="mt-1">
                    Bank on the left, sorting zones on the right, answer check
                    after drag and drop.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
              {(["role", "symptom", "source", "false"] as ChallengeCategory[]).map((zone) => (
                <section
                  key={zone}
                  className={`${sectionShell} p-5 sm:p-6`}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => handleDrop(zone, event)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <SectionTitle title={zoneMeta[zone].label} accent={zoneMeta[zone].accent} />
                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#5670A5]">{zoneMeta[zone].hint}</p>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: `${zoneMeta[zone].accent}18`, color: zoneMeta[zone].accent }}
                    >
                      {placements[zone].length} cards
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {placements[zone].length > 0 ? (
                      placements[zone]
                        .filter((cardId) => Boolean(cardMap[cardId]))
                        .map((cardId) => (
                          <SortableCard
                            key={cardId}
                            card={cardMap[cardId]}
                            isChecked={hasCheckedAnswers}
                            isCorrect={cardMap[cardId]?.category === zone}
                          />
                        ))
                    ) : (
                      <div className="rounded-[1.5rem] border border-dashed border-[#16367A]/15 bg-white/50 px-4 py-10 text-center text-sm text-[#7A8EB7]">
                        Drop cards here.
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NutrientCardPage;
