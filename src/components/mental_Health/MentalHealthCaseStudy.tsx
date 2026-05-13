import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import { caseStudies } from "../../data/MentalHealthCaseStudies";
import { fetchMentalHealthCaseStudies } from "../../api/FirebaseAPI";
import VideoPlayer from "../videos/VideoPlayer";

const MentalHealthCaseStudy = () => {
  const { caseStudyId } = useParams();
  const [studies, setStudies] = useState(caseStudies);

  useEffect(() => {
    fetchMentalHealthCaseStudies()
      .then((firebaseStudies) => {
        if (firebaseStudies.length > 0) {
          setStudies(firebaseStudies);
        }
      })
      .catch(() => undefined);
  }, []);

  const study = useMemo(
    () => studies.find((item) => item.id === caseStudyId),
    [studies, caseStudyId]
  );

  if (!study) {
    return (
      <>
        <AppHeader>
          <MenuHeader title="Case Study" body="We could not find that athlete case study." />
        </AppHeader>
        <div className="px-6 md:px-10 pb-20">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <Link className="text-[#D14267] font-semibold" to="/MentalHealth">
              Back to Mental Health
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AppHeader>
        <MenuHeader title={study.name} body={study.summary} />
      </AppHeader>
      <div className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-6 items-start">
              <div className="w-full h-72 rounded-2xl overflow-hidden bg-slate-100">
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
              <div>
                <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">
                  {study.title}
                </h2>
                <p className="text-homepageHeaderText text-sm md:text-base font-medium mb-5">
                  Learning focus: pressure, recovery and practical habits you can try in your own
                  week.
                </p>
                <ul className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
                  {study.details.map((detail) => (
                    <li key={detail}>- {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">Try this this week</h3>
              <ul className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
                {study.whatHelped.slice(0, 3).map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">{study.videoTitle}</h3>
              <div className="max-w-xl">
                <VideoPlayer videoUrl={study.videoUrl} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">Context</h3>
            <div className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
              {study.background.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">What helped</h3>
            <ul className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
              {study.whatHelped.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <h3 className="text-titansDarkBlue font-semibold text-2xl mb-4">Takeaway</h3>
            <p className="text-homepageHeaderText text-base md:text-lg font-medium">
              {study.takeaway}
            </p>
            <Link className="inline-block mt-5 text-[#D14267] font-semibold" to="/MentalHealth">
              Back to all case studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentalHealthCaseStudy;
