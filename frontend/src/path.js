export const PATH = {
    AUTH: {
        LOGIN: "/auth/login",
        SIGNUP: "/auth/signup"
    },
    DELIVERY:{
        DASHBOARD:"/delivery/dashboard",
        MAP:"/delivery/map",
        EARNING:"/delivery/earning",
        PROFILE:"/delivery/profile"
    },
    ADMIN:{
        DASHBOARD:"/admin/dashboard",
        DELIVERIES:"/admin/deliveries",
        PROFILE:"/admin/profile",
        RESTAURANTS:"/admin/restaurants",
        USERS:"/admin/users"
    },
    USER:{
        HOME: "/user/home",
        Profile : "/user/profile",
        AllFood : "/user/allfood",
        AllRestaurants: "/user/allrestaurants",
        Restaurant: (id) => `/restaurant/${id}`,
        Checkout : "/user/restaurant/checkout",
        AddAdress : "/user/restaurant/checkout/addadress",
        SucessPayment : "/user/restaurant/checkout/addadress/payment/sucesspayment",
        Trackorder : "/user/restaurant/checkout/addadress/payment/sucesspayment/trackorder",
        Payment : "/user/restaurant/checkout/addadress/payment"
    },
}
