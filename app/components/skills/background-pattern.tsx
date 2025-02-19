import { motion } from "framer-motion";

const containerVariants = {
  initial: { 
    opacity: 0,
    scale: 0.98
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.5,
      staggerChildren: 0.15,
      ease: [0.6, 0.01, 0.05, 0.95],
      opacity: { duration: 2, ease: "easeOut" },
      scale: { duration: 1.8, ease: "easeOut" }
    }
  }
};

const itemVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.85,
    y: 10
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95],
      opacity: { duration: 1.5, ease: "easeOut" }
    }
  }
};

export function BackgroundPattern() {
  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      aria-hidden="true"
      role="presentation"
    >
      <motion.div 
        variants={itemVariants}
        className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl"
        animate={{
          scale: 1.2
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        variants={itemVariants}
        className="absolute left-1/4 top-1/4 w-32 h-32 border border-indigo-500/10 rotate-45 rounded-lg backdrop-blur-sm"
        animate={{
          rotate: 90,
          scale: 1.1,
          x: 10,
          y: -10
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.8
        }}
        aria-hidden="true"
      />
      <motion.div 
        variants={itemVariants}
        className="absolute right-1/3 bottom-1/4 w-24 h-24 border border-purple-500/10 rounded-lg backdrop-blur-sm"
        animate={{
          rotate: -12,
          scale: 0.9,
          x: -10,
          y: 10
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        variants={itemVariants}
        className="absolute left-10 bottom-1/3 w-2 h-2 bg-indigo-400/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
        aria-hidden="true"
      />
      <motion.div 
        variants={itemVariants}
        className="absolute left-20 bottom-1/3 w-2 h-2 bg-indigo-400/10 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [-5, 5, -5],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
          times: [0, 0.5, 1]
        }}
        aria-hidden="true"
      />
      <motion.div 
        variants={itemVariants}
        className="absolute left-30 bottom-1/3 w-2 h-2 bg-indigo-400/10 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [5, -5, 5],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
          times: [0, 0.5, 1]
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        variants={itemVariants}
        className="absolute right-10 bottom-1/3 w-2 h-2 bg-indigo-400/20 rounded-full"
        animate={{
          y: [0, -18, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
          times: [0, 0.5, 1]
        }}
        aria-hidden="true"
      />
      <motion.div 
        variants={itemVariants}
        className="absolute right-20 bottom-1/3 w-2 h-2 bg-indigo-400/20 rounded-full"
        animate={{
          y: [0, -22, 0],
          x: [5, -5, 5],
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
          times: [0, 0.5, 1]
        }}
        aria-hidden="true"
      />
      <motion.div 
        variants={itemVariants}
        className="absolute right-30 bottom-1/3 w-2 h-2 bg-indigo-400/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [-5, 5, -5],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
          times: [0, 0.5, 1]
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        variants={itemVariants}
        className="absolute right-1/4 top-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        animate={{
          rotate: 55,
          scale: 1.1
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.7
        }}
        aria-hidden="true"
      />
      <motion.div 
        variants={itemVariants}
        className="absolute right-1/4 top-1/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        animate={{
          rotate: -35,
          scale: 1.1
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.9
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        variants={itemVariants}
        className="absolute left-1/3 top-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          scale: 1.2
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.3
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
} 