import { Button } from "./button";
import { fetchDriverStandings } from "../../services/api"
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react";

export const Pods = () => {
    const [namespaces, setNamespaces] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const namespacesData = await fetchDriverStandings();
          setNamespaces(namespacesData);
          console.log(namespacesData)
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []); 
  
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
    <div className="w-2/3 ml-[15%] flex flex-col items-center justify-center border rounded-xl ">
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
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className=" text-left flex items-center justify-center"> 
                <Checkbox />

              </TableCell>
            <TableCell >
              {invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell >{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>


    </div>
  );
};
