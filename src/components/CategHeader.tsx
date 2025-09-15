
import './components.css'

function CategHeader({categName, categDesc } ) {
    return (
        <>
            <div class='categ-container'>
                <h2 class='categ-name'> {categName}</h2>
                <p class='categ-desc'> {categDesc }</p>
            </div>
        </>
    )
}

export default CategHeader
