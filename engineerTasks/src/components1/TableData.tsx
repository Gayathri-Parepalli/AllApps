import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchData,rowData} from '../redux/actions/AppActions';
import {RootState} from "../redux/reducer/Index";
import {TableContainer,Table,TableHead,TableBody,TableCell,
	TableRow,TextField,Stack,Pagination,Modal,Box,Paper,Typography}  from "@mui/material";
const style={
	position:'absolute' as 'absolute',
	top:"50%",
	left:"50%",
	transform:'translate(-50%,-50%)',
	bgcolor:'background.paper',
	border:"2px solid #000",
	width:"95%",
	p:4,
	boxShadow:24

}
const TableData=()=>{
	const hits:any=useSelector((state:RootState)=>state.hits);
	const row=useSelector((state:RootState)=>state.row);
	const [page,setPage]=useState(0);
	const [pageNo,setPageNo]=useState(1);
	const [search,setSearch]=useState("");
	const [open,setOpen]=useState(false);
	const dispatch=useDispatch();
	useEffect(()=>{
		setTimeout(()=>{
			dispatch(fetchData(page));
			setPage(page+1);
		},10000)
	},[page])
	const handleOpen=(row:any)=>{
		setOpen(true);
		dispatch(rowData(row))
	}
	const handleClose=()=>setOpen(false)
	const rowsPerPage=20;
	const data=hits.slice((pageNo-1)*rowsPerPage,pageNo*rowsPerPage);
   const handleChange=(e:any,value:number)=>{
   	setPageNo(value);
   }
	return (
     <>
     <TextField value={search} label="search title or created_at"
     onChange={(e:any)=>setSearch(e.target.value)} data-testid="search"/>
     <TableContainer component={Paper}>
     <Table>
     <TableHead>
     <TableRow data-testid="row1">
     <TableCell>Page No</TableCell>
      <TableCell>title</TableCell>
       <TableCell>url</TableCell>
        <TableCell>created_at</TableCell>
         <TableCell>author</TableCell>
     </TableRow>
     </TableHead>
     <TableBody>
     {data.filter((val:any)=>{
     	if(search===""){
     		return val
     	}else if(val.title.toUpperCase().includes(search.toUpperCase())||
     		val.created_at.toUpperCase().includes(search.toUpperCase())){
     		return val
     	}
     })
     	.map((row:any)=>
     <TableRow
     onClick={()=>handleOpen(row)}
     key={row.title}
     data-testid="row2"
     >
     <TableCell>{pageNo}</TableCell>
      <TableCell>{row.title}</TableCell>
       <TableCell>{row.url}</TableCell>
        <TableCell>{row.created_at}</TableCell>
         <TableCell>{row.author}</TableCell>
     </TableRow>
     )}
     </TableBody>
     </Table>
     </TableContainer>
     <Modal
     open={open}
     onClose={handleClose}
     >
     <Box sx={style}>
     <Typography data-testid="row">{JSON.stringify(row)}</Typography>
     </Box>
     </Modal>

     {hits.length?
     <Stack spacing={2}>
     <Pagination page={pageNo} count={page} onChange={handleChange}/>
     </Stack>:null}
     </>
		)
}
export default TableData;