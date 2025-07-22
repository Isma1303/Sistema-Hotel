import { useAuthStore } from "../hooks/useAuthStore";
import Profile from "../components/Profile";
import Header from "../../../components/Headet";
import Footer from "../../../components/Footer";

function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (!user) return <p>No estás logueado.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-6">
      <Header /> <Profile />;
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
      <Footer />
    </div>
  );
}

export default ProfilePage;
