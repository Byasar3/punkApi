import "./Pagination.scss"

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {

	const handlePreviousClick = () => {
		// current page - 1
		onPageChange(currentPage - 1)
	}

	const handlePageClick = (page : number) => {
		onPageChange(page)
	}

	const handleNextClick = () => {
		// current page + 1
		onPageChange(currentPage + 1)
	}

	const paginationNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		paginationNumbers.push(i);
	}
	
	return (
		<div className="pagination">
			<button className="pagination__prev" disabled={currentPage === 1} onClick={handlePreviousClick} > Previous Page </button>
			<div>
			{paginationNumbers.map((pageNumber) => (
				<button key={pageNumber} className="pagination__current" onClick={() =>handlePageClick(pageNumber)}>{pageNumber}</button>
			))}
			</div>
			<button className="pagination__next" disabled={currentPage === totalPages} onClick={handleNextClick}> Next Page </button>
		</div>
	);
};

export default Pagination;
