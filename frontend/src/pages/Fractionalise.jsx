import React from "react";
import  {useNavigate, useSearchParams}  from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Fractionalise = () => {

    const [tokenName, setTokenName] = React.useState("");
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const tokenID = searchParams.get("tid");
    const userID = searchParams.get("uid");
    const amount = searchParams.get("amt");
    const dur = searchParams.get("dur");
    const int = searchParams.get("int");

    return (
        <div className="flex justify-center h-screen">
            <div className="h-full flex flex-col justify-center">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="mb-6 flex items-center gap-2 text-2xl text-purple-500 hover:text-purple-600 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Dashboard</span>
                </button>
                <div className="h-min text-white max-w-md p-4 space-y-8 w-96 bg-[#0D1321] shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-3xl font-bold text-center">Fractionalise FD Token</h2>
                    </div>
                    <form
                        className="space-y-4"
                        action="http://localhost:3000/api/v1/image/upload"
                        method="POST"
                        enctype="multipart/form-data"
                    >
                        <div>
                            <label
                                htmlFor="tokenName"
                                className="block text-xl font-medium text-white"
                            >
                                Enter the Name of the token
                            </label>
                            <input
                                type="text"
                                id="tokenName"
                                name="tokenName"
                                value={tokenName}   
                                onChange={(e) => setTokenName(e.target.value)}
                                className="p-2 mt-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Keep A Unique Name For your Token"
                            />
                        </div>
                        <div className="max-w-md mx-auto">
                            <label
                                className="text-base text-white font-medium mb-3 block"
                            >
                                Upload file
                            </label>
                            <input
                                type ="file"
                                name ="image"
                                className="w-full text-white font-medium text-md bg-[#0D1321] border-2 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-purple-500 file:hover:bg-gray-200 file:text-white rounded"
                            />
                            <p className="text-xs text-white mt-2">
                                PNG, JPG, SVG, WEBP, and GIF are Allowed.
                            </p>
                        </div>
                        <div>
                            <label
                                htmlFor="volume"
                                className="block text-xl font-medium text-white"
                            >
                                Enter Volume of the Token
                            </label>
                            <input
                                type="number"
                                id="volume"
                                min = {1}
                                max = {parseInt(amount)/1000}
                                name="volume"
                                className="p-2 mt-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 lg:text-lg"
                                placeholder="Enter Volume of tokens"
                            />
                            <p className="text-xs text-white mt-2">
                                Max Mintable Tokens : {parseInt(amount)/1000}
                            </p>
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="userId"
                            >
                            </label>
                            <input
                                type="string"
                                id="UserId"
                                name="UserId"
                                value = {userID}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="FDID"
                            >
                            </label>
                            <input
                                type="string"
                                id="FDID"
                                name="FDID"
                                value={tokenID}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="amount"
                            >
                            </label>
                            <input
                                type="string"
                                id="ampunt"
                                name="amount"
                                value={amount}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="dur"
                            >
                            </label>
                            <input
                                type="string"
                                id="dur"
                                name="dur"
                                value={dur}
                            />
                        </div>
                        <div className="hidden">
                            <label
                                htmlFor="int"
                            >
                            </label>
                            <input
                                type="string"
                                id="int"
                                name="int"
                                value={int}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Mint Tokens
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Fractionalise;