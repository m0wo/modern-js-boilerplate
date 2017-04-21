// @flow

import React from 'react'

type Props = {
  post: object,
}

const Post = ({ post }: Props) =>
  <div>
    <p>{post.description}</p>
  </div>
export default Post
