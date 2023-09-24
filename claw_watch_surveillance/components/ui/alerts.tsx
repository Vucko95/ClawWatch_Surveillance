import { Button } from "./button";

export const Alerts = () => {
  
  

     
  return (
    <div className="w-2/3 ml-[15%] flex flex-col items-center justify-center border m-10 rounded-xl ">
      <h1 className="mt-5">Add Alerts</h1>
      <div className="flex justify-center items-center gap-10 m-8">
      <Button  variant="outline"  className="w-48 ">Slack</Button>
      <Button  variant="outline"  className="w-48 ">Teams</Button>
      </div>

    </div>
  );
};
