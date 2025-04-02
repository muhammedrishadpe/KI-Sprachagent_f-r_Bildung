import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CoachingExpert } from "@/services/Options";
import { useStackApp } from "@stackframe/stack";

function UserInputDialog({ children, coachingOption }) {
const [selectExpert, setSelectExpert] = useState();

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{coachingOption.name}</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-3">
              <h1 className="text-black">
                Gib ein Thema ein, um deine Fähigkeiten zu meistern{" "}
                {coachingOption.name}
              </h1>
              <Textarea
                placeholder="Enter your topic here..."
                className="mt-2"
              />
              <h1 className="text-black">
                Gib ein Thema ein, um deine Fähigkeiten zu meistern{" "}
                {coachingOption.name}
              </h1>
  <div className='grid grid-cols-3 md:grid-cols-5 gap-6  mt-3'>
  {CoachingExpert.map((expert, index) => (
    <div key={index} onClick={()=> setSelectExpert(expert.name)}
    className={`${selectExpert === expert.name && 'border-2'} p-1 rounded-2xl`}
  >              
      <Image
        src={expert.avatar}
        alt={expert.name}
        width={100}
        height={100}
        className={`rounded-2xl h-[80px] w-[80px]  object-cover hover:scale-105 transition-all cursor-pointer ${selectExpert === expert.name && 'border-2'}`}
      />
      <h2 className="text-center">{expert.name}</h2>
    </div>
  ))}
  </div>
</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default UserInputDialog;
