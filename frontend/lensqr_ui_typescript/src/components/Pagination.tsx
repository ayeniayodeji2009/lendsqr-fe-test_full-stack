import React from "react";
import "./style/style_components.scss";

interface PaginationProps {
  total: number;
  page: number;
  size: number;
  onPageChange: (newPage: number) => void;
  onSizeChange: (newSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, page, size, onPageChange, onSizeChange }) => {
  const totalPages = Math.ceil(total / size);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const getPageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...', totalPages);
      } else if (page > totalPages - 3) {
        pageNumbers.push(1, '...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1, '...');
        for (let i = page - 1; i <= page + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination_container">
      <div className="pagination_container_left">
        <span>{`showing `}</span>
        <select value={size} onChange={(e) => onSizeChange(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span>{` out of ${total}`}</span>
      </div>

      <div className="pagination_container_right">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="pagination_button"
        >
          {"<"}
        </button>
        {pageNumbers.map((p, index) =>
          typeof p === "number" ? (
            <button
              key={index}
              onClick={() => handlePageChange(p)}
              disabled={p === page}
              className="pagination_button_middle"
              id={p === page ? "pagination_button_middle_active" : ""}
            >
              {p}
            </button>
          ) : (
            <span key={index} style={{ margin: "0 5px" }}>{p}</span>
          )
        )}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="pagination_button"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;


































































































// import "./style/style_components.scss"




// export default function Pagination({ total, page, size, onPageChange, onSizeChange }) {
//     const totalPages = Math.ceil(total / size);

//     const handlePageChange = (newPage) => {
//         if (newPage > 0 && newPage <= totalPages) {
//             onPageChange(newPage);
//         }
//     };

//     const getPageNumbers = () => {
//         const pageNumbers = [];
//         const maxVisiblePages = 5;

//         if (totalPages <= maxVisiblePages) {
//             for (let i = 1; i <= totalPages; i++) {
//                 pageNumbers.push(i);
//             }
//         } else {
//             if (page <= 3) {
//                 for (let i = 1; i <= 4; i++) {
//                     pageNumbers.push(i);
//                 }
//                 pageNumbers.push('...', totalPages);
//             } else if (page > totalPages - 3) {
//                 pageNumbers.push(1, '...');
//                 for (let i = totalPages - 3; i <= totalPages; i++) {
//                     pageNumbers.push(i);
//                 }
//             } else {
//                 pageNumbers.push(1, '...');
//                 for (let i = page - 1; i <= page + 1; i++) {
//                     pageNumbers.push(i);
//                 }
//                 pageNumbers.push('...', totalPages);
//             }
//         }

//         return pageNumbers;
//     };

//     const pageNumbers = getPageNumbers();

//     return (
//         <div className="pagination_container">
//             <div className="pagination_container_left">    
//                 <span>{`showing `}</span>
//                     <select value={size} onChange={(e) => onSizeChange(Number(e.target.value))}>
//                         <option value={5}>5</option>
//                         <option value={10}>10</option>
//                         <option value={20}>20</option>
//                     </select>
//                 <span>{` out of ${total}`}</span>
//             </div>

//             <div className="pagination_container_right">
//                 <button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className={"pagination_button"}>
//                     {"<"}
//                 </button>
//                 {pageNumbers.map((p, index) =>
//                     typeof p === 'number' ? (
//                         <button
//                             key={index}
//                             onClick={() => handlePageChange(p)}
//                             disabled={p === page}
//                             className={"pagination_button_middle"}
//                             id={"pagination_button_middle_active_hover"}
//                         >
//                             {p}
//                         </button>
//                     ) : (
//                         <span key={index} style={{ margin: '0 5px' }}>{p}</span>
//                     )
//                 )}
//                 <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} className={"pagination_button"}>
//                     {">"}
//                 </button>
//             </div>
//         </div>
//     );
// }