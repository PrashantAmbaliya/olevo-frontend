import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { TbCapture } from "react-icons/tb";
import './Camera.css';

const videoConstraints = {
    height: 720,
    width: 1280,
    facingMode: "environment" as const,
};

interface CameraProps {
    isCameraOpen: boolean;
}

const Camera: React.FC<CameraProps> = ({ isCameraOpen }) => {
    const webcamRef = useRef<Webcam | null>(null);
    const [url, setUrl] = useState<string | null | undefined>(null);

    const capturePhoto = useCallback(async () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log("capturePhoto ~ imageSrc:", imageSrc)
            setUrl(imageSrc || null);
        }
    }, []);

    const onUserMedia = (e: MediaStream) => {
        console.log(e);
    };

    return (
        <>
            {isCameraOpen &&
                !url ?
                (
                    <>
                        <Webcam
                            ref={webcamRef}
                            height={720}
                            width={1280}
                            audio={true}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            onUserMedia={onUserMedia}
                            className="max-w-full h-auto rounded-[8px]"
                        />
                        <div className="flex gap-4 justify-center items-center">
                            <button
                                onClick={capturePhoto}
                                className=" mt-4 px-6 py-2 bg-[#00A1F2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1f92cc] transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <TbCapture className="text-2xl" />
                                <span>Capture</span>
                            </button>
                        </div>
                    </>
                ) : <>
                    <div className="image-container">
                        <img src={url} alt="Screenshot" className="image" />
                        <div className="detection-animation"></div>
                    </div>
                    <button
                        onClick={() => setUrl(null)}
                        className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                    >
                        Refresh
                    </button>
                </>
            }
        </>
    );
};

export default Camera;
