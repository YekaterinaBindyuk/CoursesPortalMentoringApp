import { ICourse } from './icourse';

export class Course implements ICourse {
    id: number;
    title: string;
    creation: Date;
    duration: number;
    description: string;
    topRated: boolean;
}
