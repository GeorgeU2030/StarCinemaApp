import { Movie } from "@/interfaces";

interface SeedData {
  movies: Movie[];
}

export const initialData: SeedData = {
  movies: [
    {
      id: "1",
      title: "Shutter Island",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
      genres: ["Drama", "Mystery", "Thriller"],
      releaseDate: "2010-02-19",
      runtime: 138,
      rating: 8.2,
      poster: "shutter-island.jpg",
      slug: "shutter-island",
    },
    {
      id: "2",
      title: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      genres: ["Biography", "Crime", "Comedy"],
      releaseDate: "2013-12-25",
      runtime: 180,
      rating: 8.2,
      poster: "the-wolf-of-wall-street.jpg",
      slug: "the-wolf-of-wall-street",
    },
    {
      id: "3",
      title: "Uncut Gems",
      description:
        "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.",
      genres: ["Crime", "Drama", "Thriller"],
      releaseDate: "2019-12-25",
      runtime: 135,
      rating: 7.4,
      poster: "uncut-gems.jpg",
      slug: "uncut-gems",
    },
    {
      id: "4",
      title: "The Irishman",
      description:
        "An illustration of Frank Sheeran's life, from W.W.II veteran to hit-man for the Bufalino crime family and his alleged assassination of his close friend Jimmy Hoffa.",
      genres: ["Biography", "Crime", "Drama"],
      releaseDate: "2019-11-27",
      runtime: 209,
      rating: 7.8,
      poster: "the-irishman.jpg",
      slug: "the-irishman",
    },
    {
      id: "5",
      title: "Killers of the Flower Moon",
      description:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
      genres: ["Crime", "Drama", "History"],
      releaseDate: "2023-05-20",
      runtime: 206,
      rating: 7.6,
      poster: "killers-of-the-flower-moon.jpg",
      slug: "killers-of-the-flower-moon",
    },
    {
      id: "6",
      title: "Taxi Driver",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
      genres: ["Crime", "Drama"],
      releaseDate: "1976-02-08",
      runtime: 114,
      rating: 8.2,
      poster: "taxi-driver.jpg",
      slug: "taxi-driver",
    },
  ],
};
