export interface Crew {
    name:   string;
    images: CrewImages;
    role:   string;
    bio:    string;
}

export interface CrewImages {
    png:  string;
    webp: string;
}