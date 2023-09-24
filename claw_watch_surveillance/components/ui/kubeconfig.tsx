import { Switch } from "@/components/ui/switch"
import { Button } from "./button";
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export const KubeConfigs = () => {
  return (
    <div className="z-50 h-[200px]  m-5 flex gap-10 items-center justify-center">

      <div className="flex h-[200px] w-[30%] shrink-0 items-center justify-center rounded-xl border ">
        <div className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center">
            <button className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs relative">
                  Upload File
            </button>
          <h3 className="mt-4 text-lg font-semibold">Select a Kubeconfig template</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            Please make sure its a valid config file.
          </p>

        </div>
      </div>

      <div className="flex flex-col h-[200px] w-[30%]  items-center p-2 rounded-xl  border">
        <div className="p-2 flex justify-center items-center flex-col">
     <h1 className="p-2">List of Kube Configs</h1>

     <Select>
  <SelectTrigger className="w-48 mb-5">
    <SelectValue placeholder="Select Kubeconfig"  />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="namespace1">namespace1</SelectItem>
    <SelectItem value="namespace2">namespace2</SelectItem>
    <SelectItem value="namespace3">namespace3</SelectItem>
  </SelectContent>
</Select>
      <div className="gap-2 ">
     <Badge variant="outline">sandbox.yml</Badge>
     <Badge variant="outline">development.yml`1</Badge>
      </div>

     </div>
    </div>
     

    </div>
  );
};
