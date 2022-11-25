import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const PrivateRoutes = () => {
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/account" />
  )

}

export default PrivateRoutes;