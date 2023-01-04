import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../features/user/userSelectors';

const PrivateRoutes = () => {
  const { isAuthenticated } = useAppSelector(selectUser)

  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/account" />
  )

}

export default PrivateRoutes;