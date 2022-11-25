import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'

const HomePage = () => {
  const { isAuthenticated } = useAppSelector(state => state.user);

  if (isAuthenticated) {
    return <Navigate to="/tests" />
  } else {
    return <Navigate to="/account" />
  }

};

export default HomePage;
