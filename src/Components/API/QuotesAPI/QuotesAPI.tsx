import { useEffect, useState } from 'react'



interface Quote {
    text: string,
    author: string,
}
const QuotesAPI = () => {
    const [quote, setQuote] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    const RecievedQuote = async () => {
        let response = await fetch('https://type.fit/api/quotes')
        let quote: Quote[] = await response.json();
        let rd = Math.floor(Math.random() * 200)
        setQuote(quote[rd].text);
        setAuthor(quote[rd].author)

    }

    useEffect(() => {
        RecievedQuote()

    }, [])



    return (
        <div>
            <h3>Random quote</h3>
            <p>{quote}</p>
            <p><em>{author}</em></p>
        </div>
    )
}

export default QuotesAPI