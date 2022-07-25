import React from 'react';
import {Table} from 'flowbite-react'
// import Table from 'flowbite/plugin.js'

interface Data {
    product: string;
    colour: string;
    category: string
    price: number
};

interface Props {
    props: Data[];
}

const FormTable: React.FC<Props> = ({props}: Props) => {

    return (
        <Table hoverable={true}>
            <Table.Head>
                <Table.HeadCell>
                    Product name
                </Table.HeadCell>
                <Table.HeadCell>
                    Color
                </Table.HeadCell>
                <Table.HeadCell>
                    Category
                </Table.HeadCell>
                <Table.HeadCell>
                    Price
            </Table.HeadCell>
            <Table.HeadCell>
                <span className="sr-only">
                    Edit
                </span>
            </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Macbook
                </Table.Cell>
                <Table.Cell>
                    Sliver
                </Table.Cell>
                <Table.Cell>
                    Laptop
                </Table.Cell>
                <Table.Cell>
                    $2999
                </Table.Cell>
                <Table.Cell>
                    <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                    Edit
                    </a>
                </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default FormTable;