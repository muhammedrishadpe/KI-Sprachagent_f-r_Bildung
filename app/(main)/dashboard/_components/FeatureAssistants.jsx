"use client";
import React from "react";
import { useUser } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import { ExpertsList } from "@/services/Options";
import Image from 'next/image';
import {BlurFade} from "@/components/magicui/blur-fade";
function FeatureAssistants() {
  const user = useUser(); 
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium text-gray-500">My Workspace</h2>
          <h2 className="text-3xl font-bold">
            Welcome back, {user?.displayName}
          </h2>
        </div>
        <Button>Profile</Button>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-10 mt-10'>
        {ExpertsList.map((option, index) => (
           <BlurFade key={option.icone} delay={0.25 + index * 0.05} inView>
          <div className="p-3 bg-secondary rounded-3xl flex-col justify-center items-center" key={index} >
           <Image src={option.icone} alt={option.name} 
           width={160} height={160} 
           className='h-[80px] w-[80px] hover:rotate-12 cursor-pointer transition-all'
           />
           <p className="mt-2">{option.name}</p>
          </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default FeatureAssistants;
