import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useParams, useNavigate } from 'react-router-dom'



const Search = () => {
  const navigate = useNavigate()
  const {keyword: urlKeyword} = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }



  return (
    <>
    <Form onSubmit={submitHandler} size="lg" className='my-4 w-50 mx-2' >
     <Form.Control type="text" name='q' onChange={(e)=> setKeyword(e.target.value)} value={keyword} placeholder={'Search...'} />
    </Form>
    <Button type='submit' variant='primary' className='my-4 mx-2' onClick={()=> navigate(`/search/${keyword}`)}>Search</Button>
    </>
  )
}


export default Search