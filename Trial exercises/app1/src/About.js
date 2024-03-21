const myData = {
    name: "Hamza",
    imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    imgSize:90,
}

const products = [
    {title: 'banana',id:'1', isSpeacial:false},
    {title: 'dates',id:'2', isSpeacial:true},
    {title: 'muffen',id:'3', isSpeacial:false},
]
   
function ProductsList(){
    const listItem = products.map(
        element => 
        <li key= {element.id}
        
        >{element.title}
        </li>
    )
    return (<ul>listItem</ul>);
}


function About(){
    return(
        <>
            <h1 className="my-heading">This is the About {myData.name}</h1>
            <img 
            src={myData.imgUrl} 
            alt="This is an Image"
            style = {{width:myData.imgSize,height:myData.imgSize}}
            >
            
            </img>
            <ProductsList/>
        </>
    );
}

export {About};

// style = {{width:myData.imgSize,height:myData.imgSize}}
