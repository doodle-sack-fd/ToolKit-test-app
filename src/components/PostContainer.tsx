import React, { useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'


const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    })
    const [createPost, { }] = postAPI.useCreatePostMutation()

    const [updatePost, { }] = postAPI.useUpdatePostMutation()
    const [deletePost, { }] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    return (
        <div>
            <button onClick={handleCreate}>newPost</button>
            {isLoading && <h1>Загрузка..</h1>}
            {error && <h1>Ошибка..</h1>}
            {posts && posts.map(post =>
                <PostItem update={handleUpdate} remove={handleRemove} key={post.id} post={post} />
            )}
        </div>
    )
}

export default PostContainer