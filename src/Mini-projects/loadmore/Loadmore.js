import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Loadmore = () => {

    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);

    const showMore = () => {
    setVisible((prevValue) => prevValue +3)
}

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setItems(data))
},[])

  return (
    <>
          <div className="container">
              {items.slice(0, visible).map((item) => (
                  <div className="card">
                      <div className="id">
                          <span>{item.id}</span>
                      </div>
                      <p>{item.body}</p>
                 </div>
             ))}
          </div>
          <button onClick={showMore}>Show More items</button>
    </>
  )
}

export default Loadmore
