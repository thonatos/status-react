import Home from './home'
import China from './china'
import World from './world'

export const routes = {
  trend_world: {
    path: '/trends/world',
    component: World,
    exactly: true,
  },
  trend_china: {
    path: '/trends/china',
    component: China,
    exactly: true,
  },
  trend_home: {
    path: '/trends/',
    component: Home,
    exactly: true,
  },
}
