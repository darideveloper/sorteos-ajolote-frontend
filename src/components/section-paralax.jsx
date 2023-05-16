export default function SectionParalax({ children, imageUrl, extraClasses = "" }) {

  return (
    <section className={`w-full h-52 sm:h-80 md:h-96 lg:h-screen bg-fixed bg-center bg-cover ${extraClasses}`} style={{ maxHeight: "400px", backgroundImage: `url('${imageUrl}')` }}>
      {children}
    </section>
  )
}