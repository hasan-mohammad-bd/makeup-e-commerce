'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../elements/Search";

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header-area">
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/logo.png"
                                        alt="logo" width={200} height={48}
                                    />
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-compare">
                                                {/* <Image
                                                    className="svgInject"
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-compare.svg"
                                                /> */}
                                                <span className="pro-count blue">
                                                    {totalCompareItems}
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                {/* <Image
                                                    className="svgInject"
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                /> */}
                                                <span className="pro-count blue">
                                                    {totalWishlistItems}
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                {/* <Image
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                /> */}
                                                <span className="pro-count blue">
                                                    {totalCartItems}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;