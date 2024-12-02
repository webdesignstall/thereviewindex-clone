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

const productData = [
  {
    product: "Laptop",
    channel: "Online Store",
    records: 150,
    averageReviewRating: 4.5,
    csat: "90%",
  },
  {
    product: "Smartphone",
    channel: "Retail Store",
    records: 200,
    averageReviewRating: 4.2,
    csat: "85%",
  },
  {
    product: "Headphones",
    channel: "Online Store",
    records: 120,
    averageReviewRating: 4.7,
    csat: "92%",
  },
  {
    product: "Tablet",
    channel: "Retail Store",
    records: 80,
    averageReviewRating: 4.3,
    csat: "88%",
  },
  {
    product: "Smartwatch",
    channel: "Online Store",
    records: 60,
    averageReviewRating: 4.8,
    csat: "95%",
  },
  {
    product: "Keyboard",
    channel: "Retail Store",
    records: 220,
    averageReviewRating: 4.4,
    csat: "89%",
  },
  {
    product: "Mouse",
    channel: "Online Store",
    records: 180,
    averageReviewRating: 4.6,
    csat: "91%",
  },
]

export function ProductTable() {
  return (
    <Table>
      <TableCaption>A list of products with their performance details.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Product</TableHead>
          <TableHead>Channel</TableHead>
          <TableHead>Records</TableHead>
          <TableHead>Avg Review Rating</TableHead>
          <TableHead>CSAT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productData.map((product) => (
          <TableRow key={product.product}>
            <TableCell className="font-medium">{product.product}</TableCell>
            <TableCell>{product.channel}</TableCell>
            <TableCell>{product.records}</TableCell>
            <TableCell>{product.averageReviewRating}</TableCell>
            <TableCell>{product.csat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total Records</TableCell>
          <TableCell>{productData.reduce((total, item) => total + item.records, 0)}</TableCell>
          <TableCell colSpan={2}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
