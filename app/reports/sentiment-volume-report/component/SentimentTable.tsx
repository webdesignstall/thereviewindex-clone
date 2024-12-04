"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample JSON data
const data: Product[] = [
  {
    name: "Dell S3221QS 32 Inch Curved 4K UHD (3840 x 2160), VA Ultra-Thin Bezel Monitor, 60Hz, 4MS Response Time, 90% DCI-P3, 99% sRGB, AMD FreeSync, HDMI, DisplayPort, Built in Speakers, VESA Certified, Silver",
    size: "27 inch",
    resolution: "4K UHD (3840 x 2160)",
    features: [
      "USB-C",
      "60Hz Refresh Rate",
      "8MS Grey-to-Grey Response Time",
      "Built-in Dual 3W Speakers",
      "1.07 Billion Colors",
    ],
    color: "Platinum Silver",
    channel: "Amazon US",
    reviews: 457,
    average_rating: 3.6,
    CSAT: 63.7,
  },
  {
    name: "Dell S3221QS 32 Inch Curved 4K UHD (3840 x 2160), VA Ultra-Thin Bezel Monitor, 60Hz, 4MS Response Time, 90% DCI-P3, 99% sRGB, AMD FreeSync, HDMI, DisplayPort, Built in Speakers, VESA Certified, Silver",
    size: "27 Inch",
    resolution: "4K UHD (3840 x 2160)",
    features: [
      "IPS Display",
      "Ultra-Thin Bezel",
      "AMD FreeSync",
      "HDMI",
      "DisplayPort",
      "VESA Certified",
    ],
    color: "Silver",
    channel: "Amazon US",
    reviews: 413,
    average_rating: 3.8,
    CSAT: 66.8,
  },
  // Add other monitors here...
];

export type Product = {
  name: string;
  size?: string;
  resolution: string;
  features: string[];
  color: string;
  channel: string;
  reviews: number;
  average_rating: number;
  CSAT: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Brands",
    cell: ({ row }) => <div className="font-medium w-96">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "channel",
    header: "Channel",
  },
  {
    accessorKey: "average_rating",
    header: "Average Rating",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("average_rating")} ★</div>
    ),
  },
  {
    accessorKey: "CSAT",
    header: "CSAT",
    cell: ({ row }) => <div>{row.getValue("CSAT")} %</div>,
  },
];

export function ProductTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter products..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
