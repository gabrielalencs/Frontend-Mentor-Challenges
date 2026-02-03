import SearchIcon from '../../assets/images/icon-search.svg'

const SearchPlace = () => {
    return (
        <section className='mt-8'>
            <h1 className='font-["Bricolage_Grotesque",sans-serif] text-white font-bold text-center leading-14 text-5xl lg:text-6xl'>How's the <br className='sm:hidden' /> sky looking <br className='md:hidden' /> today?</h1>

            <div className='mt-14 px-5 w-full flex flex-col sm:flex-row items-center justify-center gap-2 max-w-300 mx-auto'>
                <div className='relative cursor-pointer w-full sm:w-1/2 flex items-center gap-2 py-3 px-5 bg-[#272541] hover:bg-[#312f4b] rounded-lg'>
                    <img src={SearchIcon} alt="Icon Search" />
                    <input
                        type="text"
                        placeholder='Search for a place...'
                        className='flex-1 text-white placeholder:text-[#aeaeb7] cursor-pointer outline-none '
                    />
                </div>
                <div className='w-full sm:w-auto'>
                    <button className='bg-[#4455da] text-lg w-full text-white px-5 py-2 rounded-lg mt-2 sm:mt-0 sm:ml-2 cursor-pointer hover:bg-blue-700'>Search</button>
                </div>
            </div>
        </section>
    )
}

export default SearchPlace