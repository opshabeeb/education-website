import React from 'react'
import './Plans.css'

function Plans() {
    const pricingData=[
        {
            title:'Regular member',
            price:'$0',
            duration:'/month',
            color:'#fff',
            features:[
                'unlimitted access to the course',
                'coustemer support',
                'personal mentor',
                'standerd options',
                '5 class per week'

            ]

        },
        {
            title:'Premium member',
            price:'$100',
            duration:'/month',
            color:'#6f55f2',
            features:[
                'unlimitted access to the course',
                'coustemer support',
                'personal mentor',
                'standerd options',
                '7 class per week'

            ]

        },
        {
            title:'Standerd member',
            price:'$50',
            duration:'/month',
            color:'#fff',
            features:[
                'unlimitted access to the course',
                'coustemer support',
                'personal mentor',
                'standerd options',
                '5 class per week'

            ]

        }
    ]
  return (
    <div className="container">

        <div className="pricing-top">
              <h2>Premium Pricing Plans</h2>
              <p>Unlock elite tech services with our premim pricing plans and soar ahead of the competation</p>
        </div>
        <div className="pricing-wrapper">
            {
                pricingData.map((pricingItem,index)=>(
                    <div className="pricing-item" key={index}>
                <div className="pricing-cardtop" style={{backgroundColor:pricingItem.color}}>
                    <h2 className='section_title'>{pricingItem.title}</h2>
                    <h2 className='pricing_section_title'>
                         {pricingItem.price} <span>{pricingItem.duration}</span>
                    </h2>
                </div>
                <div className="services">
                    <ul>{pricingItem.features.map((feature,index)=>(
                          <li key={index}>{feature}</li>
                    ))}
                        
                    </ul>
                    <button className='register-button'>Join</button>
                </div>
             </div>
                ))
            }
             
        </div>
    </div>
  )
}

export default Plans