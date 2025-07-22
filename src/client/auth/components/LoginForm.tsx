import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { register } = useForm();
  const login = useAuthStore((state) => state.login);
  const navegate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(email, password);
      console.log("login exitoso");
      navegate("/");
    } catch (err) {
      console.error("Error en login:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-md w-full p-8 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Iniciar Sesión
        </h2>
        <input
          type="email"
          value={email}
          {...register("email", { required: true })}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo Electrónico"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-semibold py-3 rounded hover:bg-gray-700 transition"
        >
          Iniciar Sesión
        </button>

        <a
          href="/register"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          ¿No tienes una cuenta? Regístrate aquí
        </a>
      </form>
    </div>
  );
}

export default LoginForm;
