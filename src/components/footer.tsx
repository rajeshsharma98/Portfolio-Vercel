import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-4 px-6 pt-10">
      <div className="container mx-auto">
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-y-2 border-t border-gray-200 py-4">

          <Typography className="text-gray-700 text-sm sm:text-base">&copy; {CURRENT_YEAR} Rajesh Sharma</Typography>
          <div className="flex justify-center gap-6 ">
            <a href="https://github.com/rajeshsharma98" target="_blank" rel="noopener noreferrer">
              <img src="/logos/github.svg" alt="GitHub" className="h-5 w-5 " />
            </a>
            <a href="https://www.linkedin.com/in/rajeshsharma98" target="_blank" rel="noopener noreferrer">
              <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-5 w-5 " />
            </a>
            <a href="mailto:sharmarajesh98@outlook.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/mail.svg" alt="Mail" className="h-5 w-5 " />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
