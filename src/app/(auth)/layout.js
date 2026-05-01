import React from 'react';

export const metadata = {
  title: "Registration | Login",
  description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};

const AuthLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthLayout;