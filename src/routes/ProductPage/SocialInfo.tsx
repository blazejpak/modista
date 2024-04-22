import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const SocialInfo = () => {
  return (
    <div>
      <h4 className="mb-4 text-base font-bold">
        Connect with us on social media:
      </h4>
      <div className="flex gap-16">
        <a
          href="https://github.com/blazejpak"
          className="block w-6 cursor-pointer"
          aria-label="Facebook link"
          target="_blank"
        >
          <AiFillInstagram size={48} />
        </a>
        <a
          href="https://github.com/blazejpak"
          className="block w-6 cursor-pointer"
          aria-label="Facebook link"
          target="_blank"
        >
          <FaXTwitter size={48} />
        </a>
        <a
          href="https://github.com/blazejpak"
          className="block w-6 cursor-pointer"
          aria-label="Facebook link"
          target="_blank"
        >
          <AiFillFacebook size={48} />
        </a>
      </div>
    </div>
  );
};

export default SocialInfo;
