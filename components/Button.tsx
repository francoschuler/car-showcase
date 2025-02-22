"use-client"

const Button = () => {
  return (
    <button disabled={false} type={"button"} className={`custom-btn`} onClick={() => {}}>
        <span className={`flex-1`}>Title</span>
    </button>
  )
}

export default Button