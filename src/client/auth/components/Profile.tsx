import { useEffect, useState } from "react";
import { profileRequest } from "../services/auth";
import { useAuthStore } from "../hooks/useAuthStore";
import type { Customer } from "../interface/auth.interface";

function Profile() {
  const token = useAuthStore((state) => state.token);
  const [profile, setProfile] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;

      try {
        const response = await profileRequest(token);
        setProfile(response.data);
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) return <p>Cargando perfil...</p>;
  if (!profile) return <p>No se pudo cargar el perfil.</p>;

  return (
    <div className="p-6 bg-white rounded shadow-md space-y-2">
      <h2 className="text-2xl font-bold text-gray-800">Perfil del Usuario</h2>
      <p>
        <strong>Nombre:</strong> {profile.fullName}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {profile.phone}
      </p>
      {profile.nationality && (
        <p>
          <strong>Nacionalidad:</strong> {profile.nationality}
        </p>
      )}
    </div>
  );
}

export default Profile;
