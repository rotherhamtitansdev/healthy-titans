import React from "react";

const shades = [
  { color: "#fefce8", label: "Pale straw", message: "Great hydration" }, // very light yellow
  { color: "#fef9c3", label: "Light yellow", message: "Well hydrated" },
  { color: "#fef08a", label: "Lemon", message: "Keep sipping water" },
  { color: "#fde047", label: "Yellow", message: "Add a glass soon" },
  { color: "#facc15", label: "Dark yellow", message: "Drink water now" },
  { color: "#eab308", label: "Amber", message: "Dehydrated — drink and pause exercise" },
  { color: "#b45309", label: "Brown", message: "Seek medical advice if it stays this dark" },
];

const HydrationUrineScale = () => (
  <div
    className="bg-white rounded-3xl shadow-lg p-5 sm:p-7 md:p-8 mt-6"
    style={{ fontFamily: '"Quicksand", "Comic Sans MS", sans-serif' }}
  >
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
      <div>
        <p className="uppercase tracking-[0.24em] text-xs font-bold text-[#2464A5]">
          Hydration check
        </p>
        <h3 className="text-titansDarkBlue font-bold text-2xl">Urine colour scale</h3>
        <p className="text-homepageHeaderText text-sm sm:text-base font-medium">
          Use colour as a quick guide. Aim for the pale shades during the day.
        </p>
      </div>
      <p className="text-homepageHeaderText text-xs sm:text-sm font-medium">
        Tip: check first thing in the morning and after training.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {shades.map((shade) => (
        <div
          key={shade.color}
          className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
        >
          <div style={{ background: shade.color }} className="h-16" />
          <div className="p-3">
            <p className="text-titansDarkBlue font-bold text-sm tracking-[0.01em]">
              {shade.label}
            </p>
            <p className="text-homepageHeaderText text-sm font-medium">{shade.message}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HydrationUrineScale;
