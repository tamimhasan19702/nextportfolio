import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaPinterest,
  FaPhoneAlt,
  FaLink,
  FaDiscord,
  FaMedium,
} from "react-icons/fa";
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoSlack } from "react-icons/io";
import { SiGmail, SiStackoverflow, SiDevdotto, SiReddit } from "react-icons/si";
import { FiMail, FiGlobe, FiExternalLink } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi2";

import type { IconMap } from "./interface";

export const ICON_MAP: IconMap = {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaPinterest,
  FaPhoneAlt,
  FaLink,
  FaDiscord,
  FaMedium,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoSlack,
  SiGmail,
  SiStackoverflow,
  SiDevdotto,
  SiReddit,
  FiMail,
  FiGlobe,
  FiExternalLink,
  HiOutlineLink,
};

export const ICON_OPTIONS = Object.keys(ICON_MAP).map((key) => ({
  label: key,
  value: key,
}));
