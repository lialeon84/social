
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Logout() {
  const navigate = useNavigate();

  const auth = getAuth();
  signOut(auth).then(() => {
    navigate('/');
    alert("Sign-out successful.")
  }).catch((error) => {
    alert("Logout error")
  });

}

export default Logout