import {collection} from 'firebase/firestore';
import { db } from './firebase';

export const tablecollectionref = collection(db,'addemployee')
