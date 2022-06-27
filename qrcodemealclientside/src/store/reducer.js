const INITIAL_STATE = {
   colors:{
    backgroundColor:"#8A2B34",
    textColor:"white",
    hieghtlightedColor:"#FFE600"
   }
};

export default (state = INITIAL_STATE, action) => {
    console.log(action)
};