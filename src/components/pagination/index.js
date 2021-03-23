import React from 'react'

import './styles.css'

const Pagination = ({gotoNextPage, gotoPrevPage}) => {
    return (
        <div className="container">
            <div className="center">
            {gotoPrevPage && <button onClick={gotoPrevPage}><img src="https://fontmeme.com/permalink/210201/f1ae6f0ea814851b8b0f8c4d167eb0dc.png" alt="Botão para página anterior" width="70%"></img></button>}
            {gotoNextPage && <button onClick={gotoNextPage}><img src="https://fontmeme.com/permalink/210201/3368484e2192641404b8f23668e1ed43.png" alt="Botão para próxima página" width="70%"></img></button>}
            </div>
        </div>
    )
}

export default Pagination