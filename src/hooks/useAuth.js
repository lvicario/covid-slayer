import { useSelector } from "react-redux";
import { fetchAuth, fetchAuthSuccess, logout } from "./../store/auth/actions";

const useAuth = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isFetching = useSelector(state => state.auth.isFetching);
    const user = useSelector(state => state.auth.user);
    const errorMessage = useSelector(state => state.auth.errorMessage);

    return {
        isAuthenticated,
        isFetching,
        user,
        errorMessage,
        fetchAuth,
        fetchAuthSuccess,
        logout
    };
}

export default useAuth;
