import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-6 md:p-8 mt-12 shadow-inner">
      <div className="container mx-auto text-center">
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Privacidad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Términos de Servicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-300 ease-in-out"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        © {currentYear} Hotel Codeliq. Todos los derechos reservados.
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-purple-400 transition duration-300 ease-in-out"
          >
            <FacebookIcon fontSize="large" />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-gray-400 hover:text-purple-400 transition duration-300 ease-in-out"
          >
            <XIcon fontSize="large" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-purple-400 transition duration-300 ease-in-out"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-400 hover:text-purple-400 transition duration-300 ease-in-out"
          >
            <WhatsAppIcon fontSize="large" />
          </a>
          <a
            href="https://www.waze.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Waze"
            className="text-gray-400 hover:text-purple-400 transition duration-300 ease-in-out"
          >
            <AddLocationAltIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
