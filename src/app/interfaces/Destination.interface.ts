export interface Destination {
    name:        string;
    images:      CrewImages;
    description: string;
    distance:    number;
    travel:      string;
}

export interface CrewImages {
    png:  string;
    webp: string;
}

