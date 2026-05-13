import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNutrientActivities } from "../../../api/FirebaseAPI";
import { NutrientActivityDocument } from "../../../data/NutrientActivityData";

const cellClass = "px-3 py-3 align-top text-sm md:text-base text-homepageHeaderText";

const MicronutrientTable = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<NutrientActivityDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNutrientActivities()
      .then((activities) => {
        setRows(activities);
      })
      .catch(() => {
        setRows([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-7 md:p-8">
        <p className="text-homepageHeaderText text-sm sm:text-base">
          Loading micronutrients...
        </p>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-7 md:p-8">
        <p className="text-homepageHeaderText text-sm sm:text-base">
          No micronutrient data is available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-7 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#D14267]">
            Vitamins & Minerals
          </p>
          <h3 className="text-titansDarkBlue font-semibold text-2xl">Micronutrients at a glance</h3>
          <p className="text-homepageHeaderText text-sm sm:text-base">
            Role, deficiency clues, and everyday food sources.{" "}
            <span className="text-[#2464A5] font-medium">Tap any nutrient to learn more.</span>
          </p>
        </div>
      </div>

      {/* Card layout for mobile */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {rows.map((row) => {
          const cardInner = (
            <>
              <div className="flex items-start gap-2 mb-2">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#EAF5FF] text-[#2464A5] font-semibold shrink-0">
                  {row.name[0]}
                </span>
                <div>
                  <p className="text-titansDarkBlue font-semibold text-lg flex items-center gap-1 text-left">
                    {row.name}
                    <span className="text-xs text-[#2464A5] font-normal ml-1">→ view</span>
                  </p>
                  <p className="text-xs text-homepageHeaderText text-left">{row.quickRole}</p>
                </div>
              </div>
              <p className="text-sm text-homepageHeaderText mb-2 text-left">
                <span className="font-semibold text-titansDarkBlue">Signs: </span>
                {row.quickSymptoms}
              </p>
              <p className="text-sm text-homepageHeaderText text-left">
                <span className="font-semibold text-titansDarkBlue">Sources: </span>
                {row.quickSources}
              </p>
            </>
          );

          return (
            <button
              key={row.slug}
              type="button"
              className="rounded-2xl border border-[#2464A5] bg-[#EAF5FF] p-4 w-full hover:shadow-md active:scale-[0.98] transition-all"
              onClick={() => navigate(row.slug)}
            >
              {cardInner}
            </button>
          );
        })}
      </div>

      {/* Table for md+ */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-xs sm:text-sm font-semibold text-titansDarkBlue">
              <th className={cellClass}>Nutrient</th>
              <th className={cellClass}>Role</th>
              <th className={cellClass}>Deficiency signs</th>
              <th className={cellClass}>Food sources</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.slug}
                className="rounded-xl transition-all bg-[#EAF5FF] cursor-pointer hover:bg-[#d6ecff] hover:shadow-sm"
                onClick={() => navigate(row.slug)}
              >
                <td className={`${cellClass} font-semibold text-titansDarkBlue`}>
                  <span className="flex items-center gap-2">
                    {row.name}
                    <span className="text-[10px] font-normal text-[#2464A5] bg-white border border-[#2464A5] rounded-full px-2 py-0.5">
                      view
                    </span>
                  </span>
                </td>
                <td className={cellClass}>{row.quickRole}</td>
                <td className={cellClass}>{row.quickSymptoms}</td>
                <td className={cellClass}>{row.quickSources}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MicronutrientTable;
