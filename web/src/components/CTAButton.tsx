"use client";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function CTAButton({ href, children, className, ariaLabel }: Props) {
  return (
    <Link href={href} aria-label={ariaLabel ?? (typeof children === "string" ? children : "CTA button")} className={`cta-btn ${className ?? ""}`}>
      <span>{children}</span>
    </Link>
  );
}