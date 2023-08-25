import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
/**
 * Represents a condition for querying Firestore collections.
 */
export type QueryCondition = {
    field: string;
    operator: firestore.WhereFilterOp;
    value: any;
};
/**
 * Queries the specified collection in Firestore based on the provided conditions
 * and returns an array of documents that match the conditions.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection to be queried.
 * @param conditions - An array of conditions to apply to the query.
 *
 * @returns An array of documents from the collection that match the conditions.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * const db = admin.firestore();
 * const conditions: QueryCondition[] = [
 *   { field: "age", operator: ">", value: 25 }
 * ];
 *
 * async function run() {
 *   try {
 *     const path = 'Users'
 *     const users = await queryCollectionItems<User>(db, path, conditions);
 *     console.log(`Found ${users.length} users over 25 years old.`);
 *   } catch (error) {
 *     console.error(`Error querying collection: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const queryCollectionItems: <T extends firestore.DocumentData>(db: admin.firestore.Firestore, collectionPath: string, conditions: QueryCondition[]) => Promise<T[]>;
