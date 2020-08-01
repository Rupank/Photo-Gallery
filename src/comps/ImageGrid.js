import React, { useState } from 'react'
import useFireStore from '../hooks/useFirestore';
import DeleteFile from './DeleteFile';
import { documentCollection } from '../constants';
import ImageIcon from './ImageIcon';
const ImageGrid = ({ setSelectedImage, device }) => {

    const { docs } = useFireStore(documentCollection);
    const [deleteFile, setDeleteFile] = useState(null);
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const handleDelete = (e, image) => {
        e.stopPropagation();
        setDeleteFile(image);
    }

    const handleClickOnImage = (event, image) => {
        setSelectedImage(image.url);
    }
    return (

        <div className="img-grid">
            {deleteFile && <DeleteFile deleteFile={deleteFile} setDeleteFile={(val) => setDeleteFile(val)} />}
            {docs && docs.map(doc => (
                <ImageIcon doc={doc} device={device} handleClickOnImage={handleClickOnImage} handleDelete={handleDelete} key={doc.id} />
            ))}
        </div>
    )
}

export default ImageGrid
