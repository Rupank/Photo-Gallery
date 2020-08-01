import React, { useState } from 'react'
import useFireStore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteFile from './DeleteFile';
import IconButton from '@material-ui/core/IconButton';
const ImageGrid = ({ setSelectedImage }) => {

    const { docs } = useFireStore('images');
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
                <motion.div className="img-wrap"
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={(e) => handleClickOnImage(e, doc)}
                    onMouseEnter={() => setShowDeleteIcon(true)}
                    onMouseLeave={() => setShowDeleteIcon(false)}
                    key={doc.id}
                >
                    {showDeleteIcon &&
                        <div onClick={(e) => handleDelete(e, doc)} className='delete-icon'>
                            <IconButton color="secondary" aria-label="delete picture" component="span">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    }
                    <motion.img src={doc.url} alt="Uploaded Pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
