import PersonIcon from "@mui/icons-material/Person";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg p-6 md:p-8 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-0">
          <span className="block">Hotel Codeliq</span>
        </h1>

        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-white hover:text-purple-200 transition duration-300 ease-in-out text-lg font-medium"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-white hover:text-purple-200 transition duration-300 ease-in-out text-lg font-medium"
              >
                Habitaciones
              </a>
            </li>
            <li>
              <a
                href="/location"
                className="text-white hover:text-purple-200 transition duration-300 ease-in-out text-lg font-medium"
              >
                Ubicación
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className="text-white hover:text-purple-200 transition duration-300 ease-in-out text-lg font-medium"
              >
                Reseñas
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:text-purple-200 transition duration-300 ease-in-out text-lg font-medium"
              >
                Contacto
              </a>
              <a
                href="/login"
                className="text-white hover:text-purple-200 transition duration-300 ease-in-out text-lg font-medium m-5"
              >
                <PersonIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
