
type PokemonPaginationProps = {
    offset: number;
    onNext: () => void;
    onPrev: () => void;
}

function PokemonPagination({ offset, onNext, onPrev }: PokemonPaginationProps) {
    return (
        <div className="flex justify-between mt-4">
            <button
                onClick={onPrev}
                className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
                disabled={offset === 0}
            >
                ← Prev
            </button>
            <button
                onClick={onNext}
                className="p-2 bg-blue-500 text-white rounded"
            >
                Next →
            </button>
        </div>
    );
}

export default PokemonPagination;