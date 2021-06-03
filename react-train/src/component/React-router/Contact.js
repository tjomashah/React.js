import React, {useState, useEffect} from 'react'

function Contact() {

    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');

        const items = await data.json();
        console.log(items)
        setItems(items)
    }

    return (
        <div>
            <h1>Contact Page</h1>
            <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                {items.map(item => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Contact