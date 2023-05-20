import React, { useRef } from 'react';

import { Pagination } from 'antd';
import { State } from '../../store/books/books.types';
import { useDispatch } from 'react-redux';
import { increaseOffset } from '../../store/books/books.reducer';
const DEFAULT_PAGE_SIZE = 12
const Paginations: React.FC<State> = ({card}) => {
    
    const dispatch = useDispatch();
    const set = dispatch(increaseOffset());

    return (
      <Pagination
        defaultCurrent={1}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        total={card.length}
        onChange={() => console.log()}
      />
    );
}




export default Paginations;