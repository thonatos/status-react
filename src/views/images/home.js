import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { ImageTable } from './components/'

@inject('docker', 'app')
@observer
class Home extends Component {
  render() {
    const { images, images_loading } = this.props.docker
    const { langs } = this.props.app
    return (
      <div>
        <ImageTable
          {...{
            title: 'docker_image',
            data: images,
            loading: images_loading,
            langs,
          }}
        />
      </div>
    )
  }
}

export default Home
