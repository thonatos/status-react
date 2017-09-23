import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { ClusterTable } from './components/'

@inject('docker', 'app')
@observer
class Home extends Component {
  render() {
    const { clusters, clusters_loading } = this.props.docker
    const { langs } = this.props.app
    return (
      <div>
        <ClusterTable
          {...{
            title: 'docker_cluster',
            data: clusters,
            loading: clusters_loading,
            langs,
          }}
        />
      </div>
    )
  }
}

export default Home
