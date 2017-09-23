import { observable, action, computed } from 'mobx'
import { request } from '~/utils/'

class State {
  @observable _clusters = []
  @observable clusters_loading = false
  @observable _apps = new Map()

  @observable _images = new Map()
  @observable images_loading = false

  constructor(root) {
    this.root = root
    this.loadImages()
    this.loadClusters()
  }

  @action
  loadClusters = async () => {
    this.clusters_loading = true
    try {
      const { data } = await request.get('/api/docker/clusters')
      this._clusters = data
    } catch (error) {
    } finally {
      this.clusters_loading = false
    }
  }

  @computed
  get clusters() {
    const _clusters = this._clusters
    return _clusters.length > 0 ? _clusters.peek() : []
  }

  @action
  loadApps = async name => {
    try {
      const { data } = await request.get(`/api/docker/clusters/${name}`)
      this._apps.set(name, data)
    } catch (error) {
    } finally {
    }
  }

  @computed
  get apps() {
    const keys = this._apps.keys()
    const _apps = {}
    keys.forEach(k => {
      const apps = this._apps.get(k)
      _apps[k] = apps.length > 0 ? apps.peek() : []
    })
    return _apps
  }

  @action
  loadImages = async () => {
    this.images_loading = true
    try {
      const { data } = await request.get('/api/docker/images')
      this._images = data
    } catch (error) {
    } finally {
      this.images_loading = false
    }
  }

  @computed
  get images() {
    const _images = this._images
    return _images.length > 0 ? _images.peek() : []
  }
}

export default State
