import React from 'react'
import './quote-details.css'
import ToggleButton from './toggle-button'
import ValidIcon from './valid-icon'
import IconComparison from './icon-comparison'
import NumberFormat from 'react-number-format';

function QuoteDetails({universal, global}) {
  const [selected, setSelected] = React.useState(false)
  const [state, setState] = React.useState({universal, global})

  function handleSubscriptionTypeChange(event) {
    if (event) {
      setState({universal, global})
    } else {
      setState({universal: universal / 12, global: global / 12})
    }
  }

  return (
    <div>
      <h3 className="quote-details__name">Select a plan</h3>
      <div className="quote-details__select-subscription-type">
        <span className="pr-2">PAY MONTHLY</span> <ToggleButton onchange={handleSubscriptionTypeChange}/> <span className="pl-2">PAY YEARLY</span>
      </div>
      <div className="container">
        <div className="quote-details__card-deck">
          <div className="quote-details__card" style={{backgroundColor: '#31cfda'}}>
            <div className="quote-details__card-header">
              Global
            </div>
            <div className="quote-details__card-price" style={{backgroundColor: 'rgba(255, 255, 255, 0.15)'}}>
              <NumberFormat value={state.global} displayType={'text'} isNumericString={true} thousandSeparator={true}/>
              <span style={{fontSize: '11px'}}>YEARLY INCL. TAXES</span>
            </div>
            <div className="quote-details__card-features">
              <ul style={{backgroundColor: '#31cfda'}}>
                <li>Maximum duration travel of 90 days</li>
                <li>Medical expenses reimbursment up to 1.000.000 &euro;</li>
                <li>Personal assistance abroad up to 5.000 &euro;</li>
                <li>Travel assistance abroad up t0 1.000 &euro; <br/> per insured per travel</li>
                <li>Coverage duration: 1 year</li>
                <li>
                  <button className="quote-details__button" style={{backgroundColor: '#fff', color: '#31cfda'}}
                    type="button" onClick={() => setSelected('global')}>
                      {
                        selected === 'global' ?
                          <div className="quote-details__button--selected">
                            <ValidIcon background={'#31cfda'} />
                            <span className="ml-1">Plan Selected</span>
                          </div>
                          :
                          'Choose this plan'
                      }
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="quote-details__card ml-3">
            <div className="quote-details__card-header" style={{color: '#484848'}}>
              Universe
            </div>
            <div className="quote-details__card-price" style={{color: '#31cfda'}}>
              <NumberFormat value={state.universal} displayType={'text'} isNumericString={true} thousandSeparator={true}/>
              <span style={{fontSize: '11px'}}>YEARLY INCL. TAXES</span>
            </div>
            <div className="quote-details__card-features">
              <ul style={{color: '#484848'}}>
                <li>Maximum duration travel of 180 days</li>
                <li>Medical expenses reimbursment up to 3.000.000 &euro;</li>
                <li>Personal assistance abroad up to 10.000 &euro;</li>
                <li>Travel assistance abroad up t0 2.500 &euro; <br/> per insured per travel</li>
                <li>Coverage duration: 1 year</li>
                <li>
                  <button className="quote-details__button"
                    type="button" onClick={() => setSelected('universal')}>
                      {
                        selected === 'universal' ?
                          <div className="quote-details__button--selected">
                            <ValidIcon background={'#fff'} />
                            <span className="ml-1">Plan Selected</span>
                          </div>
                          :
                          'Choose this plan'
                      }
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="quote-details__footer">
          <button type="button" className="mr-2">Show me the full comparison table</button>
          <IconComparison />
        </div>
      </div>
    </div>
  )
}

export default QuoteDetails