import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="chsaicharitha@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9392447864" Image={FiPhone} />
      <SingleInfo text="Gwalior, Madhya Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
