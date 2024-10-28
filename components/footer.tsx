import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-100 text-amber-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg">Hof unter den Eichen</h3>
          <p className="text-sm">Naturstraße 123, 12345 Landkreis</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Folgen Sie uns auf Instagram"
          >
            <Instagram className="w-5 h-5 hover:text-amber-600 transition-colors duration-300" />
          </Link>
          <Link
            href="mailto:info@hof-unter-den-eichen.de"
            aria-label="Senden Sie uns eine E-Mail"
          >
            <Mail className="w-5 h-5 hover:text-amber-600 transition-colors duration-300" />
          </Link>
        </div>
        <div className="text-xs text-center sm:text-right">
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
          {" | "}
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
