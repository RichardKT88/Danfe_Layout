import PageHeader from "../../components/pageHeader/PageHeader";
import UsersForm from "./EmployeeForm";
import GroupIcon from '@material-ui/icons/Group';
import { Paper, makeStyles, TableBody, TableRow, TableCell } from "@material-ui/core";
import useTable from "../../components/useTable";
import * as userService from "../../services/userService"
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),

    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department', disableSorting: true },
    // { id: 'actions', label: 'Actions',  }
]

const Employees = () => {

    const classes = useStyles();
    const [records, setRecords] = useState(userService.getAllEmployees());

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells);

    return (
        <>
            <PageHeader
                title="Usuários"
                subTitle="Formulário para cadastrar usuários"
                icon={<GroupIcon fontSize='large' />}
            />
            <Paper className={classes.pageContent}>
                <UsersForm />
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                            </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
        </>
    )
}

export default Employees;