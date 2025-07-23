import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
    /*const HIDDEN_ANIMATION_STATE = {
        opacity: 0,
        y: 30
    }*/

    return createPortal(
        <>
            <div 
                className="backdrop" 
                onClick={onClose} 
            />
            <motion.dialog
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 30
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
                /*initial={ HIDDEN_ANIMATION_STATE }
                animate={{
                        opacity: 1,
                        y: 0
                }}
                exit={ HIDDEN_ANIMATION_STATE }*/
                initial="hidden"
                animate="visible"
                exit="hidden"
                open
                className="modal"
            >
                <h2>{title}</h2>
                {children}
            </motion.dialog>
        </>,
        document.getElementById('modal')
    );
}
