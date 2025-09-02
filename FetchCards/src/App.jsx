import React, { useEffect, useState } from "react"
import { getcard } from "./Components/Api"
import PostCard from "./Components/PostCard"

function App() {

  const [data, setdata] = useState(null)

  useEffect(()=>{
    getcard().then((posts) => setdata(posts))
  },[])

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Posts
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data ? (
      data.map((e) => (
        <PostCard 
          key={e.id} 
          title={e.title} 
        />
      ))
    ) : (
      <p className="text-center text-gray-500 text-lg">No Data</p>
    )}
  </div>
</div>

    </>
  )
}

export default App
