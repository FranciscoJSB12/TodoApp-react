import './TodoLoading.css'

function TodoLoading () {
    return (
        <div className="TodoLoading">
            <div className='loading-spinner'></div>
            <p>Loading tasks, please wait...</p>
        </div>
    );
}

export { TodoLoading };