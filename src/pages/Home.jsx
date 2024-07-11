import React from 'react'
import { getCabins } from '../services/apiCabins'
import { useLoaderData } from 'react-router-dom'
import Container from '../components/Container';

const Home = () => {
  const data = useLoaderData();
  console.log(data) ;
  return (
    <Container>
      home
    </Container>
  )
}

export default Home;

export async function HomeLoader () {
  const data = await getCabins()
  return data;
}

