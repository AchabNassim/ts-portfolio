import "./spinner.css"

const Spinner = () => {
    return (
        <div
            id="spinnerContainer"
            className="fixed inset-0 w-screen h-screen flex justify-center items-center z-[1000] rounded-[10px]"
        >
            <span className="loader"></span>
        </div>
    )
};

export default Spinner;