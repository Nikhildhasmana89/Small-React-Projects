import React from 'react'

const PostCard = (props) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img
    alt={props.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-semibold text-gray-800">{props.title}</h1>
    <p className="text-sm text-gray-500 mt-2">
      This is a short description or preview of the post content.
    </p>

  </div>
</div>

  )
}

export default PostCard
