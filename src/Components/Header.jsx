import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
          {user && (
            <Link className="btn btn-ghost normal-case text-xl" to="/profile">
              Profile
            </Link>
          )}
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </Link>
          {user ? (
            <>
              <span>{user.email}</span>
              <button className="btn btn-xs" onClick={handleLogOut}>
                SignOut
              </button>
            </>
          ) : (
            <Link to="/login">login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
