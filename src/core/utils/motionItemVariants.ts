const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.85,
    transition: { duration: 0.4, ease: 'easeIn' }
  }
}
export { itemVariants }
