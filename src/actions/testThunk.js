export default()=>{
    return (dispatch, getState)=>{
        setTimeout(()=>{
            console.log("M waitiong");
            const reduxState = getState();
            console.log(reduxState);
            dispatch({
                type: "testThunk"
            })
        },2000)
    }
}