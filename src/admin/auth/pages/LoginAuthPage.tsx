import { useNavigate } from "react-router-dom";
import LoginAuthForm from "../components/LoginAuthForm";

function LoginAuthPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard/admin", { replace: true });
  };

  return (
    <>
      <h1>Iniciar Sesión</h1>
      <LoginAuthForm onLoginSuccess={handleLoginSuccess} />
    </>
  );
}

export default LoginAuthPage;
