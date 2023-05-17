'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

// ** Import Icons
import { TbCurrencyTaka } from "react-icons/tb";

const Cart = () => {

    const router = useRouter();

    const handleCart = () => {
        router.push('/cart')
    }

    return (
        <>
            <div className="cart fixed top-1/2 right-0 cursor-pointer" onClick={handleCart}>
                <div className="icon bg-white border border-r-0 border-primary rounded-ss-lg px-1 text-center">
                    <Image src="/assets/images/icons/cart.svg" alt="Cart" width={58} height={58} className="inline-block"/>
                </div>
                <div className="content rounded-es-lg">
                    <p className="text-xs text-white">২ আইটেম</p>
                    <p className="text-xs font-semibold text-white"><TbCurrencyTaka size={14} className="font-semibold"/>168,699</p>
                </div>
            </div>
        </>
    )
}

export default Cart;