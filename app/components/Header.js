'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../elements/Search";

// ** Import Icons
import { HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2"

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
    }, [scroll]);

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className="header border-b border-slate-300 py-4">
                <div className="container">
                    <div className="header-wrap flex justify-between items-center">
                        <div className="header-left flex justify-between items-center gap-4">
                            <Link href="/" className="logo">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="Sototal Stall" width={200} height={48}
                                />
                            </Link>
                            <div className="nav-menu">
                                <Link href="/products/phone">স্মার্ট ফোন</Link>
                                <Link href="/products/watch">স্মার্ট ওয়াচ</Link>
                                <Link href="/products/laptop">ল্যাপটপ</Link>
                                <Link href="/products">আরও</Link>
                            </div>
                        </div>
                        <div className="header-right flex justify-between items-center gap-6">
                            <div className="nav-search">
                                <Search />
                            </div>
                            <div className="header-actions flex gap-4">
                                <Link href="/shop-compare" className="single-action">
                                    <HiOutlineHeart size={24}/>
                                    <span className="pro-count blue">
                                        {totalCompareItems}
                                    </span>
                                </Link>
                                <Link href="/shop-wishlist" className="single-action">
                                    <HiOutlineShoppingCart size={24}/>
                                    <span className="pro-count blue">
                                        {totalWishlistItems}
                                    </span>
                                </Link>
                                <Link href="/shop-cart" className="single-action">
                                    <HiOutlineUser size={24}/>
                                    <span className="pro-count blue">
                                        {totalCartItems}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;