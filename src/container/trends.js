import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Full as Layout } from '~/layouts/'
import { trends } from '~/views/routes'
const childRoutes = Object.values(trends)

@inject('app')
@observer
class Trends extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Trends - Insta360</title>
        </Helmet>
        <Switch>
          {childRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exactly={route.exactly}
              />
            )
          })}
        </Switch>
      </Layout>
    )
  }
}

export default Trends
