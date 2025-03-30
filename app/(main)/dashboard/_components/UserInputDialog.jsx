import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

function UserInputDialog({children, coachingOption}) {
  return (
    <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{coachingOption.name}</DialogTitle>
        <DialogDescription asChild>
         <div className='mt-3'>
            <h1>Gib ein Thema ein, um deine Fähigkeiten zu meistern {coachingOption.name}</h1>
         </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default UserInputDialog
