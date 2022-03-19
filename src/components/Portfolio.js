const products = [
    {
      id: 1,
      name: 'GameJunkee',
      href: 'https://gamejunkee.herokuapp.com/',
      hrefG: 'https://github.com/Project-2-BJMS/GameJunkee',
      imageSrc: 'https://user-images.githubusercontent.com/90992593/159093356-49e34915-b3e8-4bbc-9a8b-db67c62d3eda.jpg',
      imageAlt: 'project image',
    },
    {
        id: 2,
        name: 'Food Temp',
        href: 'https://seasons-of-food.github.io/whats-your-food-temp/',
        hrefG: 'https://github.com/seasons-of-food/whats-your-food-temp',
        imageSrc: 'https://user-images.githubusercontent.com/90992593/159093764-2b967277-e584-4a0f-8fed-9aacfddd2f7a.jpg',
        imageAlt: 'project image',
      },
      {
        id: 3,
        name: 'Password Generator',
        href: 'https://jonathanparker21.github.io/password-generator/',
        hrefG: 'https://github.com/jonathanparker21/password-generator',
        imageSrc: 'https://user-images.githubusercontent.com/90992593/159093624-37538ca9-8f32-4058-85bd-430466d7fee7.jpg',
        imageAlt: 'project image',
      },
      {
        id: 4,
        name: 'Note Taker',
        href: 'https://note-taker-app37.herokuapp.com/',
        hrefG: 'https://github.com/jonathanparker21/note-taker',
        imageSrc: 'https://user-images.githubusercontent.com/90992593/159093706-33177627-a590-4fbe-8c89-6c5dfd60e903.jpg',
        imageAlt: 'project image',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 text-center">PROJECTS</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative w-full h-72 rounded-lg overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-xl font-medium text-gray-900 text-center">{product.name}</h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    {/* <p className="relative text-lg font-semibold text-white">{product.price}</p> */}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    target="_blank"
                    href={product.href}
                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Deployed App<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    target="_blank"
                    href={product.hrefG}
                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    GitHub<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  