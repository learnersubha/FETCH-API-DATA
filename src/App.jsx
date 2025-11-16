import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]) 

  useEffect(() =>{
    const getData = async()=>{
      try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      
      if(!response){
        console.log('Get an error');
                
      }
      const doc = response.json();
        setData(doc)
      } catch(err) {
        console.log(err);
         
      }
      
      
    }

    getData()
  }, [])
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App
