import React from 'react';
import {Table} from 'flowbite-react'

interface Data {
    dataset: string;
    id: number;
    home_price: string;
    price_meter: number;
};

interface Props {
    props: Data[];
}

const FormTable: React.FC<Props> = ({props}: Props) => {

    return (
        <Table hoverable={true}>
            <Table.Head className="text-left-1">
                <Table.HeadCell>
                    Dataset
                </Table.HeadCell>
                <Table.HeadCell>
                    ID
                </Table.HeadCell>
                <Table.HeadCell>
                    Home Price
                </Table.HeadCell>
                <Table.HeadCell>
                    Price/Meter
                </Table.HeadCell>
            <Table.HeadCell>
                <span className="sr-only">
                    Edit
                </span>
            </Table.HeadCell>
            </Table.Head>
            {props?.map((prop: Data) => {
                        return (
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {prop.dataset}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {prop.id}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {prop.home_price}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {prop.price_meter}
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
                        )})}
        </Table>
    )
}

export default FormTable;