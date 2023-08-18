import {useSelector} from 'react-redux'

function Owner() {

    const {user} = useSelector((state) => state.auth)
  return (
    <div>
      <section>
        <h1 className='text-2xl font-extrabold tracking-widest uppercase'>welcome <span className='text-yellow-600'>{user && user.firstName}</span>,</h1>
      </section>
    </div>
  )
}

export default Owner
