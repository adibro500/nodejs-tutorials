import { useEffect } from "react";


function Child() {
    useEffect(() => {
        console.log('mimics component did mount')
    }, []);

    return (<h1>Hello</h1>)
}

export default Child;