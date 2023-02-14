

export function Poster(){
    return(
        <div className="poster">
            <div className="top">
                <img src={require("../image/post1.svg").default} alt="" />
                < div className="top-txt">
                <h1>Black</h1>
                <h2>A personal React js site</h2>
                </div>
            </div>
            <div className="bottom">
                <img src={require('../image/post2.svg').default} alt="" />
                <img src={require('../image/post3.svg').default} alt="" />
                <img src={require('../image/post4.svg').default} alt="" />
                <img src={require('../image/post5.svg').default} alt="" />
            </div>
        </div>
    )
}