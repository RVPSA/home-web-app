import { motion } from "motion/react";

type PictureCardProps = {
  pictureURL: string;
  pictureAlt: string;
  pictureDescription: string;
};
const PictureCard = (prop: PictureCardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: [null, 1.05, 1.05],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ["easeInOut", "easeOut"],
          },
        }}
        transition={{ duration: 1 }}
        className="w-full h-full relative"
      >
        <img
          src={prop.pictureURL}
          alt={prop.pictureAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute z-10 bottom-0 left-0 w-full h-10 bg-black/50 text-white flex items-center justify-center">
          {prop.pictureDescription}
        </div>
      </motion.div>
    </>
  );
};

export default PictureCard;
