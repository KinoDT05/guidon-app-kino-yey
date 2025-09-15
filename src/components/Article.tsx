import './components.css'

function Article({ Title, Date, Number }) {
    return (
        <>
            <a class='article'>
                <div class='article-number'>
                    <p class='number'>{Number}</p>
                </div>

                <div class='article-detail'>
                    <h2>{Title}</h2>
                    <p class='date'>{Date}</p>
                </div>
            </a>
        </>
    )
}

export default Article