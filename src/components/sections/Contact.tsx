"use client";

import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { useCursorTracking } from "@/hooks/useCursorTracking";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/i18n/useTranslation";

const EMAIL = "fabianzaar@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/fabi%C3%A1n-zamora-a-bab25836a/";
const GITHUB_URL = "https://github.com/fabwz";

export function Contact() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: emailBtnRef, updateCursorPosition: updateEmailCursor } =
    useCursorTracking<HTMLAnchorElement>();
  const { ref: linkedinBtnRef, updateCursorPosition: updateLinkedinCursor } =
    useCursorTracking<HTMLAnchorElement>();
  const { ref: githubBtnRef, updateCursorPosition: updateGithubCursor } =
    useCursorTracking<HTMLAnchorElement>();

  return (
    <div
      ref={ref}
      data-revealed={isRevealed}
      className="scroll-reveal relative z-[5] mx-auto max-w-6xl px-4 py-16 text-center md:px-8"
    >
      <h2 className="text-text-primary mx-auto max-w-2xl font-serif text-3xl italic sm:text-4xl">
        {t("contact.title")}
      </h2>
      <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-base sm:text-lg">
        {t("contact.intro")}
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          ref={emailBtnRef}
          href={`mailto:${EMAIL}`}
          onMouseMove={updateEmailCursor}
          className="btn-secondary focus-ring text-text-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
        >
          <FiMail className="h-4 w-4" aria-hidden="true" />
          {t("contact.email_label")}
        </a>

        <a
          ref={linkedinBtnRef}
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={updateLinkedinCursor}
          className="btn-secondary focus-ring text-text-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
        >
          <FaLinkedin className="h-4 w-4" aria-hidden="true" />
          {t("contact.linkedin_label")}
        </a>

        <a
          ref={githubBtnRef}
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={updateGithubCursor}
          className="btn-secondary focus-ring text-text-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
        >
          <SiGithub className="h-4 w-4" aria-hidden="true" />
          {t("contact.github_label")}
        </a>
      </div>
    </div>
  );
}
