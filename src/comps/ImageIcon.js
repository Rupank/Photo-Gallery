import React, { useState } from 'react'
import { motion } from 'framer-motion';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { isMobile } from 'react-device-detect';
const ImageIcon = ({ doc, handleClickOnImage, handleDelete }) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState( false);


    const toggleDeleteIconVisibility = (visible) => {

        // Now showing Delete button at all
        setShowDeleteIcon(false);
        // if (isMobile) {
        //     setShowDeleteIcon(false);
        // }
        // else {
        //     setShowDeleteIcon(visible);
        // }
    }

    const getDevice = () => {
        if (isMobile) {
            return "mobile";
        }
    }
    return (
        <motion.div className={`img-wrap ${getDevice()}`}
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
