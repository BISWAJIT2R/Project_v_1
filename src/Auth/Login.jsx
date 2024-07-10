import { useLoaderData } from "react-router-dom"



const Login = () => {
    const data = useLoaderData();
    
  return (
    <div>
        {
        data.map((item, i) => (
            <div key={i}>{item.description}</div>
        ))
        }
    </div>
  )
}

export default Login