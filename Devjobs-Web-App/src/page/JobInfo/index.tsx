import { useLocation } from "react-router";

const JobInfo = () => {
    const location = useLocation();
    const { jobInfo } = location.state || {};

    if (!jobInfo) {
        return <div className="text-xl text-[#6e8098] block mt-5">Job information not available</div>;
    }

    window.scrollTo(0, 0);

    return (
        <section className="lg:flex lg:flex-col lg:items-center lg:gap-2">
            <div className="mx-[5%] xl:mx-[10%]">
                <header className="w-full max-w-[800px] bg-white rounded-lg pb-12 pt-0 relative bottom-5 md:flex md:justify-between md:items-center md:p-0 md:bottom-8 duration-300 dark:bg-[#19202D]">
                    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-end md:gap-10">
                        <div
                            className="h-20 w-20 rounded-2xl flex items-center justify-center relative bottom-10 md:bottom-0 md:h-[140px] md:w-[143px] md:rounded-l-lg md:rounded-r-none"
                            style={{ backgroundColor: jobInfo.logoBackground }}
                        >
                            <img
                                src={jobInfo.logo}
                                alt={`Logo ${jobInfo.company}`}
                                className="w-12 md:w-20"
                            />
                        </div>

                        <div className="relative bottom-4 md:bottom-0">
                            <h3 className="text-2xl font-bold duration-300 dark:text-white">{jobInfo.company}</h3>
                            <p className="text-md text-[#6e8098] mt-2">{jobInfo.website}</p>
                        </div>
                    </div>

                    <div className="text-center mt-7 md:mt-0 md:mr-10">
                        <a
                            className="bg-[#eeeffc] py-4 px-5 rounded-md text-[#5964e0] font-bold duration-300 dark:bg-[#303642] dark:text-white"
                            href={jobInfo.website}
                            target="_blank"
                        >
                            Company Site
                        </a>
                    </div>
                </header>

                <main className="w-full max-w-[800px] bg-white rounded-lg p-8 md:p-12 duration-300 dark:bg-[#19202D]">
                    <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center md:gap-0">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#6e8098]">{jobInfo.postedAt}</span>
                                <span className="inline-block h-1 w-1 rounded-full bg-[#6e8098] relative top-1"></span>
                                <span className="text-[#6e8098]">{jobInfo.contract}</span>
                            </div>
                            <h3 className="mt-3 text-xl block font-bold md:text-2xl duration-300 dark:text-white">
                                {jobInfo.position}
                            </h3>
                            <span className="block mt-3 text-[#5964e0] font-bold text-sm">{jobInfo.location}</span>
                        </div>

                        <div>
                            <a
                                className="bg-[#5964e0] block py-4 text-center px-7 rounded-md text-white font-bold duration-300 w-full hover:bg-[#939bf4]"
                                href={jobInfo.website}
                                target="_blank"
                            >
                                Apply now
                            </a>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className="paragraphStyles mt-10">{jobInfo.description}</p>
                        </div>

                        <div className="mt-9">
                            <h4 className="text-xl block font-bold duration-300 dark:text-white">Requirements</h4>
                            <p className="paragraphStyles mt-5">{jobInfo.requirements.content}</p>
                            <ul className="flex flex-col gap-3 mt-5 !list-disc !list-inside">
                                {jobInfo.requirements.items.map((item: string, index: number) => (
                                    <li key={index} className="paragraphStyles flex gap-6">
                                        <span className="inline-block flex-1 max-h-1 max-w-1 rounded-full bg-[#6e8098] relative top-2"></span>
                                        <span className="flex-80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-9">
                            <h4 className="text-xl block mt-9 font-bold duration-300 dark:text-white">What You Will Do</h4>
                            <p className="paragraphStyles mt-5">{jobInfo.role.content}</p>
                            <ul className="flex flex-col gap-3 mt-5 !list-disc !list-inside">
                                {jobInfo.role.items.map((item: string, index: number) => (
                                    <li key={index} className="paragraphStyles flex gap-6">
                                        <span className="inline-block flex-1 max-h-1 max-w-1 text-[#5964e0] font-bold">{index + 1}</span>
                                        <span className="flex-80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>

            <footer className="bg-white w-full p-8 mt-24 px-[5%] xl:px-[10%] duration-300 dark:bg-[#19202D]">
                <div className="w-full max-w-[800px] mx-auto md:flex md:justify-between md:items-center">
                    <div className="hidden md:block">
                        <h3 className="mt-3 text-xl block font-bold duration-200 cursor-pointer hover:text-[#6e8098] dark:text-white dark:hover:text-[#91a5be]">
                            {jobInfo.position}
                        </h3>
                        <span className="text-[#6e8098] block mt-3">{jobInfo.company}</span>
                    </div>

                    <div>
                        <a
                            className="bg-[#5964e0] block py-4 text-center px-7 rounded-md text-white font-bold duration-300 w-full hover:bg-[#939bf4]"
                            href={jobInfo.website}
                            target="_blank"
                        >
                            Apply now
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    )
};

export default JobInfo