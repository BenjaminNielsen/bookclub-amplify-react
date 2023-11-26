import {Autocomplete, Heading, View} from "@aws-amplify/ui-react";
import React, {useState} from "react";
import {CompactTable} from "@table-library/react-table-library/compact";
import EditUserBookDetails from "./EditUserBookDetails/EditUserBookDetails";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';
import Ratings from "./Ratings/Ratings";
import {UserBooks} from "../../types/API";
import {Outlet, redirect, Route, Routes, useLoaderData, useNavigate} from "react-router-dom";


export default function MyBooks(): React.ReactElement | null {

    const [selectedBook, setSelectedBook] = useState<UserBooks | null>(null)
    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);
    const navigate = useNavigate()
    let userBooks:UserBooks[] = useLoaderData() as UserBooks[]
    const data: { nodes: Array<UserBooks> } = {nodes: userBooks}

    const select = useRowSelect(data, {
        onChange: onSelectChange,
    });

    function onSelectChange(action: any, state: any) {
        if (state.id === null)
            return
        setSelectedBook(userBooks.find((book) => book.id === state.id) ?? null)
        navigate(`edit/${state.id}`,{relative:"path"})
    }

    async function onDeleteClick() {
        //callUpdateBooks()
        setSelectedBook(null)
    }

    async function onUpdateClick() {
        //callUpdateBooks()
        setSelectedBook(null)
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: UserBooks) => book.title, resize: true},
        {label: 'Word Count', renderCell: (book: UserBooks) => book.wordCount, resize: true},
        {label: 'Start Date', renderCell: (book: UserBooks) => book.dateStarted},
        {label: 'End Date', renderCell: (book: UserBooks) => book.dateFinished},
    ];

    return (
        <div>
            <Heading level={2}>My Books</Heading>
            {!selectedBook &&
           <View>
                <Autocomplete
                    label="Autocomplete Search"
                    options={userBooks.map((book) => {
                        return {"id": book.id, "label": book.title ?? ""}
                    })}
                    placeholder="Search Titles"
                    variation="quiet"
                />
                <CompactTable theme={theme} columns={COLUMNS} data={data} select={select}/>
            </View>
            }
            <Outlet/>
        </div>
    )

}