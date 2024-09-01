let ProductList = () => async(dispatch) => {
    return (
        <>
        dispatch(API_LOADING)
        try {
            let {data} = await axios.get('example product.com')
            console.log(data)
            dispatch([type: API_SUCCESS, payload: data])
        } catch (error) {
            dispatch([type: API_ERROR, payload: error.message])
            console.log(error in ProductList)
        }
       
        </>

    )
}

let Product = () => async(dispatch) => {
    return (
        <>
         dispatch(API_LOADING)
        try {
            let {data} = await axios.get(`example product.com/${id}`)
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
         dispatch(
        type: API_SUCCESS, 
        payload: data
        )
       
        </>

    )
}

module.exports = {
    ProductList,
    Product,
    Cart
}