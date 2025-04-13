// src/Pages/Cantact.jsx
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const loader = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  return data.products // Faqat productlar kerak
}

function Cantact() {
  const data = useLoaderData()

  return (
    
    <div className="page" style={{ padding: '20px' }}>

      {data && Array.isArray(data) ? (
        <div  style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {data.map((item) => (
            <div className="card"
              key={item.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                width: '200px'
              }}
            >
              <h4>{item.title}</h4>
              <img src={item.thumbnail} alt={item.title} style={{ width: '100%' }} />
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading or no data found...</p>
      )}
    </div>
  )
}

export default Cantact
