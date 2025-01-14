import AdminLayout from "@/components/admin-view/layout";
import AuthLayout from "@/components/auth/layout";
import ShoppingLayout from "@/components/shopping-view/layout";
import AdminDashboard from "@/pages/admin-view/dashboard";
import AdminOrders from "@/pages/admin-view/orders";
import AdminProducts from "@/pages/admin-view/products";
import AuthLogin from "@/pages/auth/login";
import AuthRegister from "@/pages/auth/register";
import NotFound from "@/pages/not-found";
import ShoppingAccount from "@/pages/shopping-view/account";
import ShoppingCheckout from "@/pages/shopping-view/checkout";
import ShoppingHome from "@/pages/shopping-view/home";
import ShoppingListing from "@/pages/shopping-view/listing";
import PaymentSuccessPage from "@/pages/shopping-view/payment-success";
import PaypalReturnPage from "@/pages/shopping-view/paypal-return";
import SearchProducts from "@/pages/shopping-view/search";
import UnauthPage from "@/pages/unauth-page";
import { checkAuth } from "@/store/auth-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthProtect from "./auth-protected";
import { Skeleton } from "@/components/ui/skeleton";

export default function MainRoute() {
  const pathName = useLocation().pathname;
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  if (
    isLoading &&
    !pathName.includes("login") &&
    !pathName.includes("register")
  )
    return <Skeleton />;

  return (
    <Routes>
      <Route
        path="/"
        element={<AuthProtect isAuthenticated={isAuthenticated} user={user} />}
      />
      <Route
        path="/auth"
        element={
          <AuthProtect isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </AuthProtect>
        }
      >
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
      <Route
        path="/admin"
        element={
          <AuthProtect isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </AuthProtect>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
      </Route>
      <Route
        path="/shop"
        element={
          <AuthProtect isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </AuthProtect>
        }
      >
        <Route path="home" element={<ShoppingHome />} />
        <Route path="account" element={<ShoppingAccount />} />
        <Route path="search" element={<SearchProducts />} />
        <Route path="listing" element={<ShoppingListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="paypal-return" element={<PaypalReturnPage />} />
        <Route path="payment-success" element={<PaymentSuccessPage />} />
      </Route>
      <Route path="/unauth-page" element={<UnauthPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
