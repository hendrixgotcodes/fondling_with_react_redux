import {FETCH_POSTS, NEW_POST} from './types';

export default function fetchPost(){

    return function(dispatch){

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{

            dispatch({
                type: FETCH_POSTS,
                payload: data
            })

        })

    }

}