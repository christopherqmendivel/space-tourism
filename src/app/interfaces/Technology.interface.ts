export interface Technology {
    name:        string;
    images:      TechnologyImages;
    description: string;
}

export interface TechnologyImages {
    portrait:  string;
    landscape: string;
}
