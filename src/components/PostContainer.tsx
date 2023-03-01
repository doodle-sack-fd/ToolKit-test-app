import React, { useState } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    })
    return (
        <div>
            {isLoading && <h1>Загрузка..</h1>}
            {error && <h1>Ошибка..</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} />
            )}
        </div>
    )
}

export default PostContainer