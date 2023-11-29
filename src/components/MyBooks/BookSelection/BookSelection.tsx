import {Autocomplete, View} from "@aws-amplify/ui-react";
import React from "react";
import {CompactTable} from "@table-library/react-table-library/compact";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';
import {UserBooks} from "../../../types/API";
import {useLoaderData, useNavigate} from "react-router-dom";

export default function BookSelection(): React.ReactElement | null {

    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);
    const navigate = useNavigate()
    let userBooks: UserBooks[] = useLoaderData() as UserBooks[]
    const data: { nodes: Array<UserBooks> } = {nodes: userBooks}

    const select = useRowSelect(data, {
        onChange: onSelectChange,
    });

    function onSelectChange(action: any, state: any) {
        if (state.id === null)
            return
        navigate(`${state.id}`, {relative: "path"})
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: UserBooks) => book.title, resize: true},
        {label: 'Word Count', renderCell: (book: UserBooks) => book.wordCount, resize: true},
        {label: 'Start Date', renderCell: (book: UserBooks) => book.dateStarted},
        {label: 'End Date', renderCell: (book: UserBooks) => book.dateFinished},
    ];

    return (
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

    )

}