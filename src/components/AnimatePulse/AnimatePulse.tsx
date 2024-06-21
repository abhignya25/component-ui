import React from "react";

const AnimatePulse = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 rounded-lg p-auto">
      <div className="bg-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex flex-row space-x-8">
          <div className="rounded-full bg-slate-300 h-10 w-10"></div>
          <div className="flex flex-col space-y-8">
            <div className="rounded-lg bg-slate-300 h-4 w-64"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-slate-300 rounded-lg col-span-2"></div>
                <div className="h-4 bg-slate-300 rounded-lg col-span-1"></div>
              </div>
              <div className="rounded-lg bg-slate-300 h-4 w-64"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatePulse;