export interface EventModel {
  _id?: string;
  name: string;
  description: string;
  date_start: {
    seconds: number,
    nanoseconds: number
  };
  date_end: {
    seconds: number,
    nanoseconds: number
  };
  venue: string;
  notes: string;
  sponsors: SponsorModel[];
  registration_url: string;
  gm_url: string;
  is_next_event: boolean;
  main_img: string;
}

interface SponsorModel {
  name: string;
  logo: string;
  description: string;
}

// export interface EventModel {
//   _id?: string;
//   name: string;
//   description: string;
//   date: string;
//   place: string;
//   info: string;
//   recommendations: string;
//   sponsors: SponsorModel[];
//   registerLink: string;
//   gmLink: string;
//   nextEvent: boolean;
//   mainImg: string;
// }

// interface SponsorModel {
//   name: string;
//   logo: string;
//   description: string;
// }
