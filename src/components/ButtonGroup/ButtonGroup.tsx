import React from 'react';
import { Button } from '../../shadcn/ui/button';
import '../../global.css';

interface ButtonProps {
    labels: string[];
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined

}

const ButtonGroup = ({ labels, variant }: Readonly<ButtonProps>) => {

  return (
    <div className="flex flex-row space-x-10 items-center justify-around m-auto w-1/2 p-3 border-8 border-black">
      {labels.map((label: string, i: number) => (
        <Button variant={variant} key={label}>{label}</Button>
      ))}
    </div>
  );
};

export default ButtonGroup;