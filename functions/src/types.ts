import type { Firestore } from "firebase/firestore";

interface MemeBasics {
  url: string;
  found: boolean;
}
export interface Meme extends MemeBasics {
  author: string;
}
export interface MemeRequest extends MemeBasics {
  email: string;
}
export type Db = Firestore;
