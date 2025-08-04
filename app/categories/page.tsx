export default function CategoriesPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className=" w-40 h-40 bg-amber-300"></div>
        ))}
      </div>
    </div>
  )
}
