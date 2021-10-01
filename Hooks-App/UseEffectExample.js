import React, { useState, useEffect } from 'react'

const  UseEffectExample = () => {
    const apiBaseUrl = 'https://dog.ceo/api/breeds/image/random';
    const [doImageUrls, setDogImageUrls] = useState([]);
    const [loadPictures, setLoadPictures] = useState(false);

    const loadDogPictures = () => {
        const numToLoad = Math.random() * 10;
        fetch(`${apiBaseUrl}${numToLoad}`)
        .then(resp => resp.json())
        .then(data => setDogImageUrls(data.message));
    }
    
useEffect(() => {
    loadDogPictures();
    }, []);

    useEffect(() => {
        if(loadDogPictures) {
            loadDogPictures();
            setLoadPictures(false)
        }
    }, [loadDogPictures]);


    return (
        <>
            <p>Hello</p>
        </>
    )
}

export default UseEffectExample;
