/**
 * This file is a basic data storing file.
 * All the data about different challenges is stored here.
 * 4 things need to be added for a challenge: 1.Name 2.Link 3.Img, 4. Set of rules.
 */

const ChallengeDetailsComponentData = {
  RugbyNetball: {
    name: "Rugby Netball",
    description:
      "This game helps you develop hand-eye coordination and keep your heart and lungs healthy.",
    firebaseName: "FitnessChallengesImages/rugbyNetball.svg",
    img: "",
    howToPlay: [
      "Mark out an area with cones roughly 20m x 20m or use playground/pitch markings. Make a goal area at either end, this could be a square or circle.",
      "Make two equal teams of 5 v 5. One team goes to attack, and one to defend.",
      "The ball is passed from player to player. You can run and pass in any direction but once the ball is caught - the ball carrier must stop moving. The player with the ball then has to pass the ball to another player.",
      "The defenders can close down attackers, working to remove attacking options.",
      "Tries can be scored by attackers who catch the ball inside the opposition in the goal area.",
    ],
    rules: [
      "There’s no kicking in this game. You can only pass from the hands.",
      "If a player is touched or tagged by an opponent whilst in possession of the ball then it’s a turnover to the other team.",
      "Dropped balls result in a turnover to the opposition.",
      "Once your team scores you must let the other team start from that end.",
      "You can intercept passes to get a turnover.",
    ],
    equipment: ["Rugby balls, netballs or footballs", "Bibs", "Cones"],
  },
  BallRush: {
    name: "Ball Rush",
    description:
      "This game helps build strong bones and muscles and keeps your heart and lungs healthy!",
    firebaseName: "FitnessChallengesImages/ballRush.svg",
    img: "",
    howToPlay: [
      "Mark out an area with cones roughly 20m x 30m or use playground/pitch markings.",
      "Select two members of the group to be the ‘catchers’",
      "Everybody else (Players) will stand at one end of the marked out playing area. This is the safe zone.",
      "The catchers start the game by shouting ‘Ball rush’ from the centre of the playing area. The rest of the players must then run forwards towards the other end.",
      "The catchers have to try and tag as many players as they can before they get to the opposite end which will be the other safe zone as the catchers are not allowed in there.",
      "Once tagged you then become a catcher for the next round starting from the centre.",
      "The last player left in untagged will be the winner and will become the catcher for the start of the new game.",
    ],
    rules: [
      "Difficulty Harder - If you want to challenge yourselves then increase the size of the playing area and increase the number of players.",
      "Difficulty Easier - Reduce the size of the playing area.",
    ],
    equipment: ["Bibs- tuck bib into shorts, trousers or skirt to make a tail.", "Cones"],
  },
  HungryHippos: {
    name: "Hungry Hippos",
    description: "A fun and competitive game of different activities!",
    firebaseName: "FitnessChallengesImages/hungryHippos.svg",
    img: "",
    howToPlay: [
      "Mark out an area with cones roughly 30m x 30m or use playground/pitch markings. Cone off each corner and put a load of items in the middle e.g., balls but you can drop any sports equipment you have in there.",
      "Divide the playing members into 4 equal teams and each team will chose a corner to stand in single file.",
      "To start the game one team member at a time from each team will run to the centre to pick a ball/item up and return it to your team by placing it in your corner.",
      "Once the player returns, they will high five the next player in the single file line to go for their turn.",
      "Once all the balls/items have gone from the centre one team member at a time can go and steal balls/items from other team’s corner.",
      "Each game lasts 3 minutes. Each team will count how many balls/items they have at the end of the game to score. Each ball/item is worth 1 point so whoever has the most are the winners.",
    ],
    rules: [
      " Only ONE player from each time can be out of their team’s corner at a time.",
      "Any balls/items not in the corner at the end do not count",
    ],
    equipment: ["Balls or sports equipment", "Balls"],
  },
  BallBalance: {
    name: "Ball Balance",
    description: "Balance the ball on the racket with extra challenges!",
    firebaseName: "FitnessChallengesImages/ballBalance.svg",
    img: "",
    howToPlay: [
      "Hold out the tennis racket in front of you and balance the ball on the racket.",
      "Walk from one point to another.",
      "Build up the pace gradually so that you are walking as fast as you can and competing against your friends.",
    ],
    rules: [
      "Extra challenge: With each walk, perform a different exercise such as squats or touching the floor. Maybe try bouncing the ball on the racket as you walk as fast as you can.",
    ],
    equipment: ["Tennis Racket", "Tennis Ball"],
  },
  ObstacleCourse: {
    name: "Obstacle Course",
    description: "A fun and competitive game of different activities!",
    firebaseName: "FitnessChallengesImages/obstacleCourse.svg",
    img: "",
    howToPlay: [
      "Crawl under a string stretched between two chair legs.",
      "Jump into and out of a Hula-Hoop five times.",
      "Hop 10 steps on one foot.",
      "Throw a beanbag into a bucket/basket.",
      "Run for 30 seconds whilst balancing a beanbag on your head.",
      "Do a ring toss.",
      "Skip in place while reciting a jump rope rhyme.",
      "Do ten jumping jacks.",
    ],
    rules: [],
    equipment: ["String", "2 chairs", "Hula-Hoop", "Beanbags", "Ring Toss", "Jump Rope"],
  },
  FoxesFarmers: {
    name: "Foxes & Farmers",
    description:
      "This game helps you develop hand-eye coordination and keep your heart and lungs healthy.",
    firebaseName: "FitnessChallengesImages/foxFarmers.svg",
    img: "",
    howToPlay: [
      "Mark out an area with cones roughly 20m x 30m or use playground/pitch markings.",
      "Select two members of the group to be the ‘farmers’",
      "Everybody else will be the ‘foxes’ and will make a long fox tail with a bib tucked into the back of their shorts, skirt or trousers.",
      "The farmers have to chase the foxes within the playing area marked out and grab as many tails (bibs) as they can. Once your tail has been pulled out you then become a farmer to help catch the rest of the foxes.",
      "The last two foxes remaining become the farmers for the next game.",
    ],
    rules: [
      "Difficulty Harder - If you want to challenge yourselves then increase the size of the playing area and increase the number of players.",
      "Difficulty Easier - Reduce the size of the playing area.",
    ],
    equipment: ["Bibs", "Cones"],
  },
};

export default ChallengeDetailsComponentData;
