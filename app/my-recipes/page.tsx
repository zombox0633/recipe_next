import Image from 'next/image'

export default function MyRecipesPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-full justify-around">
        <div className="w-56">
          <div className="flex justify-between py-2 font-bold">
            <p>Berry Cheesecake</p>
            <p>Dessert</p>
          </div>
          <div className="relative h-72 w-full">
            <Image
              fill
              priority
              alt="Berry Cheesecake"
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-64 bg-white shadow-2xl">
          <div className="flex justify-between px-2 pt-2 font-bold text-(--color-night)">
            <p>Berry Cheesecake</p>
            <p>Dessert</p>
          </div>
          <div className="relative h-80 w-full">
            <Image
              fill
              priority
              alt="Berry Cheesecake"
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover p-2"
            />
          </div>
        </div>
        <div className="w-64 bg-white shadow-2xl">
          <div className="relative h-80 w-full">
            <Image
              fill
              priority
              alt="Berry Cheesecake"
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between p-2 font-bold text-(--color-night)">
            <p>Berry Cheesecake</p>
            <p>Dessert</p>
          </div>
        </div>
      </div>
    </div>
  )
}
