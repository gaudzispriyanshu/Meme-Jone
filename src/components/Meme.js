import React from 'react'

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })



    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input type="text" name="topText" value = {meme.topText} id="" className='form--inputs' placeholder='Top-text' onChange={handleChange} />
                <input type="text" name="bottomText" value={meme.bottomText} id="" className='form--inputs' placeholder='Bottom-text' onChange={handleChange} />
                <button className='form--button' onClick={getMemeImage}>Get a new meme image🗿</button>
            </div>
            <div class="meme--container">
                <img src={meme.randomImage} alt="a-random-meme" className='meme--image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme