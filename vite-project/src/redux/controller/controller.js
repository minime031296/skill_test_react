let ProductList = () => (dispatch) => {
    return (
        <>
         dispatch(API_LOADING)
        try {
            let {data} = axios.get('example product.com')
            console.log(data)
            dispatch({type: API_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: API_ERROR, payload: error.message})
        }
       
        </>

    )
}

let Product = () => (dispatch) => {
    return (
        <>
         dispatch(API_LOADING)
        try {
            let {data} = axios.get(`example product.com/${id}`)
            console.log(data)
            dispatch({type: API_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: API_ERROR, payload: error.message})
        }
       
        </>

    )
}

let Cart = () => (dispatch) => {
    return (
        <>
         
        try {
            let {data} = axios.get(`example product.com/${id}`)
            dispatch({type: API_SUCCESS, payload: data})
        } catch (error) {
           
        }
       
        </>

    )
}

module.exports = {
    ProductList,
    Product,
    Cart
}