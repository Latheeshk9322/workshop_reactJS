

function Welcome(props) {
 const {name,usn}=props.obj;
  return (
    <>
      <div className='welcome-card'>
        <h2 >
          Welcome  to my page
        </h2>
        <p>
            This is the second webpage
            using the react component!
            Name: {name} <br></br>
            USN: {usn}
        </p>
      </div>
      
    </>
  )
}

export default Welcome
