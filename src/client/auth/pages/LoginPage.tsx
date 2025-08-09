import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Headet";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLoginSuccess = () => {
    navigate(from, { replace: true });
  };

  return (
    <>
      <Header />
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <Footer />
    </>
  );
}

export default LoginPage;
