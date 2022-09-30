import React , {useState, useEffect} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';


export default function ProductList() {

    const [products,setProducts] = useState([])


    useEffect(()=>{
        fetchProducts();
    },[])

    const fetchProducts = async() => {
        // Api fetch
        await axios.get('https://ammar4web.enjaz-monitoring.com/api/product').then(({data}) => {
            setProducts(data)
        })
    }

    const deleteProduct = async(id) => {
        await axios.delete('http://127.0.0.1:8000/api/product/'+id).then((data) => {
            console.log(data.message);
            fetchProducts();
        }).catch(({response : {data}}) => {
            console.log(data.message);
        })
    }

  return (
    <div className='container'>
        <div className='row '>
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/product/create"}>Create</Link>
                <div className='col-12'>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        products.length > 0 && (
            products.map((row,key) => (
                <tr key={key}>
                    <th scope="row">1</th>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td>
                    <img src={`http://127.0.0.1:8000/storge/product/image/${row.image}`} width='100px' alt=''/>
                    </td>
                    <td>
                    <Link className='btn-success mb-2 float-end' to={`/product/edit/${row.id}`}>Edit</Link>
                    </td>
                    <td><button  className="btn btn-danger" onClick={() => deleteProduct(row.id)}>Delete</button></td>
                </tr>
            ))
        )
    }
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

