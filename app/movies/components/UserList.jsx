export default function UserList({
  movies,
  onRemoveMovie,
  onMoveUp,
  onMoveDown,
}) {
  return (
    <section className="mt-4">
      <ol className="list-decimal list-inside">
        {movies.map((movie, index) => (
          <li
            key={movie.id}
            className="flex items-center gap-4 hover:font-bold group"
          >
            <span>{movie.title}</span>
            <div className="transition opacity-75 group-hover:opacity-100">
              <button
                onClick={() => onMoveUp(index)}
                disabled={index === 0}
                className="p-1 text-green-800 transition hover:text-green-950 disabled:text-gray-500"
              >
                ↑
              </button>
              <button
                onClick={() => onMoveDown(index)}
                disabled={index === movies.length - 1}
                className="p-1 text-yellow-700 transition hover:text-yellow-950 disabled:text-gray-500"
              >
                ↓
              </button>
              <button
                onClick={() => onRemoveMovie(movie.id)}
                className="p-1 text-red-800 transition hover:text-red-950"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
