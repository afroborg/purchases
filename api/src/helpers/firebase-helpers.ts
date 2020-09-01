import { firestore } from 'firebase-admin';

export const toFirebaseDate = (date: Date) =>
  firestore.Timestamp.fromDate(date);
