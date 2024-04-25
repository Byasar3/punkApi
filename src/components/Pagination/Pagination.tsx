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
	console.log(totalPages);
	

	const handleNextClick = () => {
		if (!totalPages) return
		// current page + 1
		onPageChange(currentPage + 1)
	}

	return (
		<div className="pagination">
			<button className="pagination__prev" disabled={currentPage === 1} onClick={handlePreviousClick} > Previous Page </button>
			<div className="pagination__current-page-display">{currentPage}</div>
			<button className="pagination__next" disabled={!totalPages} onClick={handleNextClick}> Next Page </button>
		</div>
	);
};

export default Pagination;
