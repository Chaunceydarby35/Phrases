import { useState } from "react"


const PhrasesApp = () => {
  const [quote, setQuote] = useState({
    text: 'Ask not what your country can do for you; ask what you can do for your country',
    author: 'John Kennedy',
  })

  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)


 const fetchNewQuote = async () => {
  const url = 'https://api.quotable.io/random'
  const response = await fetch(url)
  const data = await response.json()
  setQuote({
    text: data.content,
    author: data.author,
  })
 }

 const toggleFavorites = () => {
  setShowFavorites(!showFavorites)
}

const addToFavorites = () => {
  const isAlreadyInFavorites = favorites.some(
    (fav) => fav.text === quote.text && fav.author === quote.author,
  )

  if (!isAlreadyInFavorites) {
    setFavorites([...favorites, quote])
  }
}


  return (
    <div className="container">
        <div className="phrases-app">
            <h1 className="app-heading">Phrases</h1>
            <i className="bx bxs-heart fav-icon"></i>
            <div className="phrase">
                <i className="bx bxs-quote-alt-left left-quote" onClick={toggleFavorites}></i>
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">{quote.author}</p>
                <i className="bx bxs-quote-alt-right right-quote"></i>
            </div>
            <div className="circles">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
              <div className="circle-3"></div>
              <div className="circle-4"></div>
            </div>
            <div className="buttons">
              <button className="btn btn-new" onClick={fetchNewQuote}>
                New Phrase
                </button>
              <button className="btn btn-fav" onClick={addToFavorites}>
                Add to Favorites
                </button>
            </div>
        </div>
    </div>
  )
}

export default PhrasesApp