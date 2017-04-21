// @flow

import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Post from '../component/post'

class GraphQlList extends React.Component {
  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        {this.props.data.allPosts.map((post) =>
          <Post key={post.id} post={post} />
        )}
      </div>
    )
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
