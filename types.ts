import { Timestamp } from "firebase/firestore";

export interface Blog {
    id: string;
    title: string;
    slug: string;
    desc: string;
    video: string;
    image: string;
    liveDemo: string;
    sourceCode: string;
    date: Timestamp;
    author: string;
}