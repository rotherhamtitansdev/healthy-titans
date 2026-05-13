import React from "react";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import trackAnalyticsEvent from "../../config/analytics";

const waysToHelp = [
  {
    title: "Volunteer",
    description: "Support sessions, events and activities with the community team.",
    level: "Time: 2-4 hours/week",
    actionText: "Volunteer interest form",
    actionPath: "https://www.titanscommunityfoundation.co.uk",
  },
  {
    title: "Partner with us",
    description: "Schools and local groups can collaborate on healthy living programmes.",
    level: "Time: Monthly planning",
    actionText: "Partnership enquiry",
    actionPath: "mailto:info@titanscommunityfoundation.co.uk",
  },
  {
    title: "Share resources",
    description: "Help families by sharing recipes, fitness ideas and wellbeing support.",
    level: "Time: Flexible",
    actionText: "Submit a resource",
    actionPath: "mailto:info@titanscommunityfoundation.co.uk",
  },
];

const contactEmail = "info@titanscommunityfoundation.co.uk";

const GetInvolved = () => (
  <>
    <AppHeader>
      <MenuHeader
        title="Get Involved"
        body="Want to support healthier futures for children and young people? Here are a few ways to take part."
      />
    </AppHeader>
    <div className="px-6 md:px-10 pb-20">
      <div className="max-w-6xl mx-auto space-y-6">
        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-3">
            Make an impact this month
          </h2>
          <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-2">
            Every role helps. You can give time, skills or local connections to help children and
            families build healthier habits.
          </p>
          <p className="text-homepageHeaderText text-base md:text-lg font-medium">
            Choose one option below, start small, and scale your involvement over time.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-3">
            Contact the team
          </h2>
          <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-4">
            For volunteering, partnerships or community support ideas, email the team and include a
            short note about how you would like to get involved.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-block rounded-full bg-[#D14267] px-5 py-3 text-white font-semibold"
            onClick={() => {
              trackAnalyticsEvent("get_involved_contact_email_clicked", {
                contact_email: contactEmail,
              });
            }}
          >
            {contactEmail}
          </a>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {waysToHelp.map((item) => (
            <section
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-6 md:p-8 h-full flex flex-col"
            >
              <span className="inline-block rounded-full bg-[#EAF5FF] text-[#2464A5] px-3 py-1 text-xs font-semibold mb-3 w-fit">
                {item.level}
              </span>
              <h2 className="text-titansDarkBlue font-semibold text-2xl mb-3">{item.title}</h2>
              <p className="text-homepageHeaderText text-base md:text-lg font-medium mb-5">
                {item.description}
              </p>
              <a
                href={item.actionPath}
                target={item.actionPath.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="mt-auto text-[#D14267] font-semibold"
                onClick={() => {
                  trackAnalyticsEvent("get_involved_clicked", {
                    action_title: item.title,
                    action_text: item.actionText,
                    action_path: item.actionPath,
                  });
                }}
              >
                {item.actionText}
              </a>
            </section>
          ))}
        </div>

        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
          <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">
            Start here in 3 steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-titansDarkBlue font-semibold text-lg mb-1">1. Pick a role</p>
              <p className="text-homepageHeaderText text-sm md:text-base font-medium">
                Choose volunteer, partner, or resource sharing based on your availability.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-titansDarkBlue font-semibold text-lg mb-1">2. Contact us</p>
              <p className="text-homepageHeaderText text-sm md:text-base font-medium">
                Send a short message with your interests and we&apos;ll reply with next steps.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-titansDarkBlue font-semibold text-lg mb-1">3. Take action</p>
              <p className="text-homepageHeaderText text-sm md:text-base font-medium">
                Join your first activity and review what level of commitment works best for you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default GetInvolved;
