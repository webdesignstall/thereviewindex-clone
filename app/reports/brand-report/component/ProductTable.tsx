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
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
    records: 150,
    averageReviewRating: 4.5,
    csat: "90%",
  },
  {
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
    records: 200,
    averageReviewRating: 4.2,
    csat: "85%",
  },
  {
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
    records: 120,
    averageReviewRating: 4.7,
    csat: "92%",
  },
  {
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
    records: 80,
    averageReviewRating: 4.3,
    csat: "88%",
  },
  {
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
    records: 60,
    averageReviewRating: 4.8,
    csat: "95%",
  },
  {
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
    records: 220,
    averageReviewRating: 4.4,
    csat: "89%",
  },
  {
    product: "Dell S3423DWC Curved USB-C Monitor",
    channel: "Amazon US",
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
        <TableRow className="bg-neutral-100 dark:bg-neutral-800 uppercase">
          <TableHead>Product</TableHead>
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
