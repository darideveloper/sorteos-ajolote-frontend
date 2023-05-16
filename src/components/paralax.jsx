export default function Paralax({ children, imageUrl, extraClasses = "", maxHeight }) {

  return (
    <div className={`w-full bg-fixed bg-center bg-cover ${extraClasses}`} style={{ maxHeight: `${maxHeight}px`, backgroundImage: `url('${imageUrl}')` }}>
      {children}
    </div>
  )
}