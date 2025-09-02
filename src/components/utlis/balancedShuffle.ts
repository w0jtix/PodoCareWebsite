import { testimonialData } from "@/data/testimonials";

type Testimonial = typeof testimonialData[number];

export function balancedShuffle(
  testimonials: Testimonial[],
  maxStreak = 2
): Testimonial[] {
  const google = testimonials.filter(t => t.source.toLowerCase() === "google");
  const booksy = testimonials.filter(t => t.source.toLowerCase() === "booksy");

  const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
  let g = shuffle(google);
  let b = shuffle(booksy);

  const result: Testimonial[] = [];
  let lastSource: string | null = null;
  let streak = 0;

  while (g.length > 0 || b.length > 0) {
    const pickGoogle = Math.random() < 0.5;
    let pick: typeof g | typeof b;

    if (
      pickGoogle &&
      g.length > 0 &&
      !(lastSource === "google" && streak >= maxStreak)
    ) {
      pick = g;
      lastSource = "google";
    } else if (
      b.length > 0 &&
      !(lastSource === "booksy" && streak >= maxStreak)
    ) {
      pick = b;
      lastSource = "booksy";
    } else if (g.length > 0) {
      pick = g;
      lastSource = "google";
    } else {
      pick = b;
      lastSource = "booksy";
    }

    result.push(pick.shift()!);

    if (result[result.length - 1].source.toLowerCase() === lastSource) {
      streak++;
    } else {
      streak = 1;
    }
  }

  return result;
}
