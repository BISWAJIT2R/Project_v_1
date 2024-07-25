
import { items } from '../utils/Index'

const Column = () => {
  return (
    <div className='custom-column'>
        {
            items.map((item, i) => (<h3 key={i} className={`bg-red-500 relative  lg:font-base  flex items-center justify-center py-2 px-2 capitalize`}>{item}</h3>))
        }
    </div>
  )
}

export default Column