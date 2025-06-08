import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const LeetCodeIcon = () => (
  <img
    src="/lc.png"
    alt="LeetCode"
    className="w-[24px] h-[24px] object-contain"
  />
);

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/sai-charitha-chakka-596b41256"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/charitha1106"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/saicharithashetty/"
        Icon={FaInstagram}
      />
      <SingleContactSocial
        link="https://leetcode.com/u/charitha_11/"
        Icon={LeetCodeIcon}
      />
    </div>
  );
};

export default ContactSocial;
