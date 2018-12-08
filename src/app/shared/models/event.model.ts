export interface EventModel {
  _id?: string;
  name: string;
  description: string;
  date: string;
  place: string;
  info: string;
  recommendations: string;
  sponsors: SponsorModel[];
  registerLink: string;
  gmLink: string;
  nextEvent: boolean;
  mainImg: string;
}

interface SponsorModel {
  name: string;
  logo: string;
  description: string;
}
