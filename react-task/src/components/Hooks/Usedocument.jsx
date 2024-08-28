import {useEffect} from 'react'

const Usedocument = (count) => {
   
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])

  return (
    <div>
      
    </div>
  )
}

export default Usedocument
