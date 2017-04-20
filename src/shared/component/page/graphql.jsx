// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import { APP_NAME } from '../../config'
import GraphQlList from '../../container/graphql-list'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
}

const GraphQlPage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 mb-4">GRAPHQL DEMO</h1>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-12">
          <GraphQlList />
        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(GraphQlPage)
