import { useDispatch, useSelector } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import { RootState } from "../../store";
import { onShowCart } from "../../store/app/appSlice";
import { logout } from "../../store/auth/authSlice";

const PageTopNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <Navigation
        showCartHandle={() => dispatch(onShowCart())}
        user={user}
        isAuth={isAuth}
        logout={() => dispatch(logout())}
      />
    </div>
  );
};

export default PageTopNavigation;
