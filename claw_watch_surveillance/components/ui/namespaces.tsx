import { Button } from "./button";
import { fetchDriverStandings } from "../../services/api"
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { fetchUploadedFiles, handleFileUpload,fetchBaseK8SData } from "@/services/api"
import { Badge } from "@/components/ui/badge"

export const Namespaces = () => {
    const [namespaces, setNamespaces] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [selectedValue, setSelectedValue] = useState(""); 
    const [kubeconfigInfo, setKubeconfigInfo] = useState<KubeconfigInfo | null>(null);
    interface KubeconfigInfo {
      nodesList: number;
      numberOfPods: number;
      numOfDep: number;
      clusterUptime: string;
    }
    useEffect(() => {
      fetchKubeconfigs();
    }, []);

    const fetchKubeconfigs = async () => {
      const data = await fetchUploadedFiles(); 
      setUploadedFiles(data);
    };

    const handleSelectKubeconfig = (value : any) => {
      setSelectedValue(value); 
      getBaseK8SData(value)
    };

    const getBaseK8SData = async (value : any) => {
      const data = await fetchBaseK8SData(value); 
      setKubeconfigInfo(data);

    };
  



  return (
    <div className="z-50 flex flex-col items-center">
<Select onValueChange={handleSelectKubeconfig}  >
  <SelectTrigger className="w-48 m-5 p-2 font-medium">
    <SelectValue placeholder="Select Kubeconfig"  />
  </SelectTrigger>
  <SelectContent id="kubeconfig-select">
  {uploadedFiles.map((filename, index) => (
            <SelectItem key={index} value={filename}>
              {filename}
            </SelectItem>
          ))}
  </SelectContent>
</Select>
{kubeconfigInfo && (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Uptime</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-width="2" className="h-4 w-4 text-muted-foreground" > <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path> </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{kubeconfigInfo.clusterUptime}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Nodes</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-width="2" className="h-4 w-4 text-muted-foreground" > <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path> </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{kubeconfigInfo.nodesList}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Deployments</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-width="2" className="h-4 w-4 text-muted-foreground" > <rect width="20" height="14" x="2" y="5" rx="2"></rect> <path d="M2 10h20"></path> </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{kubeconfigInfo.numOfDep}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Pods</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"  stroke-width="2" className="h-4 w-4 text-muted-foreground" > <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{kubeconfigInfo.numberOfPods}</div>
          </div>
        </div>
      </div>
  )}




    </div>
  );
};
