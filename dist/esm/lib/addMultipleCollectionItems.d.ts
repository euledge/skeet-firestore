import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
/**
 * Adds multiple documents to the specified collection in Firestore.
 * This function supports batched writes, and if the number of items exceeds the maximum batch size (500),
 * it will split the items into multiple batches and write them sequentially.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection to which the documents will be added.
 * @param items - An array of document data to be added.
 *
 * @returns An array of WriteResult arrays corresponding to each batch.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * const db = admin.firestore();
 * const users: User[] = [
 *   { name: "John Doe", age: 30 },
 *   { name: "Jane Smith", age: 25 },
 *   // ... more users ...
 * ];
 *
 * async function run() {
 *   try {
 *     const path = 'Users'
 *     const results = await addMultipleCollectionItems<User>(db, path, users);
 *     console.log(`Added ${users.length} users in ${results.length} batches.`);
 *   } catch (error) {
 *     console.error(`Error adding documents: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const addMultipleCollectionItems: <T extends firestore.DocumentData>(db: admin.firestore.Firestore, collectionPath: string, items: T[]) => Promise<firestore.WriteResult[][]>;
