import { AdminDb, MemesOfMonth, MemeSubmission } from "./types";

export async function getFromDb(
  db: AdminDb,
  collection: "memes",
  docId: string,
): Promise<MemesOfMonth | undefined>;
export async function getFromDb(
  db: AdminDb,
  collection: "submissions",
  docId: string,
): Promise<MemeSubmission | undefined>;
export async function getFromDb(
  db: AdminDb,
  collection: string,
  docId: string,
) {
  return (await db.collection(collection).doc(docId).get()).data();
}

export async function addToDb(
  db: AdminDb,
  collection: "submissions",
  data: MemeSubmission,
): Promise<string>;
export async function addToDb(
  db: AdminDb,
  collection: string,
  data: Record<string, unknown>,
) {
  const { id } = await db.collection(collection).add(data);
  return id;
}

export async function setToDb(
  db: AdminDb,
  collection: "memes",
  docId: string,
  data: MemesOfMonth,
): Promise<void>;
export async function setToDb(
  db: AdminDb,
  collection: string,
  docId: string,
  data: Record<string, unknown>,
) {
  await db.collection(collection).doc(docId).set(data);
}

export async function deleteFromDb(
  db: AdminDb,
  collection: "submissions",
  docId: string,
) {
  await db.collection(collection).doc(docId).delete();
}
