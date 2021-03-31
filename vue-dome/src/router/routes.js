import Home from '../pages/Home';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Register from '../pages/Register';
import Detail from '../pages/detail';
import AddCartSuccess from '../pages/AddCartSuccess';
import ShopCart from '../pages/ShopCart';
import Trade from '../pages/Trade';

export default [
  {
    path: '/trade',
    component: Trade
  },
  {
    path:'/shopcart',
    component: ShopCart
  },
  {
    path: '/addCartSuccess',
    component: AddCartSuccess
  },
  {
    path: '/detail/:skuId',
    component:Detail
  },
  {
    path:'/',
    component:Home,
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    }
  },
  {
    name:'search',
    path: '/search/:keyword?',
    component: Search,
    
    // props:true   //只映射params参数
    // props:(route) =>({  })
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true
    }
  },
]