import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CsatChart } from "./component/CsatChart"
import { LineChartYear } from "./component/LineChart"
import { RatingChart } from "./component/RatingChart"
import StraightLineChart from "./component/1080"
import { BarChartComponent } from "./component/BarChart"
import CreateModel from "./component/CreateModel"


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
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function Compare() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-neutral-800">
          <TableHead></TableHead>
          <TableHead>Dell (Brand)-Amazon</TableHead>
          <TableHead>
            <CreateModel />
          </TableHead>
          <TableHead>
            <CreateModel />
          </TableHead>
          <TableHead>
            <CreateModel />
          </TableHead>
          <TableHead>
            <CreateModel />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>RECORS</TableCell>
          <TableCell>33711</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CSAT RATOMG</TableCell>
          <TableCell>78.1</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>MARKETPLACE STAR RATING</TableCell>
          <TableCell>4.2</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>RECORDS TREND</TableCell>
          <TableCell colSpan={5}>
            <LineChartYear />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>TOPIC VALUME</TableCell>
          <TableCell colSpan={5}>
            <BarChartComponent />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CSAT TREND</TableCell>
          <TableCell colSpan={5}>
            <CsatChart />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>STAR RATING TREND</TableCell>
          <TableCell colSpan={5}>
            <RatingChart />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1080</TableCell>
          <TableCell>
            <div className="w-full h-1 flex">
              <div className="w-[82%] h-full bg-red-500 pt-2 text-center">82%</div>
              <div className="w-[18%] h-full bg-green-500 pt-2 text-center">18% </div>
            </div>
            <div className="grid grid-cols-3 pt-8 gap-1">
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">MENTIONS </div>
                <div className="text-lg font-semibold">21 </div>
              </div>
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">CSAT</div>
                <div className="text-lg font-semibold">71</div>
              </div>
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">AVG. RATING</div>
                <div className="text-lg font-semibold">4</div>
              </div>
              <div className="border p-2 h-20 col-span-3">
                <div className="text-gray-200">IPACT SCORE</div>
                <div>-</div>
              </div>
            </div>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>        <TableRow>
          <TableCell>2160</TableCell>
          <TableCell>
            <div className="w-full h-1 flex">
              <div className="w-[60%] h-full bg-red-500 pt-2 text-center">60%</div>
              <div className="w-[40%] h-full bg-green-500 pt-2 text-center">40% </div>
            </div>
            <div className="grid grid-cols-3 pt-8 gap-1">
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">MENTIONS </div>
                <div className="text-lg font-semibold">30 </div>
              </div>
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">CSAT</div>
                <div className="text-lg font-semibold">80</div>
              </div>
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">AVG. RATING</div>
                <div className="text-lg font-semibold">4.2</div>
              </div>
              <div className="border p-2 h-20 col-span-3">
                <div className="text-gray-200">IPACT SCORE</div>
                <div>-</div>
              </div>
            </div>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>        <TableRow>
          <TableCell>CLARITY</TableCell>
          <TableCell>
            <div className="w-full h-1 flex">
              <div className="w-[89%] h-full bg-red-500 pt-2 text-center">89%</div>
              <div className="w-[11%] h-full bg-green-500 pt-2 text-center">11% </div>
            </div>
            <div className="grid grid-cols-3 pt-8 gap-1">
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">MENTIONS </div>
                <div className="text-lg font-semibold">17922 </div>
              </div>
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">CSAT</div>
                <div className="text-lg font-semibold">81</div>
              </div>
              <div className="border p-2 h-20">
                <div className="text-gray-200 pb-2">AVG. RATING</div>
                <div className="text-lg font-semibold">4.3</div>
              </div>
              <div className="border p-2 h-20 col-span-3">
                <div className="text-gray-200">IPACT SCORE</div>
                <div className="text-lg font-semibold">0.3</div>
              </div>
            </div>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
