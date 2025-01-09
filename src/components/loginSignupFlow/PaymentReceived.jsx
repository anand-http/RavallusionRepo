import React from 'react'
import Image from 'next/image'
import { GreenCheck } from '@/lib/svg_icons'

const PaymentReceived = () => {
  return (
    <div
      className="mx-4 p-10 rounded-[28px] flex items-center justify-center flex-col"
      style={{
        background:
          "radial-gradient(circle at top, #1cc74d -120%, transparent 50%), #091926",
      }}
    >
      <GreenCheck />
      <div className='my-7'>
        <h2 className='text-center text-3xl font-bold mb-4'>Payment received</h2>
        <p className='text-sm text-center'>Your payment is received, please don`t refresh or close this screen</p>
      </div>

      <p className='text-xs text-center mb-3'>Please wait..</p>

      <div className='py-3 px-6 rounded-[8px] bg-[#1D2636] text-center w-36'>
        <span className='text-orange-300 text-lg font-semibold'>06:00 Min</span>
      </div>

    </div>
  )
}

export default PaymentReceived