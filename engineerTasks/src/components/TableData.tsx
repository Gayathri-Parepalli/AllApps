import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchData,rowData} from "../redux/actions/AppActions";
import {RootState} from '../redux/reducer/Index';
import {Table,TableContainer,TableRow,TableCell,Paper,
	TextField,TableHead,TableBody,Pagination,Stack,Modal,Box,Typography
}
from "@mui/material";
const style={
	position:'absolute' as 'absolute',
	top:"50%",
	left:"50%",
	transform:'translate(-50%,-50%)',
	width:"95%",
	 bgcolor: 'background.paper',
   border: '2px solid #000',
    boxShadow: 24,
    p: 4,

}

const TableData=()=>{
	const hits:any=useSelector((state:RootState)=>state.hits);
	const row=useSelector((state:RootState)=>state.row);
	const [page,setPage]=useState(0);
	const [pageNo,setPageNo]=useState(1);
	const [search,setSearch]=useState("");
	const [open,setOpen]=useState(false);
    const handleOpen=(row:any)=>{
    	setOpen(true);
        dispatch(rowData(row))
    }
    const handleClose=()=>setOpen(false);
	const rowsPerpage=20;
	const dispatch=useDispatch();
	useEffect(()=>{
		setTimeout(()=>{
			dispatch(fetchData(page));
			setPage(page+1);
		},10000)
	},[page])
	const data=hits.slice((pageNo-1)*rowsPerpage,pageNo*rowsPerpage);
   const handleChange=(e:any,value:number)=>{
   	setPageNo(value);
   }
	return (
     <>
<TextField label="search by title or created_at" value={search}
onChange={(e:any)=>setSearch(e.target.value)} data-testid="search"/>
     <TableContainer component={Paper}>
     <Table style={{minWidth:350}}>
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
		return val;
	}else if(val.title.toUpperCase().includes(search.toUpperCase())||
		val.created_at.toUpperCase().includes(search.toUpperCase())){
		return val
	}
})
	.map((val:any)=>
	<TableRow
	data-testid="row2"
	onClick={()=>handleOpen(val)}
	key={val.title}
	>
<TableCell>{pageNo}</TableCell>
<TableCell>{val.title}</TableCell>
<TableCell>{val.url}</TableCell>
<TableCell>{val.created_at}</TableCell>
<TableCell>{val.author}</TableCell>
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
      <Typography  data-testid="row">
      {JSON.stringify(row)}
      </Typography>
      </Box>
     </Modal>
     <Stack spacing={2}>
     <Pagination page={pageNo} count={page} onChange={handleChange} color="secondary"/>
     </Stack>
     </>
		)
}
export default TableData;