


export default function footer() {
    return (
        <div className="flex flex-col space-y-3 pt-12 pb-4  justify-center items-center md:text-2xl lg:text-2xl text-xl">
            <h4>Designed and Developed by Hemavarun</h4>
            <div className="flex space-x-3">
                <i className="fa-brands fa-linkedin cursor-pointer hover:text-maincolor text-3xl"></i>
                <i className="fa-brands fa-instagram cursor-pointer hover:text-maincolor text-3xl"></i>
                <i className="fa-brands fa-twitter cursor-pointer hover:text-maincolor text-3xl"></i>
                <i className="fa-brands fa-github cursor-pointer hover:text-maincolor text-3xl"></i>
            </div>
        </div>
    );
}
