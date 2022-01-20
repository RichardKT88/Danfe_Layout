import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import GroupIcon from '@material-ui/icons/Group';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from "@material-ui/core";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService"
import { useState } from "react";
import Input from "../../components/controls/Input";
import { Search } from "@material-ui/icons";
import Button from "../../components/controls/Button";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/PopUp";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import ActionButton from "../../components/controls/ActionButton";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),

    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'city', label: 'City' },
    { id: 'department', label: 'Department' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

const Employees = () => {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
        // setNotify({
        //     isOpen: true,
        //     message: 'Submitted Successfully',
        //     type: 'success'
        // })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
            <PageHeader
                title="Usuários"
                subTitle="Formulário para cadastrar usuários"
                icon={<GroupIcon fontSize='large' />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <Input
                        className={classes.searchInput}
                        label="Search Employee"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>
                                    <ActionButton
                                        color="primary"
                                        onClick={() => { openInPopup(item) }}
                                    >
                                        <EditOutlinedIcon fontSize="small" />
                                    </ActionButton>
                                    <ActionButton
                                        color="secondary"
                                    // onClick={() => {
                                    //     setConfirmDialog({
                                    //         isOpen: true,
                                    //         title: 'Are you sure to delete this record?',
                                    //         subTitle: "You can't undo this operation",
                                    //         onConfirm: () => { onDelete(item.id) }
                                    //     })
                                    // }}
                                    >
                                        <CloseIcon fontSize="small" />
                                    </ActionButton>
                                </TableCell>
                            </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}>
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
        </>
    )
}

export default Employees;