import { ICourse } from "./icourse";

export class Course implements ICourse {
    id: string;
    title: string;
    creation: Date;
    duration: number;
    description: string;
    topRated: boolean;
}
