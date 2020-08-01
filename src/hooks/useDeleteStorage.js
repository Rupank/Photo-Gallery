import { useEffect, useState } from 'react'
import { projectFirestore, projectStorage } from '../firebase/config';

const useDeleteStorage = ({ deleteFile }) => {
    const [error, setError] = useState(null);
    const [isDeleted, SetIsDeleted] = useState(false);
    useEffect(() => {
        let collectionRef = projectFirestore.collection('images');
        let storageRef = projectStorage.refFromURL(deleteFile.url);
        storageRef.delete()
            .then(() => {
                collectionRef.doc(deleteFile.id).delete()
                    .then((data) => {
                        SetIsDeleted(true);
                    })
                    .catch((err) => {
                        setError(err);
                    });
            })
            .catch(err => {
                SetIsDeleted(false);
            })
    }, [deleteFile])
    return { error, isDeleted };
}

export default useDeleteStorage
