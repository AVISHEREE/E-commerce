import React , {useState , useEffect} from "react";

const SearchProduct = () =>{
    const [searchText, setSearchText] = useState("")
    const [products,setProducts] = useState([])
    useEffect(()=>{
        if(searchText !== ""){
        setTimeout(() => {
                search()
            }, 2000);
        }
    },[searchText])
    const search = async() =>{
        const data = await fetch(`http://localhost:5000/v1/product/search-product/${searchText}`)
        const result = await data.json()
        setProducts(result)
        console.log(products);
        // console.log(products[0].name);
        
    }

    return (
        <>
        <div className="searchBar">
        <input type="text" placeholder="search your product here" onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={search}>search</button>
        </div>
       {products.length > 0 ?(
        products.map((product)=>(
            <ul>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.category}</li>
                <li>{product.company}</li>
            </ul>
        ))
       ):
        (<p style={{margin:"100px"}}>no products found</p>)
       }
        </>
    )
}

export default SearchProduct;