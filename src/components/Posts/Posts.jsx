import React from 'react'
import "../Posts/posts.css"
import ReactPaginate from 'react-paginate';
import Post from "../Post/Post"
import { useState } from 'react';
import { useEffect } from 'react';
export default function Posts(props) {
  const posts=props.posts
  const searchTerm=props.searchTerm
  const [currentItems, setCurrentItems]=useState([]);
  const [pageCount, setPageCount]=useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=9;
  
  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
    console.log(searchTerm)
    }, [itemOffset, itemsPerPage, posts, searchTerm]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="posts" >
          {
            (currentItems.filter((val)=>{
              if(searchTerm==""){
                return val
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            })).map(p=>(
              <Post key={currentItems.id} post={p}/>
            ))
          }
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
  }