import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomButtonProps {
  showIcon?: boolean
  children: React.ReactNode
  className?: string
}

function CustomButton({showIcon, children, className : props}: CustomButtonProps) {
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
        className={cn(`
        rounded-xl
        bg-gradient-to-r
        from-[#000000]
        to-[#656565]
        group-hover:from-[#000000]
        group-hover:to-[#2a2626]
        `,props ? props : '')}>
           { showIcon && <MoveRight className='mx-[13px]'/>}
          {children}
        </Button>

    </div>
  )
}

export default CustomButton