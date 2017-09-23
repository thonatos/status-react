import Home from './home'
import Cluster from './cluster'

export const routes = {
  cluster_cluster: {
    path: '/clusters/:name',
    component: Cluster,
    exactly: true,
  },
  cluster_home: {
    path: '/clusters/',
    component: Home,
    exactly: true,
  },
}
