"use client"

const ErrorPage = ({error, reset}) => {
    return (
        <div className='h-dvh flex flex-col justify-center items-center'>
            <h1 className="font-bold text-4xl">Something Went Wrong!</h1>
            <h3>{error.message}</h3>
            <button onClick={()=>(reset())} className='px-6 py-2 bg-green-500 hover:bg-green-700 rounded-full mt-4'>Try Again</button>
        </div>
    );
};

export default ErrorPage;