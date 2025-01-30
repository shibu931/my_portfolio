import * as motion from "motion/react-client";

export default function EnterAnimation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
    initial={{ y: 50, opacity:0 }}
    animate={{ y: 0, opacity:100 }}
    transition={{ type: "spring", stiffness: 75 }}
    >
        {children}
    </motion.div>
  );
}
