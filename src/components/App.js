// create your App component here
import React, { useState, useEffect } from 'react'

export default function App() {
    const [image, setImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) return <p>Loading...</p>

    return (
    <div>
      <p>Here's a lovely dog for you:</p>
      <img src={image} alt="A Random Dog" />
    </div>
    )
}
