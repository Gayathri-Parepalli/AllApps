import {render ,fireEvent} from "@testing-library/react";
import TableData from "./components1/TableData";
import * as redux from "react-redux";

beforeEach(()=>{
	const spyonUseSelector=jest.spyOn(redux,'useSelector');
	spyonUseSelector.mockReturnValue([{title:"hello"}]);
	const spyOnUseDispatch=jest.spyOn(redux,'useDispatch');
	const mockUseDispatch=jest.fn()
	spyOnUseDispatch.mockReturnValue(mockUseDispatch)
})
afterEach(()=>{
	jest.restoreAllMocks();
})
const renderApp=()=>render(<TableData/>);

test('test to check placeholder of serach field',()=>{
 const {getByTestId}=renderApp();
 expect(getByTestId("search")).toHaveTextContent("search title or created_at")
})
test('test to check childNodes of row1',()=>{
 const {queryByTestId}=renderApp();
 const result:any=queryByTestId("row1")
 expect(result.childNodes).toHaveLength(5)
  expect(result.childNodes[0]).toHaveTextContent("Page No");
   expect(result.childNodes[1]).toHaveTextContent("title")
    expect(result.childNodes[2]).toHaveTextContent("url")
     expect(result.childNodes[3]).toHaveTextContent("created_at")
      expect(result.childNodes[4]).toHaveTextContent("author")
})
test('test to check childNodes of row2',()=>{
 const {queryByTestId}=renderApp();
 const result:any=queryByTestId("row2")
 expect(result.childNodes).toHaveLength(5)
 expect(result.childNodes[0]).toHaveTextContent("1");
   expect(result.childNodes[1]).toHaveTextContent("hello")
    expect(result.childNodes[2]).toHaveTextContent("")
     expect(result.childNodes[3]).toHaveTextContent("")
      expect(result.childNodes[4]).toHaveTextContent("")
})
test('test to check placeholder of serach field',()=>{
 const {getByTestId}=renderApp();
 const row:any=(getByTestId("row2"))
 fireEvent.click(row)
 expect(getByTestId("row")).toHaveTextContent(JSON.stringify([{title:"hello"}]))
  })