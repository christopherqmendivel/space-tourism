import { Destination } from './Destination.interface';
import { Crew } from './Crew.interface';
import { Technology } from './Technology.interface';

export interface DataResponse  {
    destinations: Destination[];
    crew:         Crew[];
    technology:   Technology[];
}