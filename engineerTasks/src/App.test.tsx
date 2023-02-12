import React from 'react';
import { render as newRender,fireEvent } from '@testing-library/react';
import TableData from "./components/TableData";
import * as redux from "react-redux";


beforeEach(()=>{
	const spyonUseSelector=jest.spyOn(redux,'useSelector');
	spyonUseSelector.mockReturnValue([{title:"hello"}]);
	const spyOnUseDispatch=jest.spyOn(redux,'useDispatch');
	const mockUseDispatch=jest.fn();
	spyOnUseDispatch.mockReturnValue(mockUseDispatch)
})
afterEach(()=>{
	jest.restoreAllMocks()
})
const renderApp=()=>newRender(<TableData/>);

test('test to check search field', () => {
	const {getByTestId}=renderApp();
	expect(getByTestId("search")).toHaveTextContent("search by title or created_at")
  
  
});
test('test to check search field', () => {
	const {getByTestId}=renderApp();
	expect(getByTestId("search")).toHaveTextContent("search by title or created_at")
  
  
});
test('test to check search field', () => {
	const {queryByTestId}=renderApp();
	const result:any=queryByTestId("row1")
	expect(result.childNodes).toHaveLength(5)
    expect(result.childNodes[0]).toHaveTextContent("Page No");
    expect(result.childNodes[1]).toHaveTextContent("title");
  expect(result.childNodes[2]).toHaveTextContent("url");
  expect(result.childNodes[3]).toHaveTextContent("created_at");
  expect(result.childNodes[4]).toHaveTextContent("author");
});
test('test to check search field', () => {
	const {queryByTestId}=renderApp();
	const result:any=queryByTestId("row2")
	expect(result.childNodes).toHaveLength(5)
	  expect(result.childNodes[0]).toHaveTextContent("1");
    expect(result.childNodes[1]).toHaveTextContent("hello");
  expect(result.childNodes[2]).toHaveTextContent("");
  expect(result.childNodes[3]).toHaveTextContent("");
  expect(result.childNodes[4]).toHaveTextContent("");
  
  
});
test('test to check data of modal', () => {
	const {getByTestId}=renderApp();
	const row:any=getByTestId("row2");
	fireEvent.click(row)
	expect(getByTestId("row")).toHaveTextContent(JSON.stringify([{title:"hello"}]))
  
  
});