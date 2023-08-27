import { createCollectionRef } from './createCollectionRef';
import { serverTimestamp } from './serverTimestamp';
/**
 * Adds a new document to the specified collection in Firestore. If an ID is provided, the document will be set with that ID; otherwise, an ID will be automatically generated.
 *
 * @param db - The instance of the Firestore database to interact with.
 * @param collectionPath - The path of the collection where the document will be added or set.
 * @param params - The data of the document to be added or set.
 * @param id - Optional. If provided, the document will be set with this ID. If not, an ID will be automatically generated by Firestore.
 *
 * @returns A reference to the added or set document.
 *
 * @throws Throws an exception if any error occurs during the document addition or setting process.
 *
 * @example
 * ```typescript
 * import { firestore } from 'firebase-admin'
 * import * as admin from 'firebase-admin'
 * import { addCollectionItem } from '@skeet-framework/firestore'
 *
 * const db = admin.firestore();
 * const data: User = {
 *   name: "John Doe",
 *   age: 30
 * };
 *
 * async function run() {
 *   try {
 *     const path = 'Users';
 *     // Example without providing an ID:
 *     const docRef1 = await add<User>(db, path, data);
 *     console.log(`Document added with ID: ${docRef1.id}`);
 *
 *     // Example with providing an ID:
 *     const customID = 'custom_user_id';
 *     const docRef2 = await add<User>(db, path, data, customID);
 *     console.log(`Document set with ID: ${docRef2.id}`);
 *   } catch (error) {
 *     console.error(`Error processing document: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export const addCollectionItem = async (db, collectionPath, params, id) => {
    try {
        const collectionRef = createCollectionRef(db, collectionPath);
        if (id) {
            const docRef = collectionRef.doc(id);
            await docRef.set({
                ...params,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            return docRef;
        }
        else {
            const data = await collectionRef.add({
                ...params,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            if (!data) {
                throw new Error('no data');
            }
            return data;
        }
    }
    catch (error) {
        throw new Error(`Error adding document: ${error}`);
    }
};
//# sourceMappingURL=addCollectionItem.js.map