import React, { useState } from 'react'
import { List } from 'reactstrap'

export default function Header() {
    const [active, setActive] = useState(0)
    const increment = () => {
        setActive(
            prev => {
                prev = prev + 1
                return prev > 3 ? 3 : prev
            })
    }
    const decrement = () => {
        setActive(
            prev => {
                prev = prev - 1;
                return prev < 0 ? 0 : prev
            })
    }
    return (

        <header className="App-header">
            <ul className='tabs'>
                <li >
                    <i class="ri-verified-badge-line"></i>30-DAY SATISFACTION GUARANTEE
                </li>
                <li>
                    <i class="ri-truck-line"></i> FREE DELIVERY ON ORDERS OVER $40.00
                </li>
                <li>
                    <i class="ri-heart-3-line"></i> 50.00+ HAPPY CUSTOMERS
                </li>
                <li>
                    <i class="ri-exchange-funds-fill"></i>100% MONEY GUARANTEE
                </li>
            </ul>

            <ul className='mobile-tabs'>
                <li onClick={() => decrement()}><i class="ri-arrow-left-s-line mobile-tab-arrow"></i></li>

                {active == 0 &&
                    <li  >
                        <i class="ri-verified-badge-line"></i>30-DAY SATISFACTION GUARANTEE
                    </li>
                }

                {active == 1 &&
                    <li >
                        <i class="ri-truck-line"></i> FREE DELIVERY ON ORDERS OVER $40.00
                    </li>
                }

                {active == 2 &&
                    <li >
                        <i class="ri-heart-3-line"></i> 50.00+ HAPPY CUSTOMERS
                    </li>
                }

                {active == 3 &&
                    <li >
                        <i class="ri-exchange-funds-fill"></i>100% MONEY GUARANTEE
                    </li>
                }

                <li className='mobile-tab' onClick={() => increment()}><i class="ri-arrow-right-s-line mobile-tab-arrow"></i></li>
            </ul>
        </header>
    )
}
