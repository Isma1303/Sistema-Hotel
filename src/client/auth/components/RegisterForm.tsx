import { useForm } from "react-hook-form";
import type { Customer } from "../interface/auth.interface";
import { useAuthStore } from "../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const { register, handleSubmit } = useForm<Customer>();
  const singUp = useAuthStore((state) => state.singUp);

  const navigate = useNavigate();

  const onSubmit = async (data: Customer) => {
    try {
      await singUp(data);
      console.log("Usuario registrado:", data);
      navigate("/login");
    } catch (err) {
      console.error("Error en registro:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white max-w-md w-full p-8 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Crear Cuenta
        </h2>

        <input
          type="text"
          {...register("userName", { required: true })}
          placeholder="Nombre de Usuario"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          {...register("fullName", { required: true })}
          placeholder="Nombre Completo"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo Electrónico"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          {...register("phone", { required: true })}
          placeholder="Teléfono"
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          {...register("nationality")}
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Selecciona tu nacionalidad</option>
          <option value="gt">Guatemala</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
          <option value="co">Colombia</option>
        </select>
        <input
          type="date"
          {...register("birthDate", { required: true })}
          className="w-full border border-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-semibold py-3 rounded hover:bg-gray-700 transition"
        >
          Crear Cuenta
        </button>
        <a
          href="/login"
          className="text-gray-700 hover:text-blue-600 transition font-medium"
        >
          ¿Ya tienes una cuenta? Inicia Sesión aquí
        </a>
      </form>
    </div>
  );
}

export default RegisterForm;
