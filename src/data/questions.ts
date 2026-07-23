import { Question } from '../types/conversation';

export const TRAVEL_QUESTIONS: Question[] = [
  {
    id: "q_destination",
    field: "destination",
    question: "Where are you dreaming of going?",
    successReply: "That sounds like an incredible destination.",
    required: true,
    options: [
      { id: "dest_japan", text: "Japan", value: "Japan" },
      { id: "dest_iceland", text: "Iceland", value: "Iceland" },
      { id: "dest_italy", text: "Italy", value: "Italy" },
      { id: "dest_undecided", text: "I'm not sure yet", value: "Undecided" }
    ]
  },
  {
    id: "q_duration",
    field: "duration",
    question: "How long are you planning to stay?",
    successReply: "Perfect amount of time to explore.",
    required: true,
    options: [
      { id: "dur_weekend", text: "A weekend getaway", value: "weekend" },
      { id: "dur_week", text: "About a week", value: "1 week" },
      { id: "dur_two_weeks", text: "Two weeks", value: "2 weeks" },
      { id: "dur_month", text: "A month or longer", value: "1 month+" }
    ]
  },
  {
    id: "q_season",
    field: "season",
    question: "What time of year are you planning to travel?",
    successReply: "Great season for traveling there.",
    required: true,
    options: [
      { id: "season_spring", text: "Spring (Mar - May)", value: "Spring" },
      { id: "season_summer", text: "Summer (Jun - Aug)", value: "Summer" },
      { id: "season_fall", text: "Autumn (Sep - Nov)", value: "Autumn" },
      { id: "season_winter", text: "Winter (Dec - Feb)", value: "Winter" }
    ]
  },
  {
    id: "q_budget",
    field: "budget",
    question: "What's your approximate budget per person?",
    successReply: "Perfect. That gives us plenty of flexibility.",
    required: true,
    options: [
      { id: "budget_backpacker", text: "Budget / Backpacking", value: "Budget" },
      { id: "budget_moderate", text: "Moderate / Comfortable", value: "Moderate" },
      { id: "budget_luxury", text: "Luxury", value: "Luxury" },
      { id: "budget_unlimited", text: "No expense spared", value: "Unlimited" }
    ]
  },
  {
    id: "q_travelers",
    field: "travelers",
    question: "Who are you traveling with?",
    successReply: "Awesome company makes for the best trips.",
    required: true,
    options: [
      { id: "trav_solo", text: "Going solo", value: "Solo" },
      { id: "trav_couple", text: "With my partner", value: "Couple" },
      { id: "trav_family", text: "Family with kids", value: "Family" },
      { id: "trav_friends", text: "Group of friends", value: "Friends" }
    ]
  },
  {
    id: "q_style",
    field: "style",
    question: "What's your preferred travel style?",
    successReply: "Got it. I'll make sure the itinerary matches your vibe.",
    required: true,
    options: [
      { id: "style_relax", text: "Relaxing & laid back", value: "Relaxing" },
      { id: "style_culture", text: "Culture & sightseeing", value: "Culture" },
      { id: "style_adventure", text: "Action & adventure", value: "Adventure" },
      { id: "style_food", text: "Food & culinary", value: "Food" }
    ]
  }
];
