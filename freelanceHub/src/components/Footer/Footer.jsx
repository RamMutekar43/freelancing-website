import { VStack } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <VStack
      backgroundColor="transparent"
      color="gray.300"
      py={10}
      w="full"
      px={10}
      position="relative"
      zIndex={1}
      overflow="hidden"
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 w-full">FreelanceHub</h2>
          <p className="text-sm w-full">
            Connecting top talent with growing businesses worldwide.
          </p>
        </div>

        {/* Founders */}
        <div>
          <h4 className="text-white font-semibold mb-4">Founders</h4>
          <ul className="space-y-3">
            <li>
              <p className="font-medium text-white">Ram Mutekar</p>
              <div className="flex gap-3 mt-1 text-lg">
                <a
                  href="https://www.linkedin.com/in/ram-mutekar-4b6a49256/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/RamMutekar43"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </li>
            <li>
              <p className="font-medium text-white">Akshay Khardekar</p>
              <div className="flex gap-3 mt-1 text-lg">
                <a
                  href="https://www.linkedin.com/in/akshay-khardekar-65a303257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/akshayKhardekar10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@freelancehub.com"
              className="hover:text-white"
            >
              support@freelancehub.com
            </a>
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} FreelanceHub. All rights reserved.
      </div>

      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-40 animate-smooth-bg"></div>
    </VStack>
  );
}
