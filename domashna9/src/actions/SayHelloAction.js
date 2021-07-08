export const sayHello = () => { //action creator
    return {
        type: "SAY_HELLO",
        payload: "Hi and Welcome to my App"  //action - {type:,payload:}
    }
}