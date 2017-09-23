import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { AppTable } from './components/'

@inject('docker', 'app')
@observer
class Cluster extends Component {
  componentDidMount() {
    const { docker, match } = this.props
    const name = match.params.name
    docker.loadApps(name)
  }

  render() {
    const { docker, match, app } = this.props
    const { langs } = app
    const { name } = match.params
    const apps = docker.apps[name] || []

    return (
      <div>
        <AppTable
          {...{
            title: 'cluster_apps',
            data: apps,
            langs,
          }}
        />
      </div>
    )
  }
}

export default Cluster
