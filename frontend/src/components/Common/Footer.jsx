import React, { useEffect, useState } from 'react';
import logo2 from '../../assets/img/cooltees-logo-big.png';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <footer>
            {key !== null && (
                <div class="foot">
                    <h2>total: ${Math.round(price)}</h2>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button class="btn">Check Your Cart</button>
                        </a>
                    ) : (
                        <a href="/Shipping">
                            <button class="btn">Checkout</button>
                        </a>
                    )}
                </div>
            )}
            <div class="refresh">
                <img src={logo2} alt="logo" />
                <p>
                    Premium Quality cool t-shirts, 3D designs, with wide range of colors at the best and most affordable
                    price.
                </p>
                <p>we have a new offer every day for 365 days</p>
                <span>Contact</span>
                <p>E-mail: cool-tees@trend.com | Hotline: +1 131 138 138</p>
            </div>
            <div className="copyright">
                <p>DESIGN BY COOLTEES - © 2022. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
