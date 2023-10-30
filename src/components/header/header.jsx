import React from 'react'
import { List } from 'reactstrap'

export default function Header() {
    return (

        <header className="App-header">
            <ul className='header'>
                <li>
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
        </header>
    )
}
