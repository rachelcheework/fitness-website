import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; 
import '../../index.css';

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200); // show button after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-darkGreen text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-darkGreen transition"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default BackToTopButton;
