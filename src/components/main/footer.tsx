import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="main space-y-6 flex md:items-center md:flex-row flex-col justify-between">
        <ul className="flex flex-wrap md:items-center gap-4 text-sm">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">
              <FacebookIcon size={20} />
            </a>
            </li>
          <li>
            <a href="#">
              <InstagramIcon size={20} />
            </a>
            </li>
          <li>
            <a href="#">
              <TwitterIcon size={20} />
            </a>
            </li>
          </ul>
      </div>
      <p className="main text-muted text-sm mt-6">
        &copy; {new Date().getFullYear()} Gobills. All rights reserved.
      </p>
    </footer>
  );
}