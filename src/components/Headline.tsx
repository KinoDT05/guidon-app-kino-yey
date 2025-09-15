import './components.css'

function Headline({ Category, Title, Date, Text, ImgUrl, StyleType }) {
    return (
        <>
            <a class={StyleType}>
                <div class='img-container'>
                    <img src={ImgUrl} class={StyleType}></img>
                </div>
                <p class={'Categ ' + StyleType}> {Category}</p>
                <h2 class={StyleType}>{Title}</h2>
                <p class={'small-text ' + StyleType} >{Text}</p>
                <p class={'date ' + StyleType}>{Date}</p>
            </a>
        </>
    )
}

export default Headline