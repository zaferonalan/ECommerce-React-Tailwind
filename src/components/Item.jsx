import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="group relative">
        <Link>
            <div className="aspect-h-1 aspect-w-1w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 h-96">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
            </div>
        </Link>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <Link>
                        <span aria-hidden="true" className="inset-0">{product?.name}</span>
                    </Link>
                </h3>
            </div>
            <p>${product?.new_price}</p>
        </div>
    </div>
  )
}

export default Item