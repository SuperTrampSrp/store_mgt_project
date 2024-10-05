import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useModalStore } from "@/app/store/modals";

const AnimatedModal = ({ children }: ModalAnimProps) => {

    const { isModal } = useModalStore()
    console.log(isModal)

    return (
        <AnimatePresence>
            {isModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => isModal}
                    className="backdrop-blur fixed inset-0 z-50 place-items-center cursor-pointer"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.75, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.75, y: 20 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        onClick={(e) => e.stopPropagation()}
                        className=" w-full cursor-default relative overflow-hidden h-full"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AnimatedModal