import { FaLeaf } from "react-icons/fa";
import image1 from "../../images/svg-1.svg";
import image2 from "../../images/svg-2.svg";
import image3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transaction with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: image1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headLine: "Login to your account at any time",
  description:
    "We have you covered no matter where your location. All you need is an internet connection and a good phone or a computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: image3,
  alt: "piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: " Join Our Team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get everything setup and ready in under 10 minutes. all you have to do is add your information and your ready to go.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: image2,
  alt: "paper",
  dark: false,
  primary: false,
  darkText: true,
};
