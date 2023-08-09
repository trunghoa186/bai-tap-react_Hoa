export const DEFAULT = {
    TOKEN: "TOKEN",
    REFRESH_TOKEN: "REFRESH_TOKEN",
  };
  
  export const LOCATION = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PRODUCT: "/products",
    MUSICPLAY: "/play-list",
    FORM: "/form",
    TODO: "/todo"
  };

  export const NON_AUTH = [
    {
      path: LOCATION.LOGIN,
      title: "Đăng nhập",
    },
    {
      path: LOCATION.REGISTER,
      title: "Đăng ký",
    },
  ];
  
  export const AUTH = [
    {
      path: LOCATION.HOME,
      title: "Trang Chu",
    },

    {
      path: LOCATION.PRODUCT,
      title: "Sản phẩm",
    },
    {
      path: LOCATION.MUSICPLAY,
      title: "Bài hát",
    },
    {
      path: LOCATION.CART_EMPLOYEE,
      title: "Nhân viên",
    },
    {
      path: LOCATION.CART_MANAGER,
      title: "Quản lý",
    },
    {
      path: LOCATION.BUTTON_ACCORDION,
      title: "Thẻ",
    },
    {
      path: LOCATION.FORM,
      title: "Form",
    },
    {
      path: LOCATION.TODO,
      title: "Todo",
    },
  ]