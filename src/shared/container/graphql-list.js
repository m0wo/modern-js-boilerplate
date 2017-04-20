// @flow

import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class GraphQlList extends React.Component {
  render() {
    return <h1>Hello GraphQL</h1>
  }
}

const FeedQuery = gql`query allPosts {
  allPosts(orderBy: createdAt_DESC) {
    id
    imageUrl
    description
  }
}`

export default graphql(FeedQuery)(GraphQlList)
