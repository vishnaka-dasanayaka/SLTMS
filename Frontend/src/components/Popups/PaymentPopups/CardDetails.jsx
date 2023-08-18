function CardDetails () {
return (
    <div>

        <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col w-[50%] px-10 py-10  border border-black">
                    <div className="mb-5 text-3xl font-bold uppercase">
                        <h1>Card Details</h1>
                    </div>

                    <div className="w-full my-5">
                        <input type="text" placeholder="NAME ON THE CARD" className="w-full p-3 border border-black"/>
                    </div>

                    <div className="w-full my-5">
                        <input type="text" placeholder="CARD NUMBER" className="w-full p-3 border border-black"/>
                    </div>
                 
                    <div className="flex justify-between my-5">
                        <div className="w-full">
                          <input type="text" placeholder="MM/YY" className="p-3 w-[90%] text-center border border-black"/>
                        </div>
                        <div className="flex justify-end w-full">
                         <input type="text" placeholder="CVC" className="w-[90%] p-3 text-center border border-black"/>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="send otp" className="px-10 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl uppercase"/>
                    </div>
              </div>

                 <div className="flex flex-col w-[50%] justify-center items-center pt-[10vh] border border-black">
                <div className="flex justify-center w-full py-4">
                    <input type="text" className="w-[60%] p-3 border border-black text-center" placeholder="ENTER OTP HERE"/>
                </div>

                <div className="py-4">
                     <input type="submit" value="resend otp" className="px-10 py-2 hover:text-white hover:bg-orange-500 rounded-xl border-[1px] border-orange-500 bg-white text-black cursor-pointer tracking-wider text-xl uppercase"/>
                </div>

                <div className="py-4">
                     <input type="submit" value="submit" className="px-10 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl uppercase"/>
                </div>
                </div>
            </div>

            <div className="flex flex-col w-[50%] justify-center items-center h-[75vh] border border-black">
                <div className="flex justify-center my-10">
                    <img src="./img/successful.jpg" alt="" />
                </div>

                <div className="flex justify-center text-4xl">
                    <h1>TRANSACTION SUCCESSFUL!</h1>
                </div>
            </div>
            


        </div>
            



    </div>
)
}

export default CardDetails