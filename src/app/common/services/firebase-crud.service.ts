import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where, Firestore 
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {

  constructor(private firestore: Firestore) {}
  /** 
   * Adds or updates a document in a Firestore sub-collection.
   */
  async addOrUpdateSubCollection(
    collectionName: string,
    documentId: string,
    subCollectionName: string,
    subcollectionId: string,
    collectionData: any
  ) {
    const docRef = doc(this.firestore, `${collectionName}/${documentId}/${subCollectionName}/${subcollectionId}`);
    return await setDoc(docRef, collectionData, { merge: true });
  }

  /**
   * Updates a specific document in a Firestore sub-collection.
   */
  async updateSubCollection(
    collectionName: string,
    documentId: string,
    subCollectionName: string,
    subcollectionId: string,
    collectionData: any
  ) {
    const docRef = doc(this.firestore, `${collectionName}/${documentId}/${subCollectionName}/${subcollectionId}`);
    return await updateDoc(docRef, collectionData);
  }

  /**
   * Deletes a document from a Firestore sub-collection.
   */
  async deleteSubCollection(
    collectionName: string,
    documentId: string,
    subCollectionName: string,
    subCollectionId: string
  ) {
    const docRef = doc(this.firestore, `${collectionName}/${documentId}/${subCollectionName}/${subCollectionId}`);
    return await deleteDoc(docRef);
  }

  /**
   * Deletes a document from a Firestore collection.
   */
  async deleteCollection(collectionName: string, documentId: string) {
    const docRef = doc(this.firestore, `${collectionName}/${documentId}`);
    return await deleteDoc(docRef);
  }

  /**
   * Adds or updates a document in a Firestore collection.
   */
  async addOrUpdateCollection(collectionName: string, collectionId: string, collectionData: any) {
    const docRef = doc(this.firestore, `${collectionName}/${collectionId}`);
    return await setDoc(docRef, collectionData, { merge: true });
  }


  /**
   * Retrieves a user by user ID.
   */
  async getUserByUserId(userId: string) {
    const docRef = doc(this.firestore, `users/${userId}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

   /**
   * Retrieves a document by ID.
   */
   async getDocumentById(collectionName: string, documentId: string) {
    const docRef = doc(this.firestore, `${collectionName}/${documentId}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  /**
   * Updates a document by ID.
   */
  async updateDocumentById(collectionName: string, documentId: string, documentData: any) {
    const docRef = doc(this.firestore, `${collectionName}/${documentId}`);
    return await setDoc(docRef, documentData, { merge: true });
  }

  /**
   * Generates a unique Firestore document ID.
   */
  getId(collectionName: string) {
    return doc(collection(this.firestore, collectionName)).id;
  }

   /**
   * Retrieves protocols by complaint ID.
   */
   async getProtocolsByComplainIds(complainId: string) {
    const protocolRef = collection(this.firestore, "protocols");
    const q = query(protocolRef, where("complainId", "==", complainId));
    const snapshot = await getDocs(q);
    return snapshot.docs.length ? snapshot.docs.map((doc) => doc.data()) : {};
  }

  /**
   * Retrieves family members of a given parent ID.
   */
  async getFamilyMembersFromParentId(parentId: string) {
    const userRef = collection(this.firestore, "users");
    const q = query(userRef, where("parent", "==", parentId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  }

  /**
   * Retrieves assessments for a specific user, ordered by creation date.
   */
  async getAssessmentListByUserId(userId: string) {
    if (!userId) return;
    const assessmentRef = collection(this.firestore, "patientAssessments");
    const q = query(assessmentRef, where("userId", "==", userId), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  }

 
}