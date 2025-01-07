import { create } from 'zustand';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async(uid) => {
    console.log("Fetching user info for UID:", uid);
    if (!uid) {
        return set({currentUser: null, isLoading: false});
    }
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("User data found:", docSnap.data());
            set({currentUser: docSnap.data(), isLoading: false});
        }
        else {
            console.log("No user data for UID:", uid);
            set({currentUser: null, isLoading: false});
        }
    } catch(err) {
        console.log(err)
        return set({currentUser: null, isLoading: false});
    }
  }
}));

