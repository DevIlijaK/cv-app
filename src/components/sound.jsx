"use client";

import { motion } from "framer-motion";
import { VolumeX } from "lucide-react";
import { Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
          py-8 px-6 xs:px-8 sm:px-16 rounded shadow-glass-inset text-center space-y-16"
      >
        <p className="font-light">Do you like to play background music?</p>

        <div className="flex items-center justify-center space-x-4">
          <button
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
            onClick={toggle}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("my-modal")
  );
};

export const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");
    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 >
        new Date().getTime()
    ) {
      setIsPlaying(consent === true);
      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) => {
          document.addEventListener(event, handleFurstUserInteraction);
        });
      }
    } else {
      setShowModal(true);
    }
  }, []);

  const handleFurstUserInteraction = () => {
    const consent = localStorage.getItem("musicConsent");
    if (consent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    ["click", "keydown", "touchstart"].forEach((event) => {
      document.removeEventListener(event, handleFurstUserInteraction);
    });
  };

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    console.log("ref je: ", audioRef.current);
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
      <audio ref={audioRef} loop>
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mp3" />
        your browser does not support audio element.
      </audio>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"home"}
        name={"home"}
        onClick={toggle}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};
