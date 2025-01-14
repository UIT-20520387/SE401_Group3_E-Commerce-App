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
import { Route, Routes } from "react-router-dom";

export default function MainRoute() {
    // const { user, isLoading } = useSelector((state) => state.auth);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(checkAuth());
    // }, [dispatch]);

    // if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

    // console.log(isLoading, user);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <CheckAuth
                        isAuthenticated={isAuthenticated}
                        user={user}
                    ></CheckAuth>
                }
            />
            <Route
                path="/auth"
                element={
                    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                        <AuthLayout />
                    </CheckAuth>
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
                    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                        <ShoppingLayout />
                    </CheckAuth>
                }
            >
                <Route path="home" element={<ShoppingHome />} />
                <Route path="account" element={<ShoppingAccount />} />
                <Route path="search" element={<SearchProducts />} />
                <Route path="listing" element={<ShoppingListing />} />
                <Route path="checkout" element={<ShoppingCheckout />} />
                <Route path="paypal-return" element={<PaypalReturnPage />} />
                <Route
                    path="payment-success"
                    element={<PaymentSuccessPage />}
                />
            </Route>
            <Route path="/unauth-page" element={<UnauthPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
