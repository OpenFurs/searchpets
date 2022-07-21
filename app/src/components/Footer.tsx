import Link from "next/link";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="content-wrapper select-none">
        <hr className="my-5" />
        <div className="flex justify-center text-center sm:text-inherit sm:justify-between flex-col sm:flex-row">
          <section className="text-neutral-400 w-full sm:w-[50%] text-sm text-center sm:text-left">
            <p>
              A full stack web app created with Next.js and FastAPI by{" "}
              <Link href="https://twitter.com/skepfuskyjs" passHref>
                <a className="font-bold text-white styled-link">
                  <FaIcon icon={faTwitter} />
                  <span className="pl-0.5">@skepfuskyjs</span>
                </a>
              </Link>{" "}
              and{" "}
              <Link href="https://twitter.com/maxthecomputer1" passHref>
                <a className="font-bold text-white styled-link">
                  <FaIcon icon={faTwitter} />
                  <span className="pl-0.5">@maxthecomputer1</span>
                </a>
              </Link>
              .
            </p>
            <p className="mt-[0.55rem]">
              The use of third-party content falls under Fair Use.{" "}
              <em>Housepets!</em> and its characters and story is a trademark of
              Rick Griffin. All rights reserved.
            </p>
            <p className="mt-[0.55rem]">
              Updated July 2022
            </p>
          </section>
          <div className="flex sm:flex-col flex-row items-start justify-center gap-4 sm:gap-0">
            <h2 className="text-xl font-bold hidden sm:block">Links</h2>
            <Link href="https://housepetscomic.com" passHref>
              <a
                rel="noreferrer"
                target="_blank"
                className="styled-link text-center flex items-center gap-x-2"
              >
                <FaIcon
                  icon={faLink}
                  size="sm"
                  className="translate-y-0.5"
                />
                <span className="whitespace-nowrap">Official Housepets Website</span>
              </a>
            </Link>
            <Link href="https://github.com/OpenFurs/searchpets" passHref>
              <a
                rel="noreferrer"
                target="_blank"
                className="styled-link text-center flex items-center gap-x-2"
              >
                <FaIcon
                  icon={faGithub}
                  size="sm"
                  className="translate-y-0.5"
                />
                <span className="whitespace-nowrap">Source code on GitHub</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
