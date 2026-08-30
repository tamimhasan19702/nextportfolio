import type { IconType } from "react-icons";

export type IconName =
  | "FaGithub"
  | "FaFacebook"
  | "FaTwitter"
  | "FaInstagram"
  | "FaYoutube"
  | "FaDribbble"
  | "FaBehance"
  | "FaPinterest"
  | "FaPhoneAlt"
  | "FaLink"
  | "FaDiscord"
  | "FaMedium"
  | "IoLogoLinkedin"
  | "IoLogoWhatsapp"
  | "IoLogoSlack"
  | "SiGmail"
  | "SiStackoverflow"
  | "SiDevdotto"
  | "SiReddit"
  | "FiMail"
  | "FiGlobe"
  | "FiExternalLink"
  | "HiOutlineLink";

export type IconMap = Record<IconName, IconType>;
