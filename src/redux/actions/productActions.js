import axios from "axios";
import {shopproduct } from "../reducers/productReducer";

export const productAction = () => async (dispatch)  => {
    try {
        // const url = ''
        // const {data} = await axios.get(url)

        dispatch(shopproduct(
            {
                data:[
                    {
                    "id": 1,
                    "imageName": "black.jpeg",
                    "name": "Black",
                    "price": 250,
                    "currency": "INR",
                    "minQuantity": 0
                    },
                    {
                    "id": 2,
                    "imageName": "blue.jpeg",
                    "name": "Blue",
                    "price": 350,
                    "currency": "INR",
                    "minQuantity": 0
                    },
                    {
                    "id": 3,
                    "imageName": "brown.jpeg",
                    "name": "Brown",
                    "price": 350,
                    "currency": "INR",
                    "minQuantity": 0
                    },
                    {
                    "id": 4,
                    "imageName": "green.jpeg",
                    "name": "Green",
                    "price": 500,
                    "currency": "INR",
                    "minQuantity": 0
                    },
                    {
                    "id": 5,
                    "imageName": "orange.jpeg",
                    "name": "Orange",
                    "price": 250,
                    "currency": "INR",
                    "minQuantity": 0
                    },
                    {
                    "id": 6,
                    "imageName": "yellow.jpeg",
                    "name": "Yellow",
                    "price": 350,
                    "currency": "INR",
                    "minQuantity": 0
                    }
                    ]
            }
        ))
        
    } catch (error) {
        console.log('error')
    }
}



