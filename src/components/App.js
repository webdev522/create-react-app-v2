import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Home from './home/Home'
import Template from './template/Template'

import settings from 'lib/settings'

const App = () => (
  <>
    <Helmet>
      <title>{settings.APP_NAME}</title>
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={`/${settings.PAGE_TEMPLATE}`} component={Template} />
    </Switch>
  </>
)

export default App
