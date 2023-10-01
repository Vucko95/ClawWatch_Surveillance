import { Button } from "./button";
import { fetchDriverStandings } from "../../services/api"
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react";
import { fetchK8sNamespaces, fetchPodsforNamespace,fetchBaseK8SData } from "@/services/api"

export const Pods = () => {
    const [namespaces, setNamespaces] = useState([]);
    const [pods, setPods] = useState([]);
    const harcoded_kubeconfig = "Devel.yaml"
    useEffect(() => {
      getNamespaces(harcoded_kubeconfig);
    }, []);
  

    const getNamespaces = async (value : any) => {
      const data = await fetchK8sNamespaces(value); 
      setNamespaces(data);
    };
    const handleSelectnamespace = async (namespace : any) => {
      const data = await fetchPodsforNamespace(namespace,harcoded_kubeconfig)
      setPods(data);
    }
    const invoices = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
      },
    ]

     
  return (
    <div className="   flex flex-col items-center justify-center  ">

<Select onValueChange={handleSelectnamespace}>
  <SelectTrigger className="w-48 mt-10 mb-5">
    <SelectValue placeholder="Select Namespace"  />
  </SelectTrigger>
  <SelectContent>
  {namespaces.map((filename, index) => (
            <SelectItem key={index} value={filename}>
              {filename}
            </SelectItem>
          ))}
  </SelectContent>
</Select>
   
    <div className="w-2/3  flex flex-col items-center justify-center border rounded-xl ">
      
    <Table className="text-center" >
      <TableHeader >
        <TableRow>
          <TableHead className="text-center">Select</TableHead>
          <TableHead className="text-center">Pod Name</TableHead>
          <TableHead className="text-center">Namespace</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {pods.map((pod) => (
              <TableRow key={pod['Pod Name']}>
                <TableCell className="text-center">
                  <Checkbox />
                </TableCell>
                <TableCell>{pod['Pod Name']}</TableCell>
                <TableCell>{pod['Namespace']}</TableCell>
                <TableCell>{pod['Pod Phase']}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>


    </div>
    </div>
  );
};
