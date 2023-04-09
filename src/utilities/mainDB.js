const addToDB = (id) =>{
        let getAppliedJobs = {};
    const appliedJobs =  localStorage.getItem('Applied-jobs');

    if (appliedJobs) {
        getAppliedJobs =  JSON.parse(appliedJobs)
    }

    const quantity =  getAppliedJobs[id];
    if (quantity) {
        const newQty =  quantity + 1
        getAppliedJobs[id] = newQty
    }else{
        getAppliedJobs[id] = 1
    }

    localStorage.setItem('Applied-jobs', JSON.stringify(getAppliedJobs))
}

const getShoppingCart = () => {
    let shoppingCart =  {}

    const storedCart =  localStorage.getItem('Applied-jobs');

    if(storedCart){
        shoppingCart =  JSON.parse(storedCart)
    }
return shoppingCart
}

export {addToDB, getShoppingCart}