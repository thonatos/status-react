import { observable, action, computed } from 'mobx'
import { request, nameMap } from '~/utils/'
import { notification } from 'antd'

class State {
  @observable _world = []
  @observable _china = []

  constructor(root) {
    this.root = root
    this._world = Object.keys(nameMap).map(name => {
      return {
        name,
        value: Math.random() * 5000,
      }
    })
  }

  @computed
  get world() {
    const _world = this._world
    return _world.length > 0 ? _world.peek() : []
  }

  @computed
  get china() {
    const _china = this._china
    return _china.length > 0 ? _china.peek() : []
  }  

  @action
  load = async () => {
    try {
      const { data } = await request.get('/api/docker/clusters')
      this._world = data
    } catch (error) {}
  }

  @action
  increase = async (country, count) => {
    const _world = this._world

    notification['info']({
      message: `来自 ${country} 的分享`,
      description: `来自 ${country} 的分享, 数量 ${count}`,
    })

    this._world = _world.map(c => {
      const { name, value } = c
      return {
        name,
        value: name === country ? count + value : value,
        selected: name === country ? true : false,
      }
    })
  }
}

export default State
