export default function Titile({ text }) {
  return (
    <div className="title-wrapper w-full bg-pink py-5">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">{text}</h2>
    </div>
  )
}