import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import { caseStudies } from "../../data/MentalHealthCaseStudies";
import {
  fetchMentalHealthCaseStudies,
  fetchMentalHealthMissions,
  MentalHealthMission,
} from "../../api/FirebaseAPI";
import VideoPlayer from "../videos/VideoPlayer";

const wellbeingMissions: MentalHealthMission[] = [
  {
    title: "60-second reset",
    description: "Take one slow breath in for 4 counts and out for 6 counts, five times.",
  },
  {
    title: "Team check-in",
    description: "Ask one friend how they are feeling today and listen fully before replying.",
  },
  {
    title: "Win list",
    description: "Write down three things you did well this week, even if they were small.",
  },
];

const pageSize = 6;

const MentalHealth = () => {
  const [studies, setStudies] = useState(caseStudies);
  const [missions, setMissions] = useState(wellbeingMissions);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMentalHealthCaseStudies()
      .then((firebaseStudies) => {
        if (firebaseStudies.length > 0) {
          setStudies(firebaseStudies);
        }
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    fetchMentalHealthMissions()
      .then((firebaseMissions) => {
        if (firebaseMissions.length > 0) {
          setMissions(firebaseMissions);
        }
      })
      .catch(() => undefined);
  }, []);

  const totalPages = Math.max(1, Math.ceil(studies.length / pageSize));
  const featuredStudy = useMemo(
    () => studies.find((study) => study.featured) || studies[0],
    [studies]
  );
  const paginatedCaseStudies = useMemo(
    () => studies.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [studies, currentPage]
  );

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="Mental Health"
          body="Looking after your mind is just as important as looking after your body. Explore quick ways to feel calmer, stronger and more supported."
        />
      </AppHeader>

      <div className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-full">
              <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-3">
                Athlete video highlight
              </h2>
              <p className="text-homepageHeaderText text-sm md:text-base font-medium mb-4">
                Quick watch: short clip linked to this week&apos;s athlete story.
              </p>
              <div className="max-w-2xl">
                <VideoPlayer videoUrl={featuredStudy.videoUrl} />
              </div>
              <Link
                className="inline-block mt-4 text-[#D14267] font-semibold"
                to={`/MentalHealth/${featuredStudy.id}`}
              >
                Watch full case study: {featuredStudy.name}
              </Link>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-full">
              <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-3">
                Weekly wellbeing missions
              </h2>
              <p className="text-homepageHeaderText text-sm md:text-base font-medium mb-4">
                Pick one challenge today. Keep it simple, repeat it this week, and notice how you
                feel.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {missions.map((mission) => (
                  <div
                    key={mission.title}
                    className="rounded-2xl bg-slate-50 p-4 border border-slate-100"
                  >
                    <p className="text-titansDarkBlue font-semibold text-lg mb-1">
                      {mission.title}
                    </p>
                    <p className="text-homepageHeaderText text-sm md:text-base font-medium">
                      {mission.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-5">
              Athlete case study tiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedCaseStudies.map((study) => (
                <Link
                  key={study.id}
                  to={`/MentalHealth/${study.id}`}
                  className="text-left bg-white rounded-3xl shadow-lg p-6 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] h-full flex flex-col"
                >
                  <div className="w-full h-44 rounded-2xl mb-4 overflow-hidden bg-slate-100">
                    <img
                      src={study.image}
                      alt={study.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/seed/athlete-fallback/900/600";
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="inline-block rounded-full bg-[#FCE8EE] text-[#A33152] px-3 py-1 text-xs font-semibold mb-3">
                    Case Study
                  </span>
                  <p className="text-titansDarkBlue font-semibold text-xl mb-2">{study.name}</p>
                  <p className="text-homepageHeaderText text-sm md:text-base font-medium">
                    {study.summary}
                  </p>
                  <p className="text-[#D14267] font-semibold text-sm mt-4">Open story</p>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  type="button"
                  className="px-3 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      type="button"
                      className={`px-3 py-2 rounded-full text-sm font-semibold ${
                        currentPage === page
                          ? "bg-[#D14267] text-white"
                          : "bg-white shadow text-titansDarkBlue"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  type="button"
                  className="px-3 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentalHealth;
