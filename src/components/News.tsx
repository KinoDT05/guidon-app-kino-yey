import './components.css'

function News({ Title, Date, Text, ImgUrl }) {
    return (
        <>
            <a class='news'>
                <div class='news-img img-container'>
                    <img src={ImgUrl}></img>
                </div>

                <div class='news-detail'>
                    <h2>{Title}</h2>
                    <p class="small-text">{Text}</p>
                    <p class='date'>{Date}</p>
                </div>
            </a>
        </>
    )
}

export default News