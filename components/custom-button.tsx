import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

interface CustomButtonProps {
  text: string
  showIcon: boolean
}

function CustomButton({ text, showIcon}: CustomButtonProps) {
  return (
    <div
    className=' 
    p-[2px]
    m-6
    mx-4
    sm:mx-auto
    rounded-xl
    bg-gradient-to-r
    from-[#665353]
    to-[#000000]
    w-[fit-content]
    flex
    justify-center
    items-center
    group
    '
    >
        <Button variant={"secondary"}
        className='
        rounded-xl
        bg-gradient-to-r
        from-[#000000]
        to-[#656565]
        group-hover:from-[#000000]
        group-hover:to-[#2a2626]
        '>
           { showIcon && <MoveRight className='mx-[13px]'/>}
          <span>{text}</span>
        </Button>

    </div>
  )
}

export default CustomButton