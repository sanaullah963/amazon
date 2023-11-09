
interface keytype  {
  children : React.ReactNode | React.ReactNode[],
  className? : any,
}
function Container({children,className}:keytype) {
  return (
    <div className={`${className} max-w-screen-xl px-4 mx-auto `}>{children}</div>
  )
}

export default Container