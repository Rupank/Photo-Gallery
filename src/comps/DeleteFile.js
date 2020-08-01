import {useEffect} from 'react'
import useDeleteStorage from '../hooks/useDeleteStorage';

const DeleteFile = ({ deleteFile, setDeleteFile }) => {
    
    const {isDeleted} = useDeleteStorage(deleteFile = { deleteFile });
    useEffect(() => {
        if(isDeleted){
            setDeleteFile(null);
        }
    }, [isDeleted, setDeleteFile])
    return null;
}

export default DeleteFile
