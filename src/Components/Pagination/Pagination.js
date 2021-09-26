import React from 'react';
import s from './Pagination.module.css'

const Pagination = ({setCurrentPage, totalCountProducts, currentPage}) => {

    let pageCount = Math.ceil(totalCountProducts / 4);
    let pages = [];
    for(let i = 1; i <= pageCount; i++ ) {
        pages.push(i);
    }

    return (
        <div className={s.paginate}>
            <ul>
                {pages.map( (page, index) => <li
                        className={currentPage === page ? s.active : '' }
                        key={index}
                        onClick={() => setCurrentPage(page)}>
                    {page}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;