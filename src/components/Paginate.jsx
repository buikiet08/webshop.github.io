import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCurrentPage } from '../hooks/useCurrentPage'

function Paginate({totalPage}) {
    // mặc định page = 1
    
    const {pathname} = useLocation()
    const currentPage = useCurrentPage()

    const renderPage = () => {
        let start = currentPage - 2
        let end = currentPage + 2


        if(start < 1) {
            start = 1
            end = 5
        }

        
        if(end > totalPage) {
            end = totalPage
            start = end - 4
            if(start < 1) start = 1
        }

        const list = []
        for (let i = start; i <= end; i++) {
            let path = `${pathname}?page=${i}`
            list.push(
            (
                <li className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <Link className="page-link" to={path}>{i}</Link>
                </li>
            )
            )
        }
        return list
    }
    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                <li className="page-item">
                    <a className="page-link page-link-arrow" href="#">
                        <i className="fa fa-caret-left" />
                    </a>
                </li>
                {renderPage()}
                <li className="page-item">
                    <a className="page-link page-link-arrow" href="#">
                        <i className="fa fa-caret-right" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginate