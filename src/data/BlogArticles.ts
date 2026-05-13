export type BlogArticle = {
  id: string;
  title: string;
  summary: string;
  category:
    | "Food"
    | "Recovery"
    | "Home"
    | "Hydration"
    | "Performance"
    | "Digital habits"
    | "Illness";
  publishedAt: string;
  readTime: string;
  heroImage: string;
  body: string[];
  tips: string[];
  videoUrl: string;
  challenge?: string;
  featured?: boolean;
};

export const blogArticles: BlogArticle[] = [
  {
    id: "youth-diabetes-basics",
    title: "Diabetes basics for young athletes and families",
    summary:
      "Understand the signs, simple daily habits and safety steps that help kids with diabetes stay active and confident.",
    category: "Illness",
    publishedAt: "2026-03-19",
    readTime: "6 min read",
    heroImage: "https://picsum.photos/seed/diabetes-youth/1400/900",
    body: [
      "Type 2 diabetes is rising in kids and teens, but early habits and screening help. The CDC says children with risk factors like higher weight or a family history should be tested at age 10 or at puberty, then every 3 years." ,
      "Daily movement is a cornerstone. The CDC recommends children 6–17 get at least 60 minutes of activity every day; even a 10-minute walk after dinner builds the habit." ,
      "Balanced meals matter. Aim for vegetables, lean protein and whole grains while limiting added sugars. The Dietary Guidelines advise keeping added sugars under 10% of daily calories for anyone age 2 or older. Water is the default drink; sugary drinks spike blood sugar quickly." ,
      "Know your targets and patterns. Use a meter or CGM to see how meals, stress and training sessions affect levels, and agree target ranges with your diabetes team." ,
      "Be ready for lows. The CDC’s 15-15 rule: take 15 g of fast carbs, wait 15 minutes, recheck, and repeat if still below 70 mg/dL. Young children may need smaller amounts—follow the care plan your clinician sets." ,
      "Sports days need a plan. Pack fast carbs for lows, a labelled water bottle, and schedule checks before and after sessions. Have a ketone plan for sick days and high readings." ,
    ],
    tips: [
      "Book regular screening from age 10 (or puberty) if your child has risk factors.",
      "Build a 60-min activity block daily—walks, biking, dancing all count.",
      "Use the plate method: half veg/fruit, quarter lean protein, quarter whole grains.",
      "Limit added sugars to under 10% of calories; swap soda for water.",
      "Practice the 15-15 rule at home so kids know it before they need it.",
      "Keep fast-acting carbs in every sports bag and classroom kit.",
      "Check blood sugar before and after exercise; note what causes highs or lows.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=0uZ9er46QwA",
  },
  {
    id: "snack-swaps",
    title: "5 snack swaps for more energy",
    summary:
      "Small choices can make a big difference. These easy swaps help you stay fuelled for school, sport and play.",
    category: "Food",
    publishedAt: "2026-01-15",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/snack-swaps/1400/900",
    body: [
      "A snack supports concentration best when it combines fiber, protein and hydration, not just quick sugar.",
      "High-sugar snacks often give a short boost followed by an energy dip, which can affect learning and mood.",
      "A practical structure for families is to pair one carbohydrate food with one protein food and a drink of water.",
      "Consistency matters more than perfection. Repeating two or three reliable options each week usually works better than complex plans.",
      "Involving children in preparing snacks increases acceptance and makes healthier choices feel normal, not restrictive.",
    ],
    tips: [
      "Use wholegrain crackers with hummus instead of crisps.",
      "Use banana with peanut butter instead of sugary cereal bars.",
      "Use yogurt and berries instead of chocolate biscuits.",
      "Add a water bottle to every snack routine.",
      "Prep two snack options the night before school.",
      "Keep grab-and-go fruit visible in the kitchen.",
      "Choose one snack rule for the week and track how energy feels.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=2N0atNeI8h8",
  },
  {
    id: "sleep-and-fitness",
    title: "How sleep supports fitness",
    summary:
      "Sleep helps your body recover and your brain focus. Learn simple habits for better rest each night.",
    category: "Recovery",
    publishedAt: "2026-01-29",
    readTime: "6 min read",
    heroImage: "https://picsum.photos/seed/sleep-fitness/1400/900",
    body: [
      "Recovery is where adaptation happens. Sleep supports muscle repair, memory and emotional regulation.",
      "When bedtime shifts by large amounts each night, reaction time and motivation often drop during school and training.",
      "Most children and teenagers perform better with a predictable evening rhythm, even if total sleep time changes slightly.",
      "Late-night scrolling can delay sleep onset because of stimulation and habit, not only screen light.",
      "The most effective sleep plans are simple: regular times, calm pre-bed routine and a bedroom designed for rest.",
    ],
    tips: [
      "Keep the same sleep and wake times on weekdays.",
      "Stop phones and tablets 30 to 60 minutes before bed.",
      "Set up kit and clothes before dinner to reduce late stress.",
      "Use a short wind-down routine: shower, reading, quiet breathing.",
      "Keep bedrooms cool, dark and screen free.",
      "Limit caffeine-containing drinks after mid-afternoon.",
      "Review sleep quality weekly, not only after one bad night.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=5MuIMqhT8DM",
  },
  {
    id: "family-meals",
    title: "Family meal ideas on busy days",
    summary:
      "Quick, balanced meals you can prep fast. Great for evenings when everyone is rushing.",
    category: "Home",
    publishedAt: "2026-02-05",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/family-meals/1400/900",
    body: [
      "Busy evenings are easier when meals follow templates instead of requiring new decisions every day.",
      "A practical template is one protein, one carbohydrate, two vegetables and one simple flavor base.",
      "Using repeat meals reduces cost, shopping stress and food waste while still providing variety across the week.",
      "Batch cooking works best when one meal is eaten fresh and one is frozen for a later high-pressure day.",
      "Shared planning, even for ten minutes each weekend, can improve family nutrition and reduce takeaway dependence.",
    ],
    tips: [
      "Use one-tray meals for quick prep and fewer dishes.",
      "Cook double portions and freeze one for later in the week.",
      "Keep chopped vegetables ready for wraps, pasta and bowls.",
      "Use frozen vegetables when fresh prep time is limited.",
      "Rotate four reliable family meals each week.",
      "Write a basic shopping list linked to your meal rotation.",
      "Keep one emergency freezer meal for very late evenings.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=1Bf0mW0fM3o",
  },
  {
    id: "hydration-basics",
    title: "Hydration basics for active kids",
    summary:
      "Water supports concentration, energy and performance. These habits make hydration simple at home and school.",
    category: "Hydration",
    publishedAt: "2026-02-10",
    readTime: "4 min read",
    heroImage: "https://picsum.photos/seed/hydration-basics/1400/900",
    body: [
      "Hydration affects attention, mood and physical performance, especially on active days.",
      "Children often wait until they are very thirsty, but consistent small sips are usually more effective.",
      "Structured water breaks around classes and training help prevent late-day fatigue.",
      "Flavoring water with fruit can increase intake without relying on sugary drinks.",
      "Hydration habits improve when bottles are visible, labelled and packed in the same place each day.",
    ],
    tips: [
      "Start the day with one glass of water at breakfast.",
      "Keep a labelled water bottle in school bags and kit bags.",
      "Take a few sips at each break rather than waiting until very thirsty.",
      "Use fruit slices to improve water taste without added sugar.",
      "Check urine color as a simple hydration indicator.",
      "Drink after each training block, not only at the end.",
      "Pair snack time with a short water check-in.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=9iMGFqMmUFs",
  },
  {
    id: "pre-match-meals",
    title: "What to eat before training or matches",
    summary:
      "A simple pre-activity meal routine can improve energy and reduce stomach discomfort during sport.",
    category: "Performance",
    publishedAt: "2026-02-14",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/pre-match-meals/1400/900",
    body: [
      "Pre-match nutrition is mostly about timing and familiarity, not complex supplements.",
      "Larger mixed meals are typically best two to three hours before activity starts.",
      "Closer to kickoff or race time, smaller easy-to-digest snacks often feel better.",
      "Trying new foods right before competition increases the chance of discomfort and distracts focus.",
      "Teams and families get better results when they test meal plans during normal training weeks.",
    ],
    tips: [
      "Choose familiar foods before important events.",
      "Eat a balanced meal 2 to 3 hours before activity.",
      "Use a small carb snack 30 to 60 minutes before if needed.",
      "Avoid trying new foods right before a match.",
      "Plan post-session recovery food in advance.",
      "Keep hydration steady in the hours before activity.",
      "Record what works best for each athlete in a simple note.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
  },
  {
    id: "screen-time-and-recovery",
    title: "Screen time, stress and recovery",
    summary:
      "Digital habits can impact sleep, mood and recovery. Small changes often improve wellbeing quickly.",
    category: "Digital habits",
    publishedAt: "2026-02-18",
    readTime: "6 min read",
    heroImage: "https://picsum.photos/seed/screen-time-recovery/1400/900",
    body: [
      "Screens are part of modern life, but heavy evening use can delay sleep and increase mental fatigue.",
      "Recovery improves when families create short device-free windows around meals and before bed.",
      "This is not about banning technology; it is about using it intentionally based on goals.",
      "Simple boundaries reduce arguments and help children predict when to switch from stimulation to rest.",
      "When parents and coaches model the same habits, young people are more likely to follow them.",
    ],
    tips: [
      "Set one device-free hour before bedtime.",
      "Keep charging stations outside bedrooms.",
      "Use app timers for social media and games.",
      "Schedule outdoor activity before evening screen time.",
      "Use calm audio or reading instead of late-night scrolling.",
      "Agree family screen rules and review them once a month.",
      "Link screen time to completed homework and recovery routines.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=z6X5oEIg6Ak",
  },
  {
    id: "breakfast-for-focus",
    title: "Breakfast ideas for better focus",
    summary:
      "Simple breakfast options that support concentration through morning lessons and training.",
    category: "Food",
    publishedAt: "2026-02-20",
    readTime: "4 min read",
    heroImage: "https://picsum.photos/seed/breakfast-focus/1400/900",
    body: [
      "Morning focus improves when breakfast includes fiber, protein and hydration.",
      "Skipping breakfast can reduce attention and mood by mid-morning for many students.",
      "Quick options work best on school days when preparation time is limited.",
      "A small but balanced meal is usually better than no meal at all.",
      "Consistency across weekdays matters more than occasional perfect meals.",
    ],
    tips: [
      "Choose oats, eggs or yogurt as simple bases.",
      "Add fruit for fiber and hydration.",
      "Prepare ingredients the night before busy mornings.",
      "Keep water with breakfast.",
      "Use repeat options for easier planning.",
      "Limit high-sugar cereals on training days.",
      "Track which meals support your focus best.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=8jPQjjsBbIc",
  },
  {
    id: "active-recovery-days",
    title: "How to use active recovery days",
    summary:
      "Recovery days can still be productive. Learn how light movement helps body and mind reset.",
    category: "Recovery",
    publishedAt: "2026-02-21",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/active-recovery/1400/900",
    body: [
      "Active recovery uses low-intensity movement to support circulation and reduce stiffness.",
      "It is not a second hard session; intensity should stay low and controlled.",
      "Recovery days also help mental reset after high-pressure training blocks.",
      "Short walks, mobility work and gentle cycling are common options.",
      "The best recovery plan leaves you feeling fresher, not more fatigued.",
    ],
    tips: [
      "Keep effort low enough to hold a conversation.",
      "Use 20 to 40 minutes of gentle movement.",
      "Add mobility or stretching after activity.",
      "Hydrate and refuel as on normal training days.",
      "Avoid adding unplanned high-intensity work.",
      "Prioritize sleep before and after recovery days.",
      "Review readiness before the next hard session.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=J9a7Q4Jf9g0",
  },
  {
    id: "smart-snacking-at-school",
    title: "Smart snacking at school",
    summary:
      "Pack simple snacks that are easy to carry, low cost and useful for afternoon energy.",
    category: "Home",
    publishedAt: "2026-02-22",
    readTime: "4 min read",
    heroImage: "https://picsum.photos/seed/school-snacks/1400/900",
    body: [
      "School snacks should be practical, durable and easy to eat between lessons.",
      "Pairing a carbohydrate with a protein source helps stable energy.",
      "Cost-effective choices often come from buying in bulk and pre-portioning.",
      "Involving children in packing decisions increases long-term consistency.",
      "Simple plans reduce stress for both students and families.",
    ],
    tips: [
      "Pack two snack options for long school days.",
      "Use resealable containers to control portions.",
      "Include water in the same bag as snacks.",
      "Choose options that survive transport.",
      "Rotate snacks weekly to avoid boredom.",
      "Prep snacks during weekend planning.",
      "Keep one emergency snack in sports bags.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=0zM3nApSvMg",
  },
  {
    id: "hydration-in-cold-weather",
    title: "Hydration in cold weather training",
    summary:
      "Athletes often drink less in colder weather. Use these habits to stay hydrated year-round.",
    category: "Hydration",
    publishedAt: "2026-02-23",
    readTime: "4 min read",
    heroImage: "https://picsum.photos/seed/cold-weather-hydration/1400/900",
    body: [
      "Thirst cues can be weaker in cold weather, leading to lower fluid intake.",
      "Hydration still matters for energy, concentration and recovery in winter sessions.",
      "Planning drink breaks is more reliable than waiting for thirst.",
      "Warm fluids can increase comfort and improve adherence in colder conditions.",
      "A daily bottle target helps maintain consistency.",
    ],
    tips: [
      "Set hydration reminders before and after sessions.",
      "Use warm water or mild herbal drinks when appropriate.",
      "Track bottle refills instead of thirst only.",
      "Keep bottles accessible during indoor sessions.",
      "Pair hydration with snack and meal routines.",
      "Review fluid intake on colder days.",
      "Monitor energy levels for hydration clues.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
  {
    id: "match-day-morning-routine",
    title: "Match-day morning routine",
    summary:
      "A calm morning routine improves confidence and helps athletes arrive ready to perform.",
    category: "Performance",
    publishedAt: "2026-02-24",
    readTime: "5 min read",
    heroImage: "https://picsum.photos/seed/match-day-routine/1400/900",
    body: [
      "A repeatable morning routine lowers stress and reduces forgotten tasks.",
      "Preparation works best when clothing, food and travel are planned early.",
      "Athletes benefit from predictable timing before warm-up begins.",
      "Simple routines build confidence by reducing decision overload.",
      "The goal is calm readiness, not perfection.",
    ],
    tips: [
      "Pack kit the night before.",
      "Use a consistent wake-up and meal schedule.",
      "Check travel time and arrival target early.",
      "Keep phone use minimal before departure.",
      "Use a short breathing reset before warm-up.",
      "Bring planned hydration and snacks.",
      "Debrief routine quality after each match day.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  },
  {
    id: "healthy-social-media-habits",
    title: "Healthy social media habits for athletes",
    summary:
      "Use social media intentionally so it supports confidence instead of increasing stress.",
    category: "Digital habits",
    publishedAt: "2026-02-25",
    readTime: "6 min read",
    heroImage: "https://picsum.photos/seed/social-media-habits/1400/900",
    body: [
      "Social media can be useful for learning and connection, but overuse can increase comparison stress.",
      "Boundaries around timing and content help protect focus and mood.",
      "Athletes often perform better when they limit scrolling near training and bedtime.",
      "Small habit changes can reduce distraction without removing social media entirely.",
      "Intentional use supports confidence and energy across the week.",
    ],
    tips: [
      "Set fixed times for social app use.",
      "Avoid heavy scrolling before sleep.",
      "Mute accounts that trigger unhelpful comparison.",
      "Use social media after key daily tasks.",
      "Take one full device-light day each week.",
      "Keep notifications limited during study and training.",
      "Review your habits monthly and adjust as needed.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
  },
];
