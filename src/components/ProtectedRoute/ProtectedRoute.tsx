import React, { FC } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

type TProtectedRouteProps = {
  loggedIn: boolean;
  redirectPath: string;
} & RouteProps;

// const ProtectedRoute: FC<TProtectedRouteProps> = ({
//   children,
//   loggedIn,
//   redirectPath,
//   ...rest
// }) => {
//   // return (
//   //   <Route {...rest}>{loggedIn ? <>{children}</> : <Navigate to={redirectPath} replace />}</Route>
//   // );
// };
//
// export default ProtectedRoute;
