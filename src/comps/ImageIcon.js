import React, { useState } from 'react'
import { motion } from 'framer-motion';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const ImageIcon = ({ doc, device, handleClickOnImage, handleDelete }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(device === 'mobile' ? true : false);


    const toggleDeleteIconVisibility = (visible) => {
        if (device === 'mobile') {
            setShowDeleteIcon(true);
        }
        else {
            setShowDeleteIcon(visible);
        }
    }
    return (
        <motion.div className={`img-wrap ${device}`}
            layout
            whileHover={{ opacity: 1 }}
            onClick={(e) => handleClickOnImage(e, doc)}
            onMouseEnter={() => toggleDeleteIconVisibility(true)}
            onMouseLeave={() => toggleDeleteIconVisibility(false)}>
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
    )
}


export default ImageIcon
