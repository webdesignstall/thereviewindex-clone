'use client';

import React from 'react';
import { Column } from '@ant-design/plots';

interface DataItem {
  year: number;
  order_amt: number;
  product_type: string;
  sex: string;
  product_sub_type: string;
}

const DemoColumn: React.FC = () => {
  // Your provided dataset
  const data: DataItem[] = [
    { year: 2005, order_amt: 0, product_type: 'Electronics', sex: 'Male', product_sub_type: 'Mobile' },
    { year: 2006, order_amt: 9, product_type: 'Electronics', sex: 'Female', product_sub_type: 'Laptop' },
    { year: 2007, order_amt: 4, product_type: 'Clothing', sex: 'Male', product_sub_type: 'Shirt' },
    { year: 2008, order_amt: 11, product_type: 'Furniture', sex: 'Female', product_sub_type: 'Chair' },
    { year: 2009, order_amt: 33, product_type: 'Groceries', sex: 'Male', product_sub_type: 'Fruits' },
    { year: 2010, order_amt: 38, product_type: 'Toys', sex: 'Female', product_sub_type: 'Sofa' },
    { year: 2011, order_amt: 54, product_type: 'Electronics', sex: 'Male', product_sub_type: 'Mobile' },
    { year: 2012, order_amt: 366, product_type: 'Clothing', sex: 'Female', product_sub_type: 'Shirt' },
    { year: 2013, order_amt: 1085, product_type: 'Furniture', sex: 'Male', product_sub_type: 'Chair' },
    { year: 2014, order_amt: 1664, product_type: 'Groceries', sex: 'Female', product_sub_type: 'Vegetables' },
    { year: 2015, order_amt: 2706, product_type: 'Toys', sex: 'Male', product_sub_type: 'Sofa' },
    { year: 2016, order_amt: 2701, product_type: 'Electronics', sex: 'Female', product_sub_type: 'Laptop' },
    { year: 2017, order_amt: 2016, product_type: 'Clothing', sex: 'Male', product_sub_type: 'Pants' },
    { year: 2018, order_amt: 1702, product_type: 'Furniture', sex: 'Female', product_sub_type: 'Chair' },
    { year: 2019, order_amt: 2212, product_type: 'Groceries', sex: 'Male', product_sub_type: 'Fruits' },
    { year: 2020, order_amt: 2273, product_type: 'Toys', sex: 'Female', product_sub_type: 'Sofa' },
    { year: 2021, order_amt: 1793, product_type: 'Electronics', sex: 'Male', product_sub_type: 'Mobile' },
    { year: 2022, order_amt: 1043, product_type: 'Clothing', sex: 'Female', product_sub_type: 'Shirt' },
    { year: 2023, order_amt: 1037, product_type: 'Furniture', sex: 'Male', product_sub_type: 'Chair' },
    { year: 2024, order_amt: 983, product_type: 'Groceries', sex: 'Female', product_sub_type: 'Vegetables' },
  ];

  // Chart configuration
  const config = {
    data,
    xField: 'year', // Use 'year' for the x-axis
    yField: 'order_amt', // Use 'order_amt' for the y-axis
    seriesField: 'product_type', // Stack by 'product_type'
    isStack: true, // Enable stacking
    colorField: 'product_sub_type', // Color the bars by 'product_sub_type'
    tooltip: {
      customContent: (title: string, items: any[]) => {
        return (
          <div>
            <h4>{title}</h4>
            {items.map((item, index) => (
              <div
                key={index}
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}
              >
                <span style={{ color: item.color }}>{item.name}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        );
      },
    },
  };

  return <Column {...config} />;
};

export default DemoColumn;
