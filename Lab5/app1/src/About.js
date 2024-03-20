
import "./About.css" 

const someData = {
    name: 'julia',
    imgURL: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    imgSize: 90,
}



const products = [
    {title: 'banana', id: '1', isSpecial: false},
    {title: 'muffin', id: '2', isSpecial: true},
    {title: 'dates', id: '3', isSpecial: false},
]

function ProductList()
{
    const  listItem = products.map(element =>
        <li key={element.id}>
            {element.title}
        </li>

    )
    return <ul>listItem</ul>
}


function About()
{
    return(
        <>
            <h1 className = "mystyle">This is the about {someData.name}</h1>
            <img 
                src = {someData.imgURL} 
                alt = "this is an image"
                style = {
                    {width: someData.imgSize, height: someData.imgSize}
                }
            >


            </img>
            <ProductList/>

        </>

    );
}

export default About;

// export {About}; - for multiple components