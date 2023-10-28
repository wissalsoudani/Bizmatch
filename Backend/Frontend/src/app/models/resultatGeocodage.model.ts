import { Coordonnees } from "./Coordonnees.model";

export interface ResultatGeocodage {
  geometry: {
    location: Coordonnees;
  };
}
