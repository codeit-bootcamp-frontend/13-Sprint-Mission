import Image from "next/image";
import Link from "next/link";

const FOOTER_ICONS = [
  {
    href: "https://www.facebook.com/",
    src: "/icons/facebook.svg",
    alt: "facebook",
  },
  {
    href: "https://x.com/",
    src: "/icons/twitter.svg",
    alt: "twitter",
  },
  {
    href: "https://www.instagram.com/",
    src: "/icons/instagram.svg",
    alt: "instagram",
  },
];

export default function HomeFooter() {
  return (
    <div className="bg-[#111322] px-4 py-8 sm:px-6 lg:px-48">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <p className="text-gray400 text-regular16">@codeit - 2024</p>
        <div className="text-gray200 text-regular16 flex gap-8">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">FAQ</Link>
        </div>
        <div className="flex gap-3">
          {FOOTER_ICONS.map((icon) => (
            <Link key={icon.alt} href={icon.href}>
              <Image src={icon.src} width={24} height={24} alt={icon.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
