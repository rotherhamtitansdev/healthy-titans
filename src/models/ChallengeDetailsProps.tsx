export interface ChallengeDetailsProps {
  name: string;
  description: string;
  firebaseName: string;
  firebaseVideoName?: string;
  rules: string[];
  equipment: string[];
  howToPlay: string[];
}
