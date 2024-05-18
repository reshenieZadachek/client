import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../..'


const  Pages = observer(() => {

    const {rewiews} = useContext(Context)
    const pageCount = Math.ceil(rewiews.totalCount / rewiews.limit)
    const pages = []
    let activeSt ={
        color: '#f6a617',
        border: '1px solid #f6a617',
    }
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }  
  return ( 
    <Pagination>
        {pages.map(page =>
                <PaginationEl
                    key={page}
                    style={rewiews.page === page ? activeSt : {}}
                    onClick={() => rewiews.setPage(page)}
                >
                    {page}
                </PaginationEl>
            )}
    </Pagination>
  )
})

const Pagination = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    margin: 10px 10px 0 10px;
    max-height: 60px;
    cursor:pointer;
    align-self:center;
`
//background: #f6a617;
const PaginationEl = styled.div`
    min-height: 20px;
    padding: 5px;
    min-width: 20px;
    margin: 5px;
    display: flex;
    border: 1px solid grey;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`
export default Pages; 
