export default function Product(props) {
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                props.products.map(product => 
                        <div key={product.id}  className="w-60 h-60 flex justify-center flex-col bg-slate-200 p-2">
                            <img className="object-fill" src={product.thumbnail} />
                             <span>{product.title}</span>
                        </div>
                )}
        </div>
    )
}