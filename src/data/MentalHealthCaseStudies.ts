export type CaseStudy = {
  id: string;
  name: string;
  title: string;
  summary: string;
  image: string;
  videoUrl: string;
  videoTitle: string;
  featured?: boolean;
  details: string[];
  background: string[];
  whatHelped: string[];
  takeaway: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "caleb-dressel",
    name: "Caleb Dressel",
    title: "Managing pressure at the highest level",
    summary:
      "An elite swimmer balancing performance pressure, expectations and recovery after major competitions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Caeleb_Dressel_before_winning_100_fly_%2842769914221%29_%28cropped%29.jpg",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    videoTitle: "Mindset highlight",
    details: [
      "Caleb has spoken about stepping back from racing periods to protect his wellbeing.",
      "He uses clear routines around sleep, nutrition and training blocks to reduce overwhelm.",
      "His case shows that asking for support can improve long-term consistency, not reduce ambition.",
    ],
    background: [
      "At elite level, swimmers face pressure from qualification standards, travel schedules and public expectation.",
      "When stress builds for too long, focus and confidence can drop even if physical fitness remains high.",
      "For younger athletes, this is a reminder that strong performance plans should include recovery plans.",
    ],
    whatHelped: [
      "Regular check-ins with coaches and trusted family members.",
      "Planned rest periods after major competition blocks.",
      "Small daily routines: hydration targets, sleep goals and low-pressure sessions.",
      "Clear boundaries around media and social expectations.",
    ],
    takeaway:
      "Mental health support works best when it is built into training from the start, not added only during crises.",
  },
  {
    id: "michael-phelps",
    name: "Michael Phelps",
    title: "Opening up after success",
    summary:
      "After record-breaking achievements, Michael has spoken publicly about depression and feeling isolated.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Michael_Phelps_%283736588656%29.jpg",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4",
    videoTitle: "Recovery highlight",
    details: [
      "Michael has discussed periods of depression despite major competitive success.",
      "He has highlighted therapy and honest conversations as key parts of recovery.",
      "His story made mental-health discussion more visible in professional sport.",
    ],
    background: [
      "Success can create the assumption that everything is fine, even when someone is struggling privately.",
      "Athletes often experience a strong emotional drop after major events due to fatigue and identity pressure.",
      "Younger athletes can face similar patterns after exams, finals or big tournaments.",
    ],
    whatHelped: [
      "Professional therapy and structured support.",
      "Speaking honestly with close people rather than hiding symptoms.",
      "Replacing all-or-nothing thinking with realistic daily goals.",
      "Using advocacy work to create meaning beyond medal results.",
    ],
    takeaway:
      "Achievement does not cancel mental-health risk. Early conversation and professional support are protective.",
  },
  {
    id: "kristof-milak",
    name: "Kristof Milak",
    title: "Resetting for long-term performance",
    summary:
      "A world-class swimmer known for discipline and focus, while managing the demands of elite training.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Krist%C3%B3f_Mil%C3%A1k_%28HUN%29_2018.jpg",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    videoTitle: "Consistency highlight",
    details: [
      "Kristof's case highlights how elite preparation needs both intensity and recovery.",
      "Long seasons require mental reset points, not only physical tapering.",
      "Consistent support from coaches and team culture protects confidence.",
    ],
    background: [
      "High-performance cycles can create cumulative fatigue across a season.",
      "Without mental reset time, decision quality and motivation can decline.",
      "Building a sustainable schedule helps athletes stay engaged and healthy over multiple years.",
    ],
    whatHelped: [
      "Clear performance phases with planned low-intensity periods.",
      "Defined routines for sleep and off-day recovery.",
      "Coach-athlete communication focused on process, not only outcomes.",
      "Separating personal identity from race results.",
    ],
    takeaway:
      "Long-term progress depends on disciplined recovery just as much as disciplined training.",
  },
  {
    id: "simone-biles",
    name: "Simone Biles",
    title: "Prioritising safety and mental readiness",
    summary:
      "An elite gymnast who openly discussed stepping back when mental pressure affected performance and safety.",
    image: "https://picsum.photos/seed/simone-biles/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    videoTitle: "Safety-first highlight",
    details: [
      "Simone explained that mental readiness and physical readiness are inseparable in high-risk sports.",
      "Her decision to pause highlighted athlete safety over external pressure.",
      "She helped normalise mental-health discussions in global sport settings.",
    ],
    background: [
      "In judged and technical sports, concentration errors can have immediate physical consequences.",
      "Public attention can make it difficult for athletes to make health-first decisions.",
      "Her case is widely used as an example of leadership under pressure.",
    ],
    whatHelped: [
      "Strong communication with team staff and medical professionals.",
      "A clear return-to-competition pathway rather than rushed decisions.",
      "Supportive messaging from peers, family and wider sport communities.",
      "Focusing on long-term wellbeing and career sustainability.",
    ],
    takeaway:
      "Stepping back can be a performance decision and a safety decision at the same time.",
  },
  {
    id: "naomi-osaka",
    name: "Naomi Osaka",
    title: "Setting boundaries in public sport",
    summary:
      "A top tennis player who emphasised personal wellbeing and limits while competing on major stages.",
    image: "https://picsum.photos/seed/naomi-osaka/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    videoTitle: "Boundary-setting highlight",
    details: [
      "Naomi has spoken openly about anxiety linked to high-visibility competition environments.",
      "She demonstrated practical boundary-setting around media obligations.",
      "Her actions pushed organisations to discuss athlete wellbeing policies more directly.",
    ],
    background: [
      "Individual sports place full result responsibility on one athlete.",
      "Constant interviews and public commentary can intensify stress during events.",
      "Younger players often need guidance on balancing openness with personal boundaries.",
    ],
    whatHelped: [
      "Clear communication about limits before events begin.",
      "A support team aligned on mental-health priorities.",
      "Structured routines that reduce unnecessary decision fatigue.",
      "Protected time away from social and media pressure.",
    ],
    takeaway:
      "Boundaries are a practical wellbeing skill, not a sign of weakness or disengagement.",
  },
  {
    id: "marcus-rashford",
    name: "Marcus Rashford",
    title: "Community purpose and personal resilience",
    summary:
      "A professional footballer balancing performance expectations with social impact work and public attention.",
    image: "https://picsum.photos/seed/marcus-rashford/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoTitle: "Resilience highlight",
    details: [
      "Marcus combines elite performance demands with visible community leadership.",
      "His example shows how purpose can support motivation when pressure is high.",
      "He also highlights the need for rest when carrying multiple responsibilities.",
    ],
    background: [
      "Athletes with public platforms often manage both sport and external commitments.",
      "High visibility can increase emotional load and reduce private recovery time.",
      "Stable routines and trusted mentors are especially important in these contexts.",
    ],
    whatHelped: [
      "Strong day-to-day structure around training and recovery.",
      "Delegating non-sport workload to reliable teams.",
      "Keeping regular connection with family and trusted advisors.",
      "Using clear priorities during congested match periods.",
    ],
    takeaway:
      "Purpose can strengthen resilience, but sustainable impact requires protected recovery and support.",
  },
  {
    id: "katie-ledecky",
    name: "Katie Ledecky",
    title: "Consistency through routine",
    summary:
      "A long-distance swimmer known for discipline, planning and staying calm through long training cycles.",
    image: "https://picsum.photos/seed/katie-ledecky/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    videoTitle: "Routine highlight",
    details: [
      "Katie's case shows how stable routines reduce stress in demanding seasons.",
      "She focuses on repeatable habits instead of chasing motivation every day.",
      "Her consistency supports both confidence and recovery.",
    ],
    background: [
      "Endurance sports demand patience and long-term planning.",
      "Mental fatigue often appears when routines become unclear or rushed.",
      "Clear weekly structure helps athletes stay steady through peak blocks.",
    ],
    whatHelped: [
      "Simple pre-session and post-session routines.",
      "Tracking effort and mood alongside training data.",
      "Protecting rest days with the same discipline as training days.",
      "Keeping goals process based rather than only result based.",
    ],
    takeaway: "A repeatable routine is one of the strongest tools for long-term mental resilience.",
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    title: "Performance under constant attention",
    summary:
      "A Formula 1 driver navigating pressure, travel, media and split-second decision making.",
    image: "https://picsum.photos/seed/lewis-hamilton/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    videoTitle: "Focus under pressure",
    details: [
      "Lewis has discussed managing emotional pressure in high-visibility environments.",
      "He uses preparation and mental reset habits between races.",
      "His story highlights coping with scrutiny while maintaining performance.",
    ],
    background: [
      "Motorsport combines technical pressure with constant public attention.",
      "Frequent travel can reduce recovery quality if routines are not protected.",
      "Short reset windows are essential between events.",
    ],
    whatHelped: [
      "Structured race-week routines.",
      "Intentional recovery windows after travel days.",
      "Clear team communication before and after sessions.",
      "Personal reflection to reduce carry-over stress.",
    ],
    takeaway: "Under constant pressure, structure and recovery habits keep decision making sharp.",
  },
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    title: "Balancing team demands and personal wellbeing",
    summary:
      "A football athlete balancing club and international expectations with family and recovery needs.",
    image: "https://picsum.photos/seed/alex-morgan/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    videoTitle: "Balance highlight",
    details: [
      "Alex's case shows the value of planning recovery around busy team schedules.",
      "She demonstrates how role clarity reduces unnecessary stress.",
      "Stable off-pitch routines can support stronger on-pitch decisions.",
    ],
    background: [
      "Team athletes often manage frequent shifts between training intensity and travel.",
      "Competing priorities can create fatigue if boundaries are unclear.",
      "Clear communication supports both wellbeing and team performance.",
    ],
    whatHelped: [
      "Weekly planning that includes personal recovery time.",
      "Coordination with coaching staff around workload.",
      "Strong support network for life outside sport.",
      "Using short reset practices before major fixtures.",
    ],
    takeaway:
      "Performance improves when athletes protect personal wellbeing as part of the training plan.",
  },
  {
    id: "tyson-fury",
    name: "Tyson Fury",
    title: "Rebuilding confidence after setbacks",
    summary:
      "A boxer who has openly described mental-health struggles and the work required to return.",
    image: "https://picsum.photos/seed/tyson-fury/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    videoTitle: "Comeback highlight",
    details: [
      "Tyson has spoken publicly about depression and rebuilding his routine.",
      "His return focused on gradual progress rather than immediate perfection.",
      "His case reinforces that recovery can be non-linear and still successful.",
    ],
    background: [
      "Combat sports carry strong pressure around identity and results.",
      "After setbacks, motivation may fluctuate week to week.",
      "Progress is often sustained by structure rather than emotion.",
    ],
    whatHelped: [
      "Incremental goals with consistent follow-up.",
      "Support from trusted people and professionals.",
      "Training plans matched to current readiness.",
      "Accepting setbacks as part of long-term progress.",
    ],
    takeaway:
      "Recovery is built through consistent small steps, even when motivation is inconsistent.",
  },
  {
    id: "megan-rapinoe",
    name: "Megan Rapinoe",
    title: "Leadership, pressure and wellbeing",
    summary:
      "A football leader balancing performance, advocacy and team responsibility over many seasons.",
    image: "https://picsum.photos/seed/megan-rapinoe/1200/900",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    videoTitle: "Leadership highlight",
    details: [
      "Megan's case highlights the extra load leaders often carry within teams.",
      "She shows how communication and role clarity reduce pressure accumulation.",
      "Leadership is strongest when recovery is prioritized, not skipped.",
    ],
    background: [
      "Leadership roles increase emotional and social demand in addition to physical training.",
      "Without boundaries, leaders can absorb too much team stress.",
      "Shared responsibility helps protect mental wellbeing across the squad.",
    ],
    whatHelped: [
      "Clear delegation and role-sharing across the team.",
      "Regular check-ins with staff and teammates.",
      "Planned decompression time after major matches.",
      "Maintaining identity outside sport roles.",
    ],
    takeaway:
      "Good leadership includes protecting your own wellbeing so you can support others consistently.",
  },
];
