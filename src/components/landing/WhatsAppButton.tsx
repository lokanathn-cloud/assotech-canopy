import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=919124573056&text=Hi%2C+I%27m+interested+in+Assotech+Canopy&type=phone_number&app_absent=0";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 lg:bottom-8 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
