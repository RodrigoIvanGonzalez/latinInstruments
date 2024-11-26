import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="flex justify-center py-3 px-6 ">
            <form action='/search/' method="get" className=' w-full max-w-xl space-x-6'>
                <div className="relative flex  text-gray-400 focus-within:text-gray-600">
                    <button type='submit'
                        className='relative  flex items-center text-gray-400 focus-within:text-gray-600'>
                        <SearchIcon sx={{ fontSize: 25, position: 'absolute', marginLeft: '12px' }} />
                    </button>
                    <input type="text"
                        placeholder='Buscar'
                        className='w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2  ring-gray-300 focus:ring-gray-500 focus:ring-2' />
                    
                    
                </div>
            </form>
        </div>
    )
}

export default SearchBar