import React from 'react';
import QuoteForm from '../components/quote-form'
import {computeQuote} from '../utils/quotes-client'
import './Quote.css'
import QuoteDetails from '../components/quote-details'

function Quote() {
  const [quote, setQuote] = React.useState(null)

  async function getQuote({age, make, price}) {
    const q =  await computeQuote({age, make, price})
    setQuote(q)
  }

  return (
    <div>
    {
      quote ?
        <div className="quote-details">
          <QuoteDetails {...quote}/>
        </div>
        :
        <div className="quote-request">
          <div className="quote-request__form">
            <QuoteForm onSubmit={getQuote}/>
          </div>
        </div>
    }
    </div>
  )
}

export default Quote;