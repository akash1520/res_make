function Card(props) {
    return (
        <div className="col">
            <div class="card">
                <img src={props.imageSrc} class="card-img-top rounded" alt="..." />
                <div class="card-body">
                    <h5 class="card-title" contentEditable>{props.title}</h5>
                    <p class="card-text" contentEditable>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;