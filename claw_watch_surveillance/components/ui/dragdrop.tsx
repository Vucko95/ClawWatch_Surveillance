export const Dragdrop = () => {
  return (
    <div className="z-50 h-[200px] m-5 flex flex-col items-center justify-center">
      <div className="flex h-[200px] shrink-0 items-center justify-center rounded-md border border-dashed">
        <div className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-10 w-10 text-muted-foreground" viewBox="0 0 24 24" > <circle cx="12" cy="11" r="1"></circle> <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0"></path> <path d="M17 18.5a9 9 0 1 0-10 0"></path> </svg>
          <h3 className="mt-4 text-lg font-semibold">No KubeConfigs added</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            You have not added any podcasts. Add one below.
          </p>
          <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r5om:" data-state="closed" >
            <button className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs relative">
                  Select Kubeconfig
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};
