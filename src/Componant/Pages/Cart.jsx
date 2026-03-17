import React, { useContext } from 'react'
import { CartContex } from '../../Feature/CartProvider'
import CartProduct from '../CartProduct'
import { totalItem, totaPrice } from '../../Feature/CartReducer'


const Cart = () => {
    const {cart}=useContext(CartContex)
  return (
   
   <div id="cart-part" >
 <div class="max-w-[1440px] mx-auto">
    <div class="flex justify-between mt-[100px]">
    <div class="">
<div class="w-[952px] pb-[30px] bg-[#F6F6F7]">
<div class="flex  h-[61px] items-center border-b-3 border-black/50">
    <p class="text-[18px] text-[#74787C] font-semibold pl-[200px]">Products</p>
    <p class="text-[18px] text-[#74787C] font-semibold  pl-[250px]">Price</p>
    <p class="text-[18px] text-[#74787C] font-semibold  pl-[110px]">Quantity</p>
    <p class="text-[18px] text-[#74787C] font-semibold  pl-[65px]">SubTotal</p>

</div>
<div  class="cart-content">
   
{cart.map(p=>(
    <CartProduct key={p.id} Product={p}></CartProduct>

))}

</div>

<div class="flex mt-[30px]">
<div class="ml-[30px]">
   <input type="text" placeholder="Cupon Code" class="w-[296px] h-[61px] rounded-lg bg-white border-3 border-black/50 focus:outline-none pl-[15px] placeholder:text-[#74787C]/50"/> 
   <button class="px-7.5 py-4 bg-white border-3 font-semibold rounded-lg border-black/50 text-[#222222] uppercase">Apply Coupon</button>
   <button id="updateCart" class="px-7.5 py-4 bg-red-500 font-semibold rounded-lg text-white uppercase ml-[205px]">Update Cart</button>

</div>
</div>







</div>









</div>




<div class="">


<div class="w-[450px] bg-[#F9F9F9] p-8 border border-gray-100 rounded-sm font-sans">
    <div className='flex justify-between'>
    <h2 class="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">
        Cart Totals
    </h2>
    <h2 class="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">
        {totalItem(cart)}
    </h2>
    </div>

    

    <div class="py-8 border-b border-gray-200">
        <div class="flex justify-between mb-4">
            <span class="text-[16px] text-[#74787C] font-medium">Shipping</span>
            <div class="text-right space-y-3">
                <label class="flex items-center justify-end gap-3 cursor-pointer">
                    <span class="text-[16px] text-[#444444]">Free Shipping</span>
                    <input type="radio" name="shipping" checked class="w-4 h-4 accent-black"/>
                </label>
                <label class="flex items-center justify-end gap-3 cursor-pointer">
                    <span class="text-[16px] text-[#444444]">Flat Rate</span>
                    <input type="radio" name="shipping" class="w-4 h-4 accent-black"/>
                </label>
                <label class="flex items-center justify-end gap-3 cursor-pointer">
                    <span class="text-[16px] text-[#444444]">Local Pickup</span>
                    <input type="radio" name="shipping" class="w-4 h-4 accent-black"/>
                </label>
            </div>
        </div>
        
        <p class="text-[14px] text-[#74787C] text-right mt-4 leading-relaxed">
            Shipping options will be updated <br></br> during checkout
        </p>
        
        <div class="text-right mt-2">
            <button class="text-[15px] font-bold text-[#222222] hover:underline transition-all">
                Calculate Shipping
            </button>
        </div>
    </div>

    <div class="flex justify-between items-center py-8">
        <span class="text-[16px] text-[#74787C] font-medium">Total</span>
        <span id="totalnumber" class="text-[22px] font-bold text-[#222222] total-price">{totaPrice(cart)}</span>
    </div>

    <button class="chekoutbtn w-full bg-[#EF4444] text-white py-4 text-[16px] font-bold uppercase tracking-wider rounded-md hover:bg-[#D93636] transition-all duration-300">
        Proceed to Checkout
    </button>
</div>



</div>


</div>




 </div>

</div>

  )
}

export default Cart