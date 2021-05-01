import { Team } from "./team";

export interface Match {
    home: Team;
    away: Team;
    venue: string;
}