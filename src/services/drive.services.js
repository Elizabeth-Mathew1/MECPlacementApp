import { db } from "../firebase-config";

import {collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, doc} from "firebase/firestore";

const driveCollectionRef = collection(db,"drives");
class DriveDataService{
    addNewDrive=(newDrive)=>{
        return addDoc(driveCollectionRef, newDrive);
    }

    updateDrive=(id, updatedDrive)=>{
        const  driveDoc=doc(db,"drives",id);
        return updateDoc(driveDoc, updateDoc);
    }

    deleteDrive=(id)=>{
        const driveDoc=doc(db,"drives",id);
        return deleteDoc(driveDoc);
    }

    getAllDrives=()=>{
        return getDocs(driveCollectionRef)
    }

    getDrive=(id)=>{
        const driveDoc=doc(db,"drives",id);
        return getDocs(driveDoc);
    }
}


export default DriveDataService;